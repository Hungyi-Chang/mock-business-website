'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Stream = require('stream');
var zlib = require('zlib');
var http = require('http');
var Manifest = require('./manifest.json');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Stream__default = /*#__PURE__*/_interopDefaultLegacy(Stream);
var zlib__default = /*#__PURE__*/_interopDefaultLegacy(zlib);
var http__default = /*#__PURE__*/_interopDefaultLegacy(http);
var Manifest__default = /*#__PURE__*/_interopDefaultLegacy(Manifest);

const specialNodeHeaders = [
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
];

const readOnlyCloudFrontHeaders = {
  "accept-encoding": true,
  "content-length": true,
  "if-modified-since": true,
  "if-none-match": true,
  "if-range": true,
  "if-unmodified-since": true,
  "transfer-encoding": true,
  via: true
};

const HttpStatusCodes = {
  202: "Accepted",
  502: "Bad Gateway",
  400: "Bad Request",
  409: "Conflict",
  100: "Continue",
  201: "Created",
  417: "Expectation Failed",
  424: "Failed Dependency",
  403: "Forbidden",
  504: "Gateway Timeout",
  410: "Gone",
  505: "HTTP Version Not Supported",
  418: "I'm a teapot",
  419: "Insufficient Space on Resource",
  507: "Insufficient Storage",
  500: "Server Error",
  411: "Length Required",
  423: "Locked",
  420: "Method Failure",
  405: "Method Not Allowed",
  301: "Moved Permanently",
  302: "Moved Temporarily",
  207: "Multi-Status",
  300: "Multiple Choices",
  511: "Network Authentication Required",
  204: "No Content",
  203: "Non Authoritative Information",
  406: "Not Acceptable",
  404: "Not Found",
  501: "Not Implemented",
  304: "Not Modified",
  200: "OK",
  206: "Partial Content",
  402: "Payment Required",
  308: "Permanent Redirect",
  412: "Precondition Failed",
  428: "Precondition Required",
  102: "Processing",
  407: "Proxy Authentication Required",
  431: "Request Header Fields Too Large",
  408: "Request Timeout",
  413: "Request Entity Too Large",
  414: "Request-URI Too Long",
  416: "Requested Range Not Satisfiable",
  205: "Reset Content",
  303: "See Other",
  503: "Service Unavailable",
  101: "Switching Protocols",
  307: "Temporary Redirect",
  429: "Too Many Requests",
  401: "Unauthorized",
  422: "Unprocessable Entity",
  415: "Unsupported Media Type",
  305: "Use Proxy"
};

const toCloudFrontHeaders = (headers, headerNames, originalHeaders) => {
  const result = {};

  Object.entries(originalHeaders).forEach(([headerName, headerValue]) => {
    result[headerName.toLowerCase()] = headerValue;
  });

  Object.entries(headers).forEach(([headerName, headerValue]) => {
    const headerKey = headerName.toLowerCase();
    headerName = headerNames[headerKey] || headerName;

    if (readOnlyCloudFrontHeaders[headerKey]) {
      return;
    }

    result[headerKey] = [];

    if (headerValue instanceof Array) {
      headerValue.forEach((val) => {
        result[headerKey].push({
          key: headerName,
          value: val.toString()
        });
      });
    } else {
      result[headerKey].push({
        key: headerName,
        value: headerValue.toString()
      });
    }
  });

  return result;
};

const isGzipSupported = (headers) => {
  let gz = false;
  const ae = headers["accept-encoding"];
  if (ae) {
    for (let i = 0; i < ae.length; i++) {
      const { value } = ae[i];
      const bits = value.split(",").map((x) => x.split(";")[0].trim());
      if (bits.indexOf("gzip") !== -1) {
        gz = true;
      }
    }
  }
  return gz;
};

const defaultOptions = {
  enableHTTPCompression: false
};

const handler$1 = (
  event,
  { enableHTTPCompression, rewrittenUri } = defaultOptions
) => {
  const { request: cfRequest, response: cfResponse = { headers: {} } } = event;

  const response = {
    headers: {}
  };

  const newStream = new Stream__default['default'].Readable();

  const req = Object.assign(newStream, http__default['default'].IncomingMessage.prototype);
  req.url = rewrittenUri || cfRequest.uri;
  req.method = cfRequest.method;
  req.rawHeaders = [];
  req.headers = {};
  req.connection = {};

  if (cfRequest.querystring) {
    req.url = req.url + `?` + cfRequest.querystring;
  }

  const headers = cfRequest.headers || {};

  for (const lowercaseKey of Object.keys(headers)) {
    const headerKeyValPairs = headers[lowercaseKey];

    headerKeyValPairs.forEach((keyVal) => {
      req.rawHeaders.push(keyVal.key);
      req.rawHeaders.push(keyVal.value);
    });

    req.headers[lowercaseKey] = headerKeyValPairs[0].value;
  }

  req.getHeader = (name) => {
    return req.headers[name.toLowerCase()];
  };

  req.getHeaders = () => {
    return req.headers;
  };

  if (cfRequest.body && cfRequest.body.data) {
    req.push(
      cfRequest.body.data,
      cfRequest.body.encoding ? "base64" : undefined
    );
  }

  req.push(null);

  const res = new Stream__default['default']();
  res.finished = false;

  Object.defineProperty(res, "statusCode", {
    get() {
      return response.status;
    },
    set(statusCode) {
      response.status = statusCode;
      response.statusDescription = HttpStatusCodes[statusCode];
    }
  });

  res.headers = {};
  const headerNames = {};
  res.writeHead = (status, headers) => {
    response.status = status;
    response.statusDescription = HttpStatusCodes[status];

    if (headers) {
      res.headers = Object.assign(res.headers, headers);
    }
    return res;
  };
  res.write = (chunk) => {
    if (!response.body) {
      response.body = Buffer.from("");
    }

    response.body = Buffer.concat([
      response.body,
      Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)
    ]);
  };

  let shouldGzip = enableHTTPCompression && isGzipSupported(headers);

  const responsePromise = new Promise((resolve) => {
    res.end = (text) => {
      if (res.finished === true) {
        return;
      }

      res.finished = true;

      if (text) res.write(text);

      if (!res.statusCode) {
        res.statusCode = 200;
      }

      if (response.body) {
        response.bodyEncoding = "base64";
        response.body = shouldGzip
          ? zlib__default['default'].gzipSync(response.body).toString("base64")
          : Buffer.from(response.body).toString("base64");
      }

      response.headers = toCloudFrontHeaders(
        res.headers,
        headerNames,
        cfResponse.headers
      );

      if (shouldGzip) {
        response.headers["content-encoding"] = [
          { key: "Content-Encoding", value: "gzip" }
        ];
      }
      resolve(response);
    };
  });

  res.setHeader = (name, value) => {
    res.headers[name.toLowerCase()] = value;
    headerNames[name.toLowerCase()] = name;
  };
  res.removeHeader = (name) => {
    delete res.headers[name.toLowerCase()];
  };
  res.getHeader = (name) => {
    return res.headers[name.toLowerCase()];
  };
  res.getHeaders = () => {
    return res.headers;
  };
  res.hasHeader = (name) => {
    return !!res.getHeader(name);
  };

  return {
    req,
    res,
    responsePromise
  };
};

handler$1.SPECIAL_NODE_HEADERS = specialNodeHeaders;

var nextAwsCloudfront = handler$1;

/**
 * There are multiple occasions where a static/SSG page will be generated after
 * the initial build. This function accepts a generated page, stores it and
 * applies the appropriate headers (e.g. setting an 'Expires' header for
 * regeneration).
 */
const s3StorePage = async (options) => {
    const { S3Client } = await Promise.resolve().then(function () { return require('./S3Client-537aa2f3.js'); });
    const s3 = new S3Client({
        region: options.region,
        maxAttempts: 3
    });
    const s3BasePath = options.basePath
        ? `${options.basePath.replace(/^\//, "")}/`
        : "";
    const baseKey = options.uri
        .replace(/^\//, "")
        .replace(/\.(json|html)$/, "")
        .replace(/^_next\/data\/[^\/]*\//, "");
    const jsonKey = `_next/data/${options.buildId}/${baseKey}.json`;
    const htmlKey = `static-pages/${options.buildId}/${baseKey}.html`;
    const cacheControl = options.revalidate
        ? undefined
        : "public, max-age=0, s-maxage=2678400, must-revalidate";
    const expires = options.revalidate
        ? new Date(new Date().getTime() + 1000 * options.revalidate)
        : undefined;
    const s3JsonParams = {
        Bucket: options.bucketName,
        Key: `${s3BasePath}${jsonKey}`,
        Body: JSON.stringify(options.pageData),
        ContentType: "application/json",
        CacheControl: cacheControl,
        Expires: expires
    };
    const s3HtmlParams = {
        Bucket: options.bucketName,
        Key: `${s3BasePath}${htmlKey}`,
        Body: options.html,
        ContentType: "text/html",
        CacheControl: cacheControl,
        Expires: expires
    };
    const { PutObjectCommand } = await Promise.resolve().then(function () { return require('./PutObjectCommand-75c64cca.js'); });
    await Promise.all([
        s3.send(new PutObjectCommand(s3JsonParams)),
        s3.send(new PutObjectCommand(s3HtmlParams))
    ]);
    return {
        cacheControl,
        expires
    };
};

const handler = async (event) => {
    await Promise.all(event.Records.map(async (record) => {
        const regenerationEvent = JSON.parse(record.body);
        const manifest = Manifest__default['default'];
        const { req, res } = nextAwsCloudfront({ request: regenerationEvent.cloudFrontEventRequest }, { enableHTTPCompression: manifest.enableHTTPCompression });
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const page = require(`./${regenerationEvent.pagePath}`);
        const { renderOpts, html } = await page.renderReqToHTML(req, res, "passthrough");
        await s3StorePage({
            html,
            uri: regenerationEvent.cloudFrontEventRequest.uri,
            basePath: regenerationEvent.basePath,
            bucketName: regenerationEvent.bucketName,
            buildId: manifest.buildId,
            pageData: renderOpts.pageData,
            region: regenerationEvent.region,
            revalidate: renderOpts.revalidate
        });
    }));
};

exports.handler = handler;
