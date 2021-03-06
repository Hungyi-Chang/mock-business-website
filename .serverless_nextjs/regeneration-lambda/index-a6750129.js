'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

exports.__assign = function() {
    exports.__assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return exports.__assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || from);
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

var HttpResponse = /** @class */ (function () {
    function HttpResponse(options) {
        this.statusCode = options.statusCode;
        this.headers = options.headers || {};
        this.body = options.body;
    }
    HttpResponse.isInstance = function (response) {
        //determine if response is a valid HttpResponse
        if (!response)
            return false;
        var resp = response;
        return typeof resp.statusCode === "number" && typeof resp.headers === "object";
    };
    return HttpResponse;
}());

var HttpRequest = /** @class */ (function () {
    function HttpRequest(options) {
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol
            ? options.protocol.substr(-1) !== ":"
                ? options.protocol + ":"
                : options.protocol
            : "https:";
        this.path = options.path ? (options.path.charAt(0) !== "/" ? "/" + options.path : options.path) : "/";
    }
    HttpRequest.isInstance = function (request) {
        //determine if request is a valid httpRequest
        if (!request)
            return false;
        var req = request;
        return ("method" in req &&
            "protocol" in req &&
            "hostname" in req &&
            "path" in req &&
            typeof req["query"] === "object" &&
            typeof req["headers"] === "object");
    };
    HttpRequest.prototype.clone = function () {
        var cloned = new HttpRequest(exports.__assign(exports.__assign({}, this), { headers: exports.__assign({}, this.headers) }));
        if (cloned.query)
            cloned.query = cloneQuery(cloned.query);
        return cloned;
    };
    return HttpRequest;
}());
function cloneQuery(query) {
    return Object.keys(query).reduce(function (carry, paramName) {
        var _a;
        var param = query[paramName];
        return exports.__assign(exports.__assign({}, carry), (_a = {}, _a[paramName] = Array.isArray(param) ? __spreadArray([], __read(param)) : param, _a));
    }, {});
}

var constructStack = function () {
    var absoluteEntries = [];
    var relativeEntries = [];
    var entriesNameSet = new Set();
    var sort = function (entries) {
        return entries.sort(function (a, b) {
            return stepWeights[b.step] - stepWeights[a.step] ||
                priorityWeights[b.priority || "normal"] - priorityWeights[a.priority || "normal"];
        });
    };
    var removeByName = function (toRemove) {
        var isRemoved = false;
        var filterCb = function (entry) {
            if (entry.name && entry.name === toRemove) {
                isRemoved = true;
                entriesNameSet.delete(toRemove);
                return false;
            }
            return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
    };
    var removeByReference = function (toRemove) {
        var isRemoved = false;
        var filterCb = function (entry) {
            if (entry.middleware === toRemove) {
                isRemoved = true;
                if (entry.name)
                    entriesNameSet.delete(entry.name);
                return false;
            }
            return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
    };
    var cloneTo = function (toStack) {
        absoluteEntries.forEach(function (entry) {
            //@ts-ignore
            toStack.add(entry.middleware, exports.__assign({}, entry));
        });
        relativeEntries.forEach(function (entry) {
            //@ts-ignore
            toStack.addRelativeTo(entry.middleware, exports.__assign({}, entry));
        });
        return toStack;
    };
    var expandRelativeMiddlewareList = function (from) {
        var expandedMiddlewareList = [];
        from.before.forEach(function (entry) {
            if (entry.before.length === 0 && entry.after.length === 0) {
                expandedMiddlewareList.push(entry);
            }
            else {
                expandedMiddlewareList.push.apply(expandedMiddlewareList, __spreadArray([], __read(expandRelativeMiddlewareList(entry))));
            }
        });
        expandedMiddlewareList.push(from);
        from.after.reverse().forEach(function (entry) {
            if (entry.before.length === 0 && entry.after.length === 0) {
                expandedMiddlewareList.push(entry);
            }
            else {
                expandedMiddlewareList.push.apply(expandedMiddlewareList, __spreadArray([], __read(expandRelativeMiddlewareList(entry))));
            }
        });
        return expandedMiddlewareList;
    };
    /**
     * Get a final list of middleware in the order of being executed in the resolved handler.
     */
    var getMiddlewareList = function () {
        var normalizedAbsoluteEntries = [];
        var normalizedRelativeEntries = [];
        var normalizedEntriesNameMap = {};
        absoluteEntries.forEach(function (entry) {
            var normalizedEntry = exports.__assign(exports.__assign({}, entry), { before: [], after: [] });
            if (normalizedEntry.name)
                normalizedEntriesNameMap[normalizedEntry.name] = normalizedEntry;
            normalizedAbsoluteEntries.push(normalizedEntry);
        });
        relativeEntries.forEach(function (entry) {
            var normalizedEntry = exports.__assign(exports.__assign({}, entry), { before: [], after: [] });
            if (normalizedEntry.name)
                normalizedEntriesNameMap[normalizedEntry.name] = normalizedEntry;
            normalizedRelativeEntries.push(normalizedEntry);
        });
        normalizedRelativeEntries.forEach(function (entry) {
            if (entry.toMiddleware) {
                var toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
                if (toMiddleware === undefined) {
                    throw new Error(entry.toMiddleware + " is not found when adding " + (entry.name || "anonymous") + " middleware " + entry.relation + " " + entry.toMiddleware);
                }
                if (entry.relation === "after") {
                    toMiddleware.after.push(entry);
                }
                if (entry.relation === "before") {
                    toMiddleware.before.push(entry);
                }
            }
        });
        var mainChain = sort(normalizedAbsoluteEntries)
            .map(expandRelativeMiddlewareList)
            .reduce(function (wholeList, expendedMiddlewareList) {
            // TODO: Replace it with Array.flat();
            wholeList.push.apply(wholeList, __spreadArray([], __read(expendedMiddlewareList)));
            return wholeList;
        }, []);
        return mainChain.map(function (entry) { return entry.middleware; });
    };
    var stack = {
        add: function (middleware, options) {
            if (options === void 0) { options = {}; }
            var name = options.name, override = options.override;
            var entry = exports.__assign({ step: "initialize", priority: "normal", middleware: middleware }, options);
            if (name) {
                if (entriesNameSet.has(name)) {
                    if (!override)
                        throw new Error("Duplicate middleware name '" + name + "'");
                    var toOverrideIndex = absoluteEntries.findIndex(function (entry) { return entry.name === name; });
                    var toOverride = absoluteEntries[toOverrideIndex];
                    if (toOverride.step !== entry.step || toOverride.priority !== entry.priority) {
                        throw new Error("\"" + name + "\" middleware with " + toOverride.priority + " priority in " + toOverride.step + " step cannot be " +
                            ("overridden by same-name middleware with " + entry.priority + " priority in " + entry.step + " step."));
                    }
                    absoluteEntries.splice(toOverrideIndex, 1);
                }
                entriesNameSet.add(name);
            }
            absoluteEntries.push(entry);
        },
        addRelativeTo: function (middleware, options) {
            var name = options.name, override = options.override;
            var entry = exports.__assign({ middleware: middleware }, options);
            if (name) {
                if (entriesNameSet.has(name)) {
                    if (!override)
                        throw new Error("Duplicate middleware name '" + name + "'");
                    var toOverrideIndex = relativeEntries.findIndex(function (entry) { return entry.name === name; });
                    var toOverride = relativeEntries[toOverrideIndex];
                    if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                        throw new Error("\"" + name + "\" middleware " + toOverride.relation + " \"" + toOverride.toMiddleware + "\" middleware cannot be overridden " +
                            ("by same-name middleware " + entry.relation + " \"" + entry.toMiddleware + "\" middleware."));
                    }
                    relativeEntries.splice(toOverrideIndex, 1);
                }
                entriesNameSet.add(name);
            }
            relativeEntries.push(entry);
        },
        clone: function () { return cloneTo(constructStack()); },
        use: function (plugin) {
            plugin.applyToStack(stack);
        },
        remove: function (toRemove) {
            if (typeof toRemove === "string")
                return removeByName(toRemove);
            else
                return removeByReference(toRemove);
        },
        removeByTag: function (toRemove) {
            var isRemoved = false;
            var filterCb = function (entry) {
                var tags = entry.tags, name = entry.name;
                if (tags && tags.includes(toRemove)) {
                    if (name)
                        entriesNameSet.delete(name);
                    isRemoved = true;
                    return false;
                }
                return true;
            };
            absoluteEntries = absoluteEntries.filter(filterCb);
            relativeEntries = relativeEntries.filter(filterCb);
            return isRemoved;
        },
        concat: function (from) {
            var cloned = cloneTo(constructStack());
            cloned.use(from);
            return cloned;
        },
        applyToStack: cloneTo,
        resolve: function (handler, context) {
            var e_1, _a;
            try {
                for (var _b = __values(getMiddlewareList().reverse()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var middleware = _c.value;
                    handler = middleware(handler, context);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return handler;
        },
    };
    return stack;
};
var stepWeights = {
    initialize: 5,
    serialize: 4,
    build: 3,
    finalizeRequest: 2,
    deserialize: 1,
};
var priorityWeights = {
    high: 3,
    normal: 2,
    low: 1,
};

var Client = /** @class */ (function () {
    function Client(config) {
        this.middlewareStack = constructStack();
        this.config = config;
    }
    Client.prototype.send = function (command, optionsOrCb, cb) {
        var options = typeof optionsOrCb !== "function" ? optionsOrCb : undefined;
        var callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
        var handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
        if (callback) {
            handler(command)
                .then(function (result) { return callback(null, result.output); }, function (err) { return callback(err); })
                .catch(
            // prevent any errors thrown in the callback from triggering an
            // unhandled promise rejection
            function () { });
        }
        else {
            return handler(command).then(function (result) { return result.output; });
        }
    };
    Client.prototype.destroy = function () {
        if (this.config.requestHandler.destroy)
            this.config.requestHandler.destroy();
    };
    return Client;
}());

var Command = /** @class */ (function () {
    function Command() {
        this.middlewareStack = constructStack();
    }
    return Command;
}());

/**
 * Function that wraps encodeURIComponent to encode additional characters
 * to fully adhere to RFC 3986.
 */
function extendedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    });
}

/**
 * Recursively parses object and populates value is node from
 * "#text" key if it's available
 */
var getValueFromTextNode = function (obj) {
    var textNodeName = "#text";
    for (var key in obj) {
        if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== undefined) {
            obj[key] = obj[key][textNodeName];
        }
        else if (typeof obj[key] === "object" && obj[key] !== null) {
            obj[key] = getValueFromTextNode(obj[key]);
        }
    }
    return obj;
};

/**
 * Lazy String holder for JSON typed contents.
 */
/**
 * Because of https://github.com/microsoft/tslib/issues/95,
 * TS 'extends' shim doesn't support extending native types like String.
 * So here we create StringWrapper that duplicate everything from String
 * class including its prototype chain. So we can extend from here.
 */
// @ts-ignore StringWrapper implementation is not a simple constructor
var StringWrapper = function () {
    //@ts-ignore 'this' cannot be assigned to any, but Object.getPrototypeOf accepts any
    var Class = Object.getPrototypeOf(this).constructor;
    var Constructor = Function.bind.apply(String, __spreadArray([null], __read(arguments)));
    //@ts-ignore Call wrapped String constructor directly, don't bother typing it.
    var instance = new Constructor();
    Object.setPrototypeOf(instance, Class.prototype);
    return instance;
};
StringWrapper.prototype = Object.create(String.prototype, {
    constructor: {
        value: StringWrapper,
        enumerable: false,
        writable: true,
        configurable: true,
    },
});
Object.setPrototypeOf(StringWrapper, String);
/** @class */ ((function (_super) {
    __extends(LazyJsonString, _super);
    function LazyJsonString() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LazyJsonString.prototype.deserializeJSON = function () {
        return JSON.parse(_super.prototype.toString.call(this));
    };
    LazyJsonString.prototype.toJSON = function () {
        return _super.prototype.toString.call(this);
    };
    LazyJsonString.fromObject = function (object) {
        if (object instanceof LazyJsonString) {
            return object;
        }
        else if (object instanceof String || typeof object === "string") {
            return new LazyJsonString(object);
        }
        return new LazyJsonString(JSON.stringify(object));
    };
    return LazyJsonString;
})(StringWrapper));

var SENSITIVE_STRING = "***SensitiveInformation***";

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

var Aacute$1 = "??";
var aacute$1 = "??";
var Abreve = "??";
var abreve = "??";
var ac = "???";
var acd = "???";
var acE = "?????";
var Acirc$1 = "??";
var acirc$1 = "??";
var acute$1 = "??";
var Acy = "??";
var acy = "??";
var AElig$1 = "??";
var aelig$1 = "??";
var af = "???";
var Afr = "????";
var afr = "????";
var Agrave$1 = "??";
var agrave$1 = "??";
var alefsym = "???";
var aleph = "???";
var Alpha = "??";
var alpha = "??";
var Amacr = "??";
var amacr = "??";
var amalg = "???";
var amp$2 = "&";
var AMP$1 = "&";
var andand = "???";
var And = "???";
var and = "???";
var andd = "???";
var andslope = "???";
var andv = "???";
var ang = "???";
var ange = "???";
var angle = "???";
var angmsdaa = "???";
var angmsdab = "???";
var angmsdac = "???";
var angmsdad = "???";
var angmsdae = "???";
var angmsdaf = "???";
var angmsdag = "???";
var angmsdah = "???";
var angmsd = "???";
var angrt = "???";
var angrtvb = "???";
var angrtvbd = "???";
var angsph = "???";
var angst = "??";
var angzarr = "???";
var Aogon = "??";
var aogon = "??";
var Aopf = "????";
var aopf = "????";
var apacir = "???";
var ap = "???";
var apE = "???";
var ape = "???";
var apid = "???";
var apos$1 = "'";
var ApplyFunction = "???";
var approx = "???";
var approxeq = "???";
var Aring$1 = "??";
var aring$1 = "??";
var Ascr = "????";
var ascr = "????";
var Assign = "???";
var ast = "*";
var asymp = "???";
var asympeq = "???";
var Atilde$1 = "??";
var atilde$1 = "??";
var Auml$1 = "??";
var auml$1 = "??";
var awconint = "???";
var awint = "???";
var backcong = "???";
var backepsilon = "??";
var backprime = "???";
var backsim = "???";
var backsimeq = "???";
var Backslash = "???";
var Barv = "???";
var barvee = "???";
var barwed = "???";
var Barwed = "???";
var barwedge = "???";
var bbrk = "???";
var bbrktbrk = "???";
var bcong = "???";
var Bcy = "??";
var bcy = "??";
var bdquo = "???";
var becaus = "???";
var because = "???";
var Because = "???";
var bemptyv = "???";
var bepsi = "??";
var bernou = "???";
var Bernoullis = "???";
var Beta = "??";
var beta = "??";
var beth = "???";
var between = "???";
var Bfr = "????";
var bfr = "????";
var bigcap = "???";
var bigcirc = "???";
var bigcup = "???";
var bigodot = "???";
var bigoplus = "???";
var bigotimes = "???";
var bigsqcup = "???";
var bigstar = "???";
var bigtriangledown = "???";
var bigtriangleup = "???";
var biguplus = "???";
var bigvee = "???";
var bigwedge = "???";
var bkarow = "???";
var blacklozenge = "???";
var blacksquare = "???";
var blacktriangle = "???";
var blacktriangledown = "???";
var blacktriangleleft = "???";
var blacktriangleright = "???";
var blank = "???";
var blk12 = "???";
var blk14 = "???";
var blk34 = "???";
var block = "???";
var bne = "=???";
var bnequiv = "??????";
var bNot = "???";
var bnot = "???";
var Bopf = "????";
var bopf = "????";
var bot = "???";
var bottom = "???";
var bowtie = "???";
var boxbox = "???";
var boxdl = "???";
var boxdL = "???";
var boxDl = "???";
var boxDL = "???";
var boxdr = "???";
var boxdR = "???";
var boxDr = "???";
var boxDR = "???";
var boxh = "???";
var boxH = "???";
var boxhd = "???";
var boxHd = "???";
var boxhD = "???";
var boxHD = "???";
var boxhu = "???";
var boxHu = "???";
var boxhU = "???";
var boxHU = "???";
var boxminus = "???";
var boxplus = "???";
var boxtimes = "???";
var boxul = "???";
var boxuL = "???";
var boxUl = "???";
var boxUL = "???";
var boxur = "???";
var boxuR = "???";
var boxUr = "???";
var boxUR = "???";
var boxv = "???";
var boxV = "???";
var boxvh = "???";
var boxvH = "???";
var boxVh = "???";
var boxVH = "???";
var boxvl = "???";
var boxvL = "???";
var boxVl = "???";
var boxVL = "???";
var boxvr = "???";
var boxvR = "???";
var boxVr = "???";
var boxVR = "???";
var bprime = "???";
var breve = "??";
var Breve = "??";
var brvbar$1 = "??";
var bscr = "????";
var Bscr = "???";
var bsemi = "???";
var bsim = "???";
var bsime = "???";
var bsolb = "???";
var bsol = "\\";
var bsolhsub = "???";
var bull = "???";
var bullet = "???";
var bump = "???";
var bumpE = "???";
var bumpe = "???";
var Bumpeq = "???";
var bumpeq = "???";
var Cacute = "??";
var cacute = "??";
var capand = "???";
var capbrcup = "???";
var capcap = "???";
var cap = "???";
var Cap = "???";
var capcup = "???";
var capdot = "???";
var CapitalDifferentialD = "???";
var caps = "??????";
var caret = "???";
var caron = "??";
var Cayleys = "???";
var ccaps = "???";
var Ccaron = "??";
var ccaron = "??";
var Ccedil$1 = "??";
var ccedil$1 = "??";
var Ccirc = "??";
var ccirc = "??";
var Cconint = "???";
var ccups = "???";
var ccupssm = "???";
var Cdot = "??";
var cdot = "??";
var cedil$1 = "??";
var Cedilla = "??";
var cemptyv = "???";
var cent$1 = "??";
var centerdot = "??";
var CenterDot = "??";
var cfr = "????";
var Cfr = "???";
var CHcy = "??";
var chcy = "??";
var check = "???";
var checkmark = "???";
var Chi = "??";
var chi = "??";
var circ = "??";
var circeq = "???";
var circlearrowleft = "???";
var circlearrowright = "???";
var circledast = "???";
var circledcirc = "???";
var circleddash = "???";
var CircleDot = "???";
var circledR = "??";
var circledS = "???";
var CircleMinus = "???";
var CirclePlus = "???";
var CircleTimes = "???";
var cir = "???";
var cirE = "???";
var cire = "???";
var cirfnint = "???";
var cirmid = "???";
var cirscir = "???";
var ClockwiseContourIntegral = "???";
var CloseCurlyDoubleQuote = "???";
var CloseCurlyQuote = "???";
var clubs = "???";
var clubsuit = "???";
var colon = ":";
var Colon = "???";
var Colone = "???";
var colone = "???";
var coloneq = "???";
var comma = ",";
var commat = "@";
var comp = "???";
var compfn = "???";
var complement = "???";
var complexes = "???";
var cong = "???";
var congdot = "???";
var Congruent = "???";
var conint = "???";
var Conint = "???";
var ContourIntegral = "???";
var copf = "????";
var Copf = "???";
var coprod = "???";
var Coproduct = "???";
var copy$1 = "??";
var COPY$1 = "??";
var copysr = "???";
var CounterClockwiseContourIntegral = "???";
var crarr = "???";
var cross = "???";
var Cross = "???";
var Cscr = "????";
var cscr = "????";
var csub = "???";
var csube = "???";
var csup = "???";
var csupe = "???";
var ctdot = "???";
var cudarrl = "???";
var cudarrr = "???";
var cuepr = "???";
var cuesc = "???";
var cularr = "???";
var cularrp = "???";
var cupbrcap = "???";
var cupcap = "???";
var CupCap = "???";
var cup = "???";
var Cup = "???";
var cupcup = "???";
var cupdot = "???";
var cupor = "???";
var cups = "??????";
var curarr = "???";
var curarrm = "???";
var curlyeqprec = "???";
var curlyeqsucc = "???";
var curlyvee = "???";
var curlywedge = "???";
var curren$1 = "??";
var curvearrowleft = "???";
var curvearrowright = "???";
var cuvee = "???";
var cuwed = "???";
var cwconint = "???";
var cwint = "???";
var cylcty = "???";
var dagger = "???";
var Dagger = "???";
var daleth = "???";
var darr = "???";
var Darr = "???";
var dArr = "???";
var dash = "???";
var Dashv = "???";
var dashv = "???";
var dbkarow = "???";
var dblac = "??";
var Dcaron = "??";
var dcaron = "??";
var Dcy = "??";
var dcy = "??";
var ddagger = "???";
var ddarr = "???";
var DD = "???";
var dd = "???";
var DDotrahd = "???";
var ddotseq = "???";
var deg$1 = "??";
var Del = "???";
var Delta = "??";
var delta = "??";
var demptyv = "???";
var dfisht = "???";
var Dfr = "????";
var dfr = "????";
var dHar = "???";
var dharl = "???";
var dharr = "???";
var DiacriticalAcute = "??";
var DiacriticalDot = "??";
var DiacriticalDoubleAcute = "??";
var DiacriticalGrave = "`";
var DiacriticalTilde = "??";
var diam = "???";
var diamond = "???";
var Diamond = "???";
var diamondsuit = "???";
var diams = "???";
var die = "??";
var DifferentialD = "???";
var digamma = "??";
var disin = "???";
var div = "??";
var divide$1 = "??";
var divideontimes = "???";
var divonx = "???";
var DJcy = "??";
var djcy = "??";
var dlcorn = "???";
var dlcrop = "???";
var dollar = "$";
var Dopf = "????";
var dopf = "????";
var Dot = "??";
var dot = "??";
var DotDot = "???";
var doteq = "???";
var doteqdot = "???";
var DotEqual = "???";
var dotminus = "???";
var dotplus = "???";
var dotsquare = "???";
var doublebarwedge = "???";
var DoubleContourIntegral = "???";
var DoubleDot = "??";
var DoubleDownArrow = "???";
var DoubleLeftArrow = "???";
var DoubleLeftRightArrow = "???";
var DoubleLeftTee = "???";
var DoubleLongLeftArrow = "???";
var DoubleLongLeftRightArrow = "???";
var DoubleLongRightArrow = "???";
var DoubleRightArrow = "???";
var DoubleRightTee = "???";
var DoubleUpArrow = "???";
var DoubleUpDownArrow = "???";
var DoubleVerticalBar = "???";
var DownArrowBar = "???";
var downarrow = "???";
var DownArrow = "???";
var Downarrow = "???";
var DownArrowUpArrow = "???";
var DownBreve = "??";
var downdownarrows = "???";
var downharpoonleft = "???";
var downharpoonright = "???";
var DownLeftRightVector = "???";
var DownLeftTeeVector = "???";
var DownLeftVectorBar = "???";
var DownLeftVector = "???";
var DownRightTeeVector = "???";
var DownRightVectorBar = "???";
var DownRightVector = "???";
var DownTeeArrow = "???";
var DownTee = "???";
var drbkarow = "???";
var drcorn = "???";
var drcrop = "???";
var Dscr = "????";
var dscr = "????";
var DScy = "??";
var dscy = "??";
var dsol = "???";
var Dstrok = "??";
var dstrok = "??";
var dtdot = "???";
var dtri = "???";
var dtrif = "???";
var duarr = "???";
var duhar = "???";
var dwangle = "???";
var DZcy = "??";
var dzcy = "??";
var dzigrarr = "???";
var Eacute$1 = "??";
var eacute$1 = "??";
var easter = "???";
var Ecaron = "??";
var ecaron = "??";
var Ecirc$1 = "??";
var ecirc$1 = "??";
var ecir = "???";
var ecolon = "???";
var Ecy = "??";
var ecy = "??";
var eDDot = "???";
var Edot = "??";
var edot = "??";
var eDot = "???";
var ee = "???";
var efDot = "???";
var Efr = "????";
var efr = "????";
var eg = "???";
var Egrave$1 = "??";
var egrave$1 = "??";
var egs = "???";
var egsdot = "???";
var el = "???";
var Element = "???";
var elinters = "???";
var ell = "???";
var els = "???";
var elsdot = "???";
var Emacr = "??";
var emacr = "??";
var empty = "???";
var emptyset = "???";
var EmptySmallSquare = "???";
var emptyv = "???";
var EmptyVerySmallSquare = "???";
var emsp13 = "???";
var emsp14 = "???";
var emsp = "???";
var ENG = "??";
var eng = "??";
var ensp = "???";
var Eogon = "??";
var eogon = "??";
var Eopf = "????";
var eopf = "????";
var epar = "???";
var eparsl = "???";
var eplus = "???";
var epsi = "??";
var Epsilon = "??";
var epsilon = "??";
var epsiv = "??";
var eqcirc = "???";
var eqcolon = "???";
var eqsim = "???";
var eqslantgtr = "???";
var eqslantless = "???";
var Equal = "???";
var equals = "=";
var EqualTilde = "???";
var equest = "???";
var Equilibrium = "???";
var equiv = "???";
var equivDD = "???";
var eqvparsl = "???";
var erarr = "???";
var erDot = "???";
var escr = "???";
var Escr = "???";
var esdot = "???";
var Esim = "???";
var esim = "???";
var Eta = "??";
var eta = "??";
var ETH$1 = "??";
var eth$1 = "??";
var Euml$1 = "??";
var euml$1 = "??";
var euro = "???";
var excl = "!";
var exist = "???";
var Exists = "???";
var expectation = "???";
var exponentiale = "???";
var ExponentialE = "???";
var fallingdotseq = "???";
var Fcy = "??";
var fcy = "??";
var female = "???";
var ffilig = "???";
var fflig = "???";
var ffllig = "???";
var Ffr = "????";
var ffr = "????";
var filig = "???";
var FilledSmallSquare = "???";
var FilledVerySmallSquare = "???";
var fjlig = "fj";
var flat = "???";
var fllig = "???";
var fltns = "???";
var fnof = "??";
var Fopf = "????";
var fopf = "????";
var forall = "???";
var ForAll = "???";
var fork = "???";
var forkv = "???";
var Fouriertrf = "???";
var fpartint = "???";
var frac12$1 = "??";
var frac13 = "???";
var frac14$1 = "??";
var frac15 = "???";
var frac16 = "???";
var frac18 = "???";
var frac23 = "???";
var frac25 = "???";
var frac34$1 = "??";
var frac35 = "???";
var frac38 = "???";
var frac45 = "???";
var frac56 = "???";
var frac58 = "???";
var frac78 = "???";
var frasl = "???";
var frown = "???";
var fscr = "????";
var Fscr = "???";
var gacute = "??";
var Gamma = "??";
var gamma = "??";
var Gammad = "??";
var gammad = "??";
var gap = "???";
var Gbreve = "??";
var gbreve = "??";
var Gcedil = "??";
var Gcirc = "??";
var gcirc = "??";
var Gcy = "??";
var gcy = "??";
var Gdot = "??";
var gdot = "??";
var ge = "???";
var gE = "???";
var gEl = "???";
var gel = "???";
var geq = "???";
var geqq = "???";
var geqslant = "???";
var gescc = "???";
var ges = "???";
var gesdot = "???";
var gesdoto = "???";
var gesdotol = "???";
var gesl = "??????";
var gesles = "???";
var Gfr = "????";
var gfr = "????";
var gg = "???";
var Gg = "???";
var ggg = "???";
var gimel = "???";
var GJcy = "??";
var gjcy = "??";
var gla = "???";
var gl = "???";
var glE = "???";
var glj = "???";
var gnap = "???";
var gnapprox = "???";
var gne = "???";
var gnE = "???";
var gneq = "???";
var gneqq = "???";
var gnsim = "???";
var Gopf = "????";
var gopf = "????";
var grave = "`";
var GreaterEqual = "???";
var GreaterEqualLess = "???";
var GreaterFullEqual = "???";
var GreaterGreater = "???";
var GreaterLess = "???";
var GreaterSlantEqual = "???";
var GreaterTilde = "???";
var Gscr = "????";
var gscr = "???";
var gsim = "???";
var gsime = "???";
var gsiml = "???";
var gtcc = "???";
var gtcir = "???";
var gt$2 = ">";
var GT$1 = ">";
var Gt = "???";
var gtdot = "???";
var gtlPar = "???";
var gtquest = "???";
var gtrapprox = "???";
var gtrarr = "???";
var gtrdot = "???";
var gtreqless = "???";
var gtreqqless = "???";
var gtrless = "???";
var gtrsim = "???";
var gvertneqq = "??????";
var gvnE = "??????";
var Hacek = "??";
var hairsp = "???";
var half = "??";
var hamilt = "???";
var HARDcy = "??";
var hardcy = "??";
var harrcir = "???";
var harr = "???";
var hArr = "???";
var harrw = "???";
var Hat = "^";
var hbar = "???";
var Hcirc = "??";
var hcirc = "??";
var hearts = "???";
var heartsuit = "???";
var hellip = "???";
var hercon = "???";
var hfr = "????";
var Hfr = "???";
var HilbertSpace = "???";
var hksearow = "???";
var hkswarow = "???";
var hoarr = "???";
var homtht = "???";
var hookleftarrow = "???";
var hookrightarrow = "???";
var hopf = "????";
var Hopf = "???";
var horbar = "???";
var HorizontalLine = "???";
var hscr = "????";
var Hscr = "???";
var hslash = "???";
var Hstrok = "??";
var hstrok = "??";
var HumpDownHump = "???";
var HumpEqual = "???";
var hybull = "???";
var hyphen = "???";
var Iacute$1 = "??";
var iacute$1 = "??";
var ic = "???";
var Icirc$1 = "??";
var icirc$1 = "??";
var Icy = "??";
var icy = "??";
var Idot = "??";
var IEcy = "??";
var iecy = "??";
var iexcl$1 = "??";
var iff = "???";
var ifr = "????";
var Ifr = "???";
var Igrave$1 = "??";
var igrave$1 = "??";
var ii = "???";
var iiiint = "???";
var iiint = "???";
var iinfin = "???";
var iiota = "???";
var IJlig = "??";
var ijlig = "??";
var Imacr = "??";
var imacr = "??";
var image = "???";
var ImaginaryI = "???";
var imagline = "???";
var imagpart = "???";
var imath = "??";
var Im = "???";
var imof = "???";
var imped = "??";
var Implies = "???";
var incare = "???";
var infin = "???";
var infintie = "???";
var inodot = "??";
var intcal = "???";
var int = "???";
var Int = "???";
var integers = "???";
var Integral = "???";
var intercal = "???";
var Intersection = "???";
var intlarhk = "???";
var intprod = "???";
var InvisibleComma = "???";
var InvisibleTimes = "???";
var IOcy = "??";
var iocy = "??";
var Iogon = "??";
var iogon = "??";
var Iopf = "????";
var iopf = "????";
var Iota = "??";
var iota = "??";
var iprod = "???";
var iquest$1 = "??";
var iscr = "????";
var Iscr = "???";
var isin = "???";
var isindot = "???";
var isinE = "???";
var isins = "???";
var isinsv = "???";
var isinv = "???";
var it = "???";
var Itilde = "??";
var itilde = "??";
var Iukcy = "??";
var iukcy = "??";
var Iuml$1 = "??";
var iuml$1 = "??";
var Jcirc = "??";
var jcirc = "??";
var Jcy = "??";
var jcy = "??";
var Jfr = "????";
var jfr = "????";
var jmath = "??";
var Jopf = "????";
var jopf = "????";
var Jscr = "????";
var jscr = "????";
var Jsercy = "??";
var jsercy = "??";
var Jukcy = "??";
var jukcy = "??";
var Kappa = "??";
var kappa = "??";
var kappav = "??";
var Kcedil = "??";
var kcedil = "??";
var Kcy = "??";
var kcy = "??";
var Kfr = "????";
var kfr = "????";
var kgreen = "??";
var KHcy = "??";
var khcy = "??";
var KJcy = "??";
var kjcy = "??";
var Kopf = "????";
var kopf = "????";
var Kscr = "????";
var kscr = "????";
var lAarr = "???";
var Lacute = "??";
var lacute = "??";
var laemptyv = "???";
var lagran = "???";
var Lambda = "??";
var lambda = "??";
var lang = "???";
var Lang = "???";
var langd = "???";
var langle = "???";
var lap = "???";
var Laplacetrf = "???";
var laquo$1 = "??";
var larrb = "???";
var larrbfs = "???";
var larr = "???";
var Larr = "???";
var lArr = "???";
var larrfs = "???";
var larrhk = "???";
var larrlp = "???";
var larrpl = "???";
var larrsim = "???";
var larrtl = "???";
var latail = "???";
var lAtail = "???";
var lat = "???";
var late = "???";
var lates = "??????";
var lbarr = "???";
var lBarr = "???";
var lbbrk = "???";
var lbrace = "{";
var lbrack = "[";
var lbrke = "???";
var lbrksld = "???";
var lbrkslu = "???";
var Lcaron = "??";
var lcaron = "??";
var Lcedil = "??";
var lcedil = "??";
var lceil = "???";
var lcub = "{";
var Lcy = "??";
var lcy = "??";
var ldca = "???";
var ldquo = "???";
var ldquor = "???";
var ldrdhar = "???";
var ldrushar = "???";
var ldsh = "???";
var le = "???";
var lE = "???";
var LeftAngleBracket = "???";
var LeftArrowBar = "???";
var leftarrow = "???";
var LeftArrow = "???";
var Leftarrow = "???";
var LeftArrowRightArrow = "???";
var leftarrowtail = "???";
var LeftCeiling = "???";
var LeftDoubleBracket = "???";
var LeftDownTeeVector = "???";
var LeftDownVectorBar = "???";
var LeftDownVector = "???";
var LeftFloor = "???";
var leftharpoondown = "???";
var leftharpoonup = "???";
var leftleftarrows = "???";
var leftrightarrow = "???";
var LeftRightArrow = "???";
var Leftrightarrow = "???";
var leftrightarrows = "???";
var leftrightharpoons = "???";
var leftrightsquigarrow = "???";
var LeftRightVector = "???";
var LeftTeeArrow = "???";
var LeftTee = "???";
var LeftTeeVector = "???";
var leftthreetimes = "???";
var LeftTriangleBar = "???";
var LeftTriangle = "???";
var LeftTriangleEqual = "???";
var LeftUpDownVector = "???";
var LeftUpTeeVector = "???";
var LeftUpVectorBar = "???";
var LeftUpVector = "???";
var LeftVectorBar = "???";
var LeftVector = "???";
var lEg = "???";
var leg = "???";
var leq = "???";
var leqq = "???";
var leqslant = "???";
var lescc = "???";
var les = "???";
var lesdot = "???";
var lesdoto = "???";
var lesdotor = "???";
var lesg = "??????";
var lesges = "???";
var lessapprox = "???";
var lessdot = "???";
var lesseqgtr = "???";
var lesseqqgtr = "???";
var LessEqualGreater = "???";
var LessFullEqual = "???";
var LessGreater = "???";
var lessgtr = "???";
var LessLess = "???";
var lesssim = "???";
var LessSlantEqual = "???";
var LessTilde = "???";
var lfisht = "???";
var lfloor = "???";
var Lfr = "????";
var lfr = "????";
var lg = "???";
var lgE = "???";
var lHar = "???";
var lhard = "???";
var lharu = "???";
var lharul = "???";
var lhblk = "???";
var LJcy = "??";
var ljcy = "??";
var llarr = "???";
var ll = "???";
var Ll = "???";
var llcorner = "???";
var Lleftarrow = "???";
var llhard = "???";
var lltri = "???";
var Lmidot = "??";
var lmidot = "??";
var lmoustache = "???";
var lmoust = "???";
var lnap = "???";
var lnapprox = "???";
var lne = "???";
var lnE = "???";
var lneq = "???";
var lneqq = "???";
var lnsim = "???";
var loang = "???";
var loarr = "???";
var lobrk = "???";
var longleftarrow = "???";
var LongLeftArrow = "???";
var Longleftarrow = "???";
var longleftrightarrow = "???";
var LongLeftRightArrow = "???";
var Longleftrightarrow = "???";
var longmapsto = "???";
var longrightarrow = "???";
var LongRightArrow = "???";
var Longrightarrow = "???";
var looparrowleft = "???";
var looparrowright = "???";
var lopar = "???";
var Lopf = "????";
var lopf = "????";
var loplus = "???";
var lotimes = "???";
var lowast = "???";
var lowbar = "_";
var LowerLeftArrow = "???";
var LowerRightArrow = "???";
var loz = "???";
var lozenge = "???";
var lozf = "???";
var lpar = "(";
var lparlt = "???";
var lrarr = "???";
var lrcorner = "???";
var lrhar = "???";
var lrhard = "???";
var lrm = "???";
var lrtri = "???";
var lsaquo = "???";
var lscr = "????";
var Lscr = "???";
var lsh = "???";
var Lsh = "???";
var lsim = "???";
var lsime = "???";
var lsimg = "???";
var lsqb = "[";
var lsquo = "???";
var lsquor = "???";
var Lstrok = "??";
var lstrok = "??";
var ltcc = "???";
var ltcir = "???";
var lt$2 = "<";
var LT$1 = "<";
var Lt = "???";
var ltdot = "???";
var lthree = "???";
var ltimes = "???";
var ltlarr = "???";
var ltquest = "???";
var ltri = "???";
var ltrie = "???";
var ltrif = "???";
var ltrPar = "???";
var lurdshar = "???";
var luruhar = "???";
var lvertneqq = "??????";
var lvnE = "??????";
var macr$1 = "??";
var male = "???";
var malt = "???";
var maltese = "???";
var map = "???";
var mapsto = "???";
var mapstodown = "???";
var mapstoleft = "???";
var mapstoup = "???";
var marker = "???";
var mcomma = "???";
var Mcy = "??";
var mcy = "??";
var mdash = "???";
var mDDot = "???";
var measuredangle = "???";
var MediumSpace = "???";
var Mellintrf = "???";
var Mfr = "????";
var mfr = "????";
var mho = "???";
var micro$1 = "??";
var midast = "*";
var midcir = "???";
var mid = "???";
var middot$1 = "??";
var minusb = "???";
var minus = "???";
var minusd = "???";
var minusdu = "???";
var MinusPlus = "???";
var mlcp = "???";
var mldr = "???";
var mnplus = "???";
var models = "???";
var Mopf = "????";
var mopf = "????";
var mp = "???";
var mscr = "????";
var Mscr = "???";
var mstpos = "???";
var Mu = "??";
var mu = "??";
var multimap = "???";
var mumap = "???";
var nabla = "???";
var Nacute = "??";
var nacute = "??";
var nang = "??????";
var nap = "???";
var napE = "?????";
var napid = "?????";
var napos = "??";
var napprox = "???";
var natural = "???";
var naturals = "???";
var natur = "???";
var nbsp$1 = "??";
var nbump = "?????";
var nbumpe = "?????";
var ncap = "???";
var Ncaron = "??";
var ncaron = "??";
var Ncedil = "??";
var ncedil = "??";
var ncong = "???";
var ncongdot = "?????";
var ncup = "???";
var Ncy = "??";
var ncy = "??";
var ndash = "???";
var nearhk = "???";
var nearr = "???";
var neArr = "???";
var nearrow = "???";
var ne = "???";
var nedot = "?????";
var NegativeMediumSpace = "???";
var NegativeThickSpace = "???";
var NegativeThinSpace = "???";
var NegativeVeryThinSpace = "???";
var nequiv = "???";
var nesear = "???";
var nesim = "?????";
var NestedGreaterGreater = "???";
var NestedLessLess = "???";
var NewLine = "\n";
var nexist = "???";
var nexists = "???";
var Nfr = "????";
var nfr = "????";
var ngE = "?????";
var nge = "???";
var ngeq = "???";
var ngeqq = "?????";
var ngeqslant = "?????";
var nges = "?????";
var nGg = "?????";
var ngsim = "???";
var nGt = "??????";
var ngt = "???";
var ngtr = "???";
var nGtv = "?????";
var nharr = "???";
var nhArr = "???";
var nhpar = "???";
var ni = "???";
var nis = "???";
var nisd = "???";
var niv = "???";
var NJcy = "??";
var njcy = "??";
var nlarr = "???";
var nlArr = "???";
var nldr = "???";
var nlE = "?????";
var nle = "???";
var nleftarrow = "???";
var nLeftarrow = "???";
var nleftrightarrow = "???";
var nLeftrightarrow = "???";
var nleq = "???";
var nleqq = "?????";
var nleqslant = "?????";
var nles = "?????";
var nless = "???";
var nLl = "?????";
var nlsim = "???";
var nLt = "??????";
var nlt = "???";
var nltri = "???";
var nltrie = "???";
var nLtv = "?????";
var nmid = "???";
var NoBreak = "???";
var NonBreakingSpace = "??";
var nopf = "????";
var Nopf = "???";
var Not = "???";
var not$1 = "??";
var NotCongruent = "???";
var NotCupCap = "???";
var NotDoubleVerticalBar = "???";
var NotElement = "???";
var NotEqual = "???";
var NotEqualTilde = "?????";
var NotExists = "???";
var NotGreater = "???";
var NotGreaterEqual = "???";
var NotGreaterFullEqual = "?????";
var NotGreaterGreater = "?????";
var NotGreaterLess = "???";
var NotGreaterSlantEqual = "?????";
var NotGreaterTilde = "???";
var NotHumpDownHump = "?????";
var NotHumpEqual = "?????";
var notin = "???";
var notindot = "?????";
var notinE = "?????";
var notinva = "???";
var notinvb = "???";
var notinvc = "???";
var NotLeftTriangleBar = "?????";
var NotLeftTriangle = "???";
var NotLeftTriangleEqual = "???";
var NotLess = "???";
var NotLessEqual = "???";
var NotLessGreater = "???";
var NotLessLess = "?????";
var NotLessSlantEqual = "?????";
var NotLessTilde = "???";
var NotNestedGreaterGreater = "?????";
var NotNestedLessLess = "?????";
var notni = "???";
var notniva = "???";
var notnivb = "???";
var notnivc = "???";
var NotPrecedes = "???";
var NotPrecedesEqual = "?????";
var NotPrecedesSlantEqual = "???";
var NotReverseElement = "???";
var NotRightTriangleBar = "?????";
var NotRightTriangle = "???";
var NotRightTriangleEqual = "???";
var NotSquareSubset = "?????";
var NotSquareSubsetEqual = "???";
var NotSquareSuperset = "?????";
var NotSquareSupersetEqual = "???";
var NotSubset = "??????";
var NotSubsetEqual = "???";
var NotSucceeds = "???";
var NotSucceedsEqual = "?????";
var NotSucceedsSlantEqual = "???";
var NotSucceedsTilde = "?????";
var NotSuperset = "??????";
var NotSupersetEqual = "???";
var NotTilde = "???";
var NotTildeEqual = "???";
var NotTildeFullEqual = "???";
var NotTildeTilde = "???";
var NotVerticalBar = "???";
var nparallel = "???";
var npar = "???";
var nparsl = "??????";
var npart = "?????";
var npolint = "???";
var npr = "???";
var nprcue = "???";
var nprec = "???";
var npreceq = "?????";
var npre = "?????";
var nrarrc = "?????";
var nrarr = "???";
var nrArr = "???";
var nrarrw = "?????";
var nrightarrow = "???";
var nRightarrow = "???";
var nrtri = "???";
var nrtrie = "???";
var nsc = "???";
var nsccue = "???";
var nsce = "?????";
var Nscr = "????";
var nscr = "????";
var nshortmid = "???";
var nshortparallel = "???";
var nsim = "???";
var nsime = "???";
var nsimeq = "???";
var nsmid = "???";
var nspar = "???";
var nsqsube = "???";
var nsqsupe = "???";
var nsub = "???";
var nsubE = "?????";
var nsube = "???";
var nsubset = "??????";
var nsubseteq = "???";
var nsubseteqq = "?????";
var nsucc = "???";
var nsucceq = "?????";
var nsup = "???";
var nsupE = "?????";
var nsupe = "???";
var nsupset = "??????";
var nsupseteq = "???";
var nsupseteqq = "?????";
var ntgl = "???";
var Ntilde$1 = "??";
var ntilde$1 = "??";
var ntlg = "???";
var ntriangleleft = "???";
var ntrianglelefteq = "???";
var ntriangleright = "???";
var ntrianglerighteq = "???";
var Nu = "??";
var nu = "??";
var num = "#";
var numero = "???";
var numsp = "???";
var nvap = "??????";
var nvdash = "???";
var nvDash = "???";
var nVdash = "???";
var nVDash = "???";
var nvge = "??????";
var nvgt = ">???";
var nvHarr = "???";
var nvinfin = "???";
var nvlArr = "???";
var nvle = "??????";
var nvlt = "<???";
var nvltrie = "??????";
var nvrArr = "???";
var nvrtrie = "??????";
var nvsim = "??????";
var nwarhk = "???";
var nwarr = "???";
var nwArr = "???";
var nwarrow = "???";
var nwnear = "???";
var Oacute$1 = "??";
var oacute$1 = "??";
var oast = "???";
var Ocirc$1 = "??";
var ocirc$1 = "??";
var ocir = "???";
var Ocy = "??";
var ocy = "??";
var odash = "???";
var Odblac = "??";
var odblac = "??";
var odiv = "???";
var odot = "???";
var odsold = "???";
var OElig = "??";
var oelig = "??";
var ofcir = "???";
var Ofr = "????";
var ofr = "????";
var ogon = "??";
var Ograve$1 = "??";
var ograve$1 = "??";
var ogt = "???";
var ohbar = "???";
var ohm = "??";
var oint = "???";
var olarr = "???";
var olcir = "???";
var olcross = "???";
var oline = "???";
var olt = "???";
var Omacr = "??";
var omacr = "??";
var Omega = "??";
var omega = "??";
var Omicron = "??";
var omicron = "??";
var omid = "???";
var ominus = "???";
var Oopf = "????";
var oopf = "????";
var opar = "???";
var OpenCurlyDoubleQuote = "???";
var OpenCurlyQuote = "???";
var operp = "???";
var oplus = "???";
var orarr = "???";
var Or = "???";
var or = "???";
var ord = "???";
var order = "???";
var orderof = "???";
var ordf$1 = "??";
var ordm$1 = "??";
var origof = "???";
var oror = "???";
var orslope = "???";
var orv = "???";
var oS = "???";
var Oscr = "????";
var oscr = "???";
var Oslash$1 = "??";
var oslash$1 = "??";
var osol = "???";
var Otilde$1 = "??";
var otilde$1 = "??";
var otimesas = "???";
var Otimes = "???";
var otimes = "???";
var Ouml$1 = "??";
var ouml$1 = "??";
var ovbar = "???";
var OverBar = "???";
var OverBrace = "???";
var OverBracket = "???";
var OverParenthesis = "???";
var para$1 = "??";
var parallel = "???";
var par = "???";
var parsim = "???";
var parsl = "???";
var part = "???";
var PartialD = "???";
var Pcy = "??";
var pcy = "??";
var percnt = "%";
var period = ".";
var permil = "???";
var perp = "???";
var pertenk = "???";
var Pfr = "????";
var pfr = "????";
var Phi = "??";
var phi = "??";
var phiv = "??";
var phmmat = "???";
var phone = "???";
var Pi = "??";
var pi = "??";
var pitchfork = "???";
var piv = "??";
var planck = "???";
var planckh = "???";
var plankv = "???";
var plusacir = "???";
var plusb = "???";
var pluscir = "???";
var plus = "+";
var plusdo = "???";
var plusdu = "???";
var pluse = "???";
var PlusMinus = "??";
var plusmn$1 = "??";
var plussim = "???";
var plustwo = "???";
var pm = "??";
var Poincareplane = "???";
var pointint = "???";
var popf = "????";
var Popf = "???";
var pound$1 = "??";
var prap = "???";
var Pr = "???";
var pr = "???";
var prcue = "???";
var precapprox = "???";
var prec = "???";
var preccurlyeq = "???";
var Precedes = "???";
var PrecedesEqual = "???";
var PrecedesSlantEqual = "???";
var PrecedesTilde = "???";
var preceq = "???";
var precnapprox = "???";
var precneqq = "???";
var precnsim = "???";
var pre = "???";
var prE = "???";
var precsim = "???";
var prime = "???";
var Prime = "???";
var primes = "???";
var prnap = "???";
var prnE = "???";
var prnsim = "???";
var prod = "???";
var Product = "???";
var profalar = "???";
var profline = "???";
var profsurf = "???";
var prop = "???";
var Proportional = "???";
var Proportion = "???";
var propto = "???";
var prsim = "???";
var prurel = "???";
var Pscr = "????";
var pscr = "????";
var Psi = "??";
var psi = "??";
var puncsp = "???";
var Qfr = "????";
var qfr = "????";
var qint = "???";
var qopf = "????";
var Qopf = "???";
var qprime = "???";
var Qscr = "????";
var qscr = "????";
var quaternions = "???";
var quatint = "???";
var quest = "?";
var questeq = "???";
var quot$2 = "\"";
var QUOT$1 = "\"";
var rAarr = "???";
var race = "?????";
var Racute = "??";
var racute = "??";
var radic = "???";
var raemptyv = "???";
var rang = "???";
var Rang = "???";
var rangd = "???";
var range = "???";
var rangle = "???";
var raquo$1 = "??";
var rarrap = "???";
var rarrb = "???";
var rarrbfs = "???";
var rarrc = "???";
var rarr = "???";
var Rarr = "???";
var rArr = "???";
var rarrfs = "???";
var rarrhk = "???";
var rarrlp = "???";
var rarrpl = "???";
var rarrsim = "???";
var Rarrtl = "???";
var rarrtl = "???";
var rarrw = "???";
var ratail = "???";
var rAtail = "???";
var ratio = "???";
var rationals = "???";
var rbarr = "???";
var rBarr = "???";
var RBarr = "???";
var rbbrk = "???";
var rbrace = "}";
var rbrack = "]";
var rbrke = "???";
var rbrksld = "???";
var rbrkslu = "???";
var Rcaron = "??";
var rcaron = "??";
var Rcedil = "??";
var rcedil = "??";
var rceil = "???";
var rcub = "}";
var Rcy = "??";
var rcy = "??";
var rdca = "???";
var rdldhar = "???";
var rdquo = "???";
var rdquor = "???";
var rdsh = "???";
var real = "???";
var realine = "???";
var realpart = "???";
var reals = "???";
var Re = "???";
var rect = "???";
var reg$1 = "??";
var REG$1 = "??";
var ReverseElement = "???";
var ReverseEquilibrium = "???";
var ReverseUpEquilibrium = "???";
var rfisht = "???";
var rfloor = "???";
var rfr = "????";
var Rfr = "???";
var rHar = "???";
var rhard = "???";
var rharu = "???";
var rharul = "???";
var Rho = "??";
var rho = "??";
var rhov = "??";
var RightAngleBracket = "???";
var RightArrowBar = "???";
var rightarrow = "???";
var RightArrow = "???";
var Rightarrow = "???";
var RightArrowLeftArrow = "???";
var rightarrowtail = "???";
var RightCeiling = "???";
var RightDoubleBracket = "???";
var RightDownTeeVector = "???";
var RightDownVectorBar = "???";
var RightDownVector = "???";
var RightFloor = "???";
var rightharpoondown = "???";
var rightharpoonup = "???";
var rightleftarrows = "???";
var rightleftharpoons = "???";
var rightrightarrows = "???";
var rightsquigarrow = "???";
var RightTeeArrow = "???";
var RightTee = "???";
var RightTeeVector = "???";
var rightthreetimes = "???";
var RightTriangleBar = "???";
var RightTriangle = "???";
var RightTriangleEqual = "???";
var RightUpDownVector = "???";
var RightUpTeeVector = "???";
var RightUpVectorBar = "???";
var RightUpVector = "???";
var RightVectorBar = "???";
var RightVector = "???";
var ring = "??";
var risingdotseq = "???";
var rlarr = "???";
var rlhar = "???";
var rlm = "???";
var rmoustache = "???";
var rmoust = "???";
var rnmid = "???";
var roang = "???";
var roarr = "???";
var robrk = "???";
var ropar = "???";
var ropf = "????";
var Ropf = "???";
var roplus = "???";
var rotimes = "???";
var RoundImplies = "???";
var rpar = ")";
var rpargt = "???";
var rppolint = "???";
var rrarr = "???";
var Rrightarrow = "???";
var rsaquo = "???";
var rscr = "????";
var Rscr = "???";
var rsh = "???";
var Rsh = "???";
var rsqb = "]";
var rsquo = "???";
var rsquor = "???";
var rthree = "???";
var rtimes = "???";
var rtri = "???";
var rtrie = "???";
var rtrif = "???";
var rtriltri = "???";
var RuleDelayed = "???";
var ruluhar = "???";
var rx = "???";
var Sacute = "??";
var sacute = "??";
var sbquo = "???";
var scap = "???";
var Scaron = "??";
var scaron = "??";
var Sc = "???";
var sc = "???";
var sccue = "???";
var sce = "???";
var scE = "???";
var Scedil = "??";
var scedil = "??";
var Scirc = "??";
var scirc = "??";
var scnap = "???";
var scnE = "???";
var scnsim = "???";
var scpolint = "???";
var scsim = "???";
var Scy = "??";
var scy = "??";
var sdotb = "???";
var sdot = "???";
var sdote = "???";
var searhk = "???";
var searr = "???";
var seArr = "???";
var searrow = "???";
var sect$1 = "??";
var semi = ";";
var seswar = "???";
var setminus = "???";
var setmn = "???";
var sext = "???";
var Sfr = "????";
var sfr = "????";
var sfrown = "???";
var sharp = "???";
var SHCHcy = "??";
var shchcy = "??";
var SHcy = "??";
var shcy = "??";
var ShortDownArrow = "???";
var ShortLeftArrow = "???";
var shortmid = "???";
var shortparallel = "???";
var ShortRightArrow = "???";
var ShortUpArrow = "???";
var shy$1 = "??";
var Sigma = "??";
var sigma = "??";
var sigmaf = "??";
var sigmav = "??";
var sim = "???";
var simdot = "???";
var sime = "???";
var simeq = "???";
var simg = "???";
var simgE = "???";
var siml = "???";
var simlE = "???";
var simne = "???";
var simplus = "???";
var simrarr = "???";
var slarr = "???";
var SmallCircle = "???";
var smallsetminus = "???";
var smashp = "???";
var smeparsl = "???";
var smid = "???";
var smile = "???";
var smt = "???";
var smte = "???";
var smtes = "??????";
var SOFTcy = "??";
var softcy = "??";
var solbar = "???";
var solb = "???";
var sol = "/";
var Sopf = "????";
var sopf = "????";
var spades = "???";
var spadesuit = "???";
var spar = "???";
var sqcap = "???";
var sqcaps = "??????";
var sqcup = "???";
var sqcups = "??????";
var Sqrt = "???";
var sqsub = "???";
var sqsube = "???";
var sqsubset = "???";
var sqsubseteq = "???";
var sqsup = "???";
var sqsupe = "???";
var sqsupset = "???";
var sqsupseteq = "???";
var square = "???";
var Square = "???";
var SquareIntersection = "???";
var SquareSubset = "???";
var SquareSubsetEqual = "???";
var SquareSuperset = "???";
var SquareSupersetEqual = "???";
var SquareUnion = "???";
var squarf = "???";
var squ = "???";
var squf = "???";
var srarr = "???";
var Sscr = "????";
var sscr = "????";
var ssetmn = "???";
var ssmile = "???";
var sstarf = "???";
var Star = "???";
var star = "???";
var starf = "???";
var straightepsilon = "??";
var straightphi = "??";
var strns = "??";
var sub = "???";
var Sub = "???";
var subdot = "???";
var subE = "???";
var sube = "???";
var subedot = "???";
var submult = "???";
var subnE = "???";
var subne = "???";
var subplus = "???";
var subrarr = "???";
var subset = "???";
var Subset = "???";
var subseteq = "???";
var subseteqq = "???";
var SubsetEqual = "???";
var subsetneq = "???";
var subsetneqq = "???";
var subsim = "???";
var subsub = "???";
var subsup = "???";
var succapprox = "???";
var succ = "???";
var succcurlyeq = "???";
var Succeeds = "???";
var SucceedsEqual = "???";
var SucceedsSlantEqual = "???";
var SucceedsTilde = "???";
var succeq = "???";
var succnapprox = "???";
var succneqq = "???";
var succnsim = "???";
var succsim = "???";
var SuchThat = "???";
var sum = "???";
var Sum = "???";
var sung = "???";
var sup1$1 = "??";
var sup2$1 = "??";
var sup3$1 = "??";
var sup = "???";
var Sup = "???";
var supdot = "???";
var supdsub = "???";
var supE = "???";
var supe = "???";
var supedot = "???";
var Superset = "???";
var SupersetEqual = "???";
var suphsol = "???";
var suphsub = "???";
var suplarr = "???";
var supmult = "???";
var supnE = "???";
var supne = "???";
var supplus = "???";
var supset = "???";
var Supset = "???";
var supseteq = "???";
var supseteqq = "???";
var supsetneq = "???";
var supsetneqq = "???";
var supsim = "???";
var supsub = "???";
var supsup = "???";
var swarhk = "???";
var swarr = "???";
var swArr = "???";
var swarrow = "???";
var swnwar = "???";
var szlig$1 = "??";
var Tab = "\t";
var target = "???";
var Tau = "??";
var tau = "??";
var tbrk = "???";
var Tcaron = "??";
var tcaron = "??";
var Tcedil = "??";
var tcedil = "??";
var Tcy = "??";
var tcy = "??";
var tdot = "???";
var telrec = "???";
var Tfr = "????";
var tfr = "????";
var there4 = "???";
var therefore = "???";
var Therefore = "???";
var Theta = "??";
var theta = "??";
var thetasym = "??";
var thetav = "??";
var thickapprox = "???";
var thicksim = "???";
var ThickSpace = "??????";
var ThinSpace = "???";
var thinsp = "???";
var thkap = "???";
var thksim = "???";
var THORN$1 = "??";
var thorn$1 = "??";
var tilde = "??";
var Tilde = "???";
var TildeEqual = "???";
var TildeFullEqual = "???";
var TildeTilde = "???";
var timesbar = "???";
var timesb = "???";
var times$1 = "??";
var timesd = "???";
var tint = "???";
var toea = "???";
var topbot = "???";
var topcir = "???";
var top = "???";
var Topf = "????";
var topf = "????";
var topfork = "???";
var tosa = "???";
var tprime = "???";
var trade = "???";
var TRADE = "???";
var triangle = "???";
var triangledown = "???";
var triangleleft = "???";
var trianglelefteq = "???";
var triangleq = "???";
var triangleright = "???";
var trianglerighteq = "???";
var tridot = "???";
var trie = "???";
var triminus = "???";
var TripleDot = "???";
var triplus = "???";
var trisb = "???";
var tritime = "???";
var trpezium = "???";
var Tscr = "????";
var tscr = "????";
var TScy = "??";
var tscy = "??";
var TSHcy = "??";
var tshcy = "??";
var Tstrok = "??";
var tstrok = "??";
var twixt = "???";
var twoheadleftarrow = "???";
var twoheadrightarrow = "???";
var Uacute$1 = "??";
var uacute$1 = "??";
var uarr = "???";
var Uarr = "???";
var uArr = "???";
var Uarrocir = "???";
var Ubrcy = "??";
var ubrcy = "??";
var Ubreve = "??";
var ubreve = "??";
var Ucirc$1 = "??";
var ucirc$1 = "??";
var Ucy = "??";
var ucy = "??";
var udarr = "???";
var Udblac = "??";
var udblac = "??";
var udhar = "???";
var ufisht = "???";
var Ufr = "????";
var ufr = "????";
var Ugrave$1 = "??";
var ugrave$1 = "??";
var uHar = "???";
var uharl = "???";
var uharr = "???";
var uhblk = "???";
var ulcorn = "???";
var ulcorner = "???";
var ulcrop = "???";
var ultri = "???";
var Umacr = "??";
var umacr = "??";
var uml$1 = "??";
var UnderBar = "_";
var UnderBrace = "???";
var UnderBracket = "???";
var UnderParenthesis = "???";
var Union = "???";
var UnionPlus = "???";
var Uogon = "??";
var uogon = "??";
var Uopf = "????";
var uopf = "????";
var UpArrowBar = "???";
var uparrow = "???";
var UpArrow = "???";
var Uparrow = "???";
var UpArrowDownArrow = "???";
var updownarrow = "???";
var UpDownArrow = "???";
var Updownarrow = "???";
var UpEquilibrium = "???";
var upharpoonleft = "???";
var upharpoonright = "???";
var uplus = "???";
var UpperLeftArrow = "???";
var UpperRightArrow = "???";
var upsi = "??";
var Upsi = "??";
var upsih = "??";
var Upsilon = "??";
var upsilon = "??";
var UpTeeArrow = "???";
var UpTee = "???";
var upuparrows = "???";
var urcorn = "???";
var urcorner = "???";
var urcrop = "???";
var Uring = "??";
var uring = "??";
var urtri = "???";
var Uscr = "????";
var uscr = "????";
var utdot = "???";
var Utilde = "??";
var utilde = "??";
var utri = "???";
var utrif = "???";
var uuarr = "???";
var Uuml$1 = "??";
var uuml$1 = "??";
var uwangle = "???";
var vangrt = "???";
var varepsilon = "??";
var varkappa = "??";
var varnothing = "???";
var varphi = "??";
var varpi = "??";
var varpropto = "???";
var varr = "???";
var vArr = "???";
var varrho = "??";
var varsigma = "??";
var varsubsetneq = "??????";
var varsubsetneqq = "??????";
var varsupsetneq = "??????";
var varsupsetneqq = "??????";
var vartheta = "??";
var vartriangleleft = "???";
var vartriangleright = "???";
var vBar = "???";
var Vbar = "???";
var vBarv = "???";
var Vcy = "??";
var vcy = "??";
var vdash = "???";
var vDash = "???";
var Vdash = "???";
var VDash = "???";
var Vdashl = "???";
var veebar = "???";
var vee = "???";
var Vee = "???";
var veeeq = "???";
var vellip = "???";
var verbar = "|";
var Verbar = "???";
var vert = "|";
var Vert = "???";
var VerticalBar = "???";
var VerticalLine = "|";
var VerticalSeparator = "???";
var VerticalTilde = "???";
var VeryThinSpace = "???";
var Vfr = "????";
var vfr = "????";
var vltri = "???";
var vnsub = "??????";
var vnsup = "??????";
var Vopf = "????";
var vopf = "????";
var vprop = "???";
var vrtri = "???";
var Vscr = "????";
var vscr = "????";
var vsubnE = "??????";
var vsubne = "??????";
var vsupnE = "??????";
var vsupne = "??????";
var Vvdash = "???";
var vzigzag = "???";
var Wcirc = "??";
var wcirc = "??";
var wedbar = "???";
var wedge = "???";
var Wedge = "???";
var wedgeq = "???";
var weierp = "???";
var Wfr = "????";
var wfr = "????";
var Wopf = "????";
var wopf = "????";
var wp = "???";
var wr = "???";
var wreath = "???";
var Wscr = "????";
var wscr = "????";
var xcap = "???";
var xcirc = "???";
var xcup = "???";
var xdtri = "???";
var Xfr = "????";
var xfr = "????";
var xharr = "???";
var xhArr = "???";
var Xi = "??";
var xi = "??";
var xlarr = "???";
var xlArr = "???";
var xmap = "???";
var xnis = "???";
var xodot = "???";
var Xopf = "????";
var xopf = "????";
var xoplus = "???";
var xotime = "???";
var xrarr = "???";
var xrArr = "???";
var Xscr = "????";
var xscr = "????";
var xsqcup = "???";
var xuplus = "???";
var xutri = "???";
var xvee = "???";
var xwedge = "???";
var Yacute$1 = "??";
var yacute$1 = "??";
var YAcy = "??";
var yacy = "??";
var Ycirc = "??";
var ycirc = "??";
var Ycy = "??";
var ycy = "??";
var yen$1 = "??";
var Yfr = "????";
var yfr = "????";
var YIcy = "??";
var yicy = "??";
var Yopf = "????";
var yopf = "????";
var Yscr = "????";
var yscr = "????";
var YUcy = "??";
var yucy = "??";
var yuml$1 = "??";
var Yuml = "??";
var Zacute = "??";
var zacute = "??";
var Zcaron = "??";
var zcaron = "??";
var Zcy = "??";
var zcy = "??";
var Zdot = "??";
var zdot = "??";
var zeetrf = "???";
var ZeroWidthSpace = "???";
var Zeta = "??";
var zeta = "??";
var zfr = "????";
var Zfr = "???";
var ZHcy = "??";
var zhcy = "??";
var zigrarr = "???";
var zopf = "????";
var Zopf = "???";
var Zscr = "????";
var zscr = "????";
var zwj = "???";
var zwnj = "???";
var require$$1$1 = {
	Aacute: Aacute$1,
	aacute: aacute$1,
	Abreve: Abreve,
	abreve: abreve,
	ac: ac,
	acd: acd,
	acE: acE,
	Acirc: Acirc$1,
	acirc: acirc$1,
	acute: acute$1,
	Acy: Acy,
	acy: acy,
	AElig: AElig$1,
	aelig: aelig$1,
	af: af,
	Afr: Afr,
	afr: afr,
	Agrave: Agrave$1,
	agrave: agrave$1,
	alefsym: alefsym,
	aleph: aleph,
	Alpha: Alpha,
	alpha: alpha,
	Amacr: Amacr,
	amacr: amacr,
	amalg: amalg,
	amp: amp$2,
	AMP: AMP$1,
	andand: andand,
	And: And,
	and: and,
	andd: andd,
	andslope: andslope,
	andv: andv,
	ang: ang,
	ange: ange,
	angle: angle,
	angmsdaa: angmsdaa,
	angmsdab: angmsdab,
	angmsdac: angmsdac,
	angmsdad: angmsdad,
	angmsdae: angmsdae,
	angmsdaf: angmsdaf,
	angmsdag: angmsdag,
	angmsdah: angmsdah,
	angmsd: angmsd,
	angrt: angrt,
	angrtvb: angrtvb,
	angrtvbd: angrtvbd,
	angsph: angsph,
	angst: angst,
	angzarr: angzarr,
	Aogon: Aogon,
	aogon: aogon,
	Aopf: Aopf,
	aopf: aopf,
	apacir: apacir,
	ap: ap,
	apE: apE,
	ape: ape,
	apid: apid,
	apos: apos$1,
	ApplyFunction: ApplyFunction,
	approx: approx,
	approxeq: approxeq,
	Aring: Aring$1,
	aring: aring$1,
	Ascr: Ascr,
	ascr: ascr,
	Assign: Assign,
	ast: ast,
	asymp: asymp,
	asympeq: asympeq,
	Atilde: Atilde$1,
	atilde: atilde$1,
	Auml: Auml$1,
	auml: auml$1,
	awconint: awconint,
	awint: awint,
	backcong: backcong,
	backepsilon: backepsilon,
	backprime: backprime,
	backsim: backsim,
	backsimeq: backsimeq,
	Backslash: Backslash,
	Barv: Barv,
	barvee: barvee,
	barwed: barwed,
	Barwed: Barwed,
	barwedge: barwedge,
	bbrk: bbrk,
	bbrktbrk: bbrktbrk,
	bcong: bcong,
	Bcy: Bcy,
	bcy: bcy,
	bdquo: bdquo,
	becaus: becaus,
	because: because,
	Because: Because,
	bemptyv: bemptyv,
	bepsi: bepsi,
	bernou: bernou,
	Bernoullis: Bernoullis,
	Beta: Beta,
	beta: beta,
	beth: beth,
	between: between,
	Bfr: Bfr,
	bfr: bfr,
	bigcap: bigcap,
	bigcirc: bigcirc,
	bigcup: bigcup,
	bigodot: bigodot,
	bigoplus: bigoplus,
	bigotimes: bigotimes,
	bigsqcup: bigsqcup,
	bigstar: bigstar,
	bigtriangledown: bigtriangledown,
	bigtriangleup: bigtriangleup,
	biguplus: biguplus,
	bigvee: bigvee,
	bigwedge: bigwedge,
	bkarow: bkarow,
	blacklozenge: blacklozenge,
	blacksquare: blacksquare,
	blacktriangle: blacktriangle,
	blacktriangledown: blacktriangledown,
	blacktriangleleft: blacktriangleleft,
	blacktriangleright: blacktriangleright,
	blank: blank,
	blk12: blk12,
	blk14: blk14,
	blk34: blk34,
	block: block,
	bne: bne,
	bnequiv: bnequiv,
	bNot: bNot,
	bnot: bnot,
	Bopf: Bopf,
	bopf: bopf,
	bot: bot,
	bottom: bottom,
	bowtie: bowtie,
	boxbox: boxbox,
	boxdl: boxdl,
	boxdL: boxdL,
	boxDl: boxDl,
	boxDL: boxDL,
	boxdr: boxdr,
	boxdR: boxdR,
	boxDr: boxDr,
	boxDR: boxDR,
	boxh: boxh,
	boxH: boxH,
	boxhd: boxhd,
	boxHd: boxHd,
	boxhD: boxhD,
	boxHD: boxHD,
	boxhu: boxhu,
	boxHu: boxHu,
	boxhU: boxhU,
	boxHU: boxHU,
	boxminus: boxminus,
	boxplus: boxplus,
	boxtimes: boxtimes,
	boxul: boxul,
	boxuL: boxuL,
	boxUl: boxUl,
	boxUL: boxUL,
	boxur: boxur,
	boxuR: boxuR,
	boxUr: boxUr,
	boxUR: boxUR,
	boxv: boxv,
	boxV: boxV,
	boxvh: boxvh,
	boxvH: boxvH,
	boxVh: boxVh,
	boxVH: boxVH,
	boxvl: boxvl,
	boxvL: boxvL,
	boxVl: boxVl,
	boxVL: boxVL,
	boxvr: boxvr,
	boxvR: boxvR,
	boxVr: boxVr,
	boxVR: boxVR,
	bprime: bprime,
	breve: breve,
	Breve: Breve,
	brvbar: brvbar$1,
	bscr: bscr,
	Bscr: Bscr,
	bsemi: bsemi,
	bsim: bsim,
	bsime: bsime,
	bsolb: bsolb,
	bsol: bsol,
	bsolhsub: bsolhsub,
	bull: bull,
	bullet: bullet,
	bump: bump,
	bumpE: bumpE,
	bumpe: bumpe,
	Bumpeq: Bumpeq,
	bumpeq: bumpeq,
	Cacute: Cacute,
	cacute: cacute,
	capand: capand,
	capbrcup: capbrcup,
	capcap: capcap,
	cap: cap,
	Cap: Cap,
	capcup: capcup,
	capdot: capdot,
	CapitalDifferentialD: CapitalDifferentialD,
	caps: caps,
	caret: caret,
	caron: caron,
	Cayleys: Cayleys,
	ccaps: ccaps,
	Ccaron: Ccaron,
	ccaron: ccaron,
	Ccedil: Ccedil$1,
	ccedil: ccedil$1,
	Ccirc: Ccirc,
	ccirc: ccirc,
	Cconint: Cconint,
	ccups: ccups,
	ccupssm: ccupssm,
	Cdot: Cdot,
	cdot: cdot,
	cedil: cedil$1,
	Cedilla: Cedilla,
	cemptyv: cemptyv,
	cent: cent$1,
	centerdot: centerdot,
	CenterDot: CenterDot,
	cfr: cfr,
	Cfr: Cfr,
	CHcy: CHcy,
	chcy: chcy,
	check: check,
	checkmark: checkmark,
	Chi: Chi,
	chi: chi,
	circ: circ,
	circeq: circeq,
	circlearrowleft: circlearrowleft,
	circlearrowright: circlearrowright,
	circledast: circledast,
	circledcirc: circledcirc,
	circleddash: circleddash,
	CircleDot: CircleDot,
	circledR: circledR,
	circledS: circledS,
	CircleMinus: CircleMinus,
	CirclePlus: CirclePlus,
	CircleTimes: CircleTimes,
	cir: cir,
	cirE: cirE,
	cire: cire,
	cirfnint: cirfnint,
	cirmid: cirmid,
	cirscir: cirscir,
	ClockwiseContourIntegral: ClockwiseContourIntegral,
	CloseCurlyDoubleQuote: CloseCurlyDoubleQuote,
	CloseCurlyQuote: CloseCurlyQuote,
	clubs: clubs,
	clubsuit: clubsuit,
	colon: colon,
	Colon: Colon,
	Colone: Colone,
	colone: colone,
	coloneq: coloneq,
	comma: comma,
	commat: commat,
	comp: comp,
	compfn: compfn,
	complement: complement,
	complexes: complexes,
	cong: cong,
	congdot: congdot,
	Congruent: Congruent,
	conint: conint,
	Conint: Conint,
	ContourIntegral: ContourIntegral,
	copf: copf,
	Copf: Copf,
	coprod: coprod,
	Coproduct: Coproduct,
	copy: copy$1,
	COPY: COPY$1,
	copysr: copysr,
	CounterClockwiseContourIntegral: CounterClockwiseContourIntegral,
	crarr: crarr,
	cross: cross,
	Cross: Cross,
	Cscr: Cscr,
	cscr: cscr,
	csub: csub,
	csube: csube,
	csup: csup,
	csupe: csupe,
	ctdot: ctdot,
	cudarrl: cudarrl,
	cudarrr: cudarrr,
	cuepr: cuepr,
	cuesc: cuesc,
	cularr: cularr,
	cularrp: cularrp,
	cupbrcap: cupbrcap,
	cupcap: cupcap,
	CupCap: CupCap,
	cup: cup,
	Cup: Cup,
	cupcup: cupcup,
	cupdot: cupdot,
	cupor: cupor,
	cups: cups,
	curarr: curarr,
	curarrm: curarrm,
	curlyeqprec: curlyeqprec,
	curlyeqsucc: curlyeqsucc,
	curlyvee: curlyvee,
	curlywedge: curlywedge,
	curren: curren$1,
	curvearrowleft: curvearrowleft,
	curvearrowright: curvearrowright,
	cuvee: cuvee,
	cuwed: cuwed,
	cwconint: cwconint,
	cwint: cwint,
	cylcty: cylcty,
	dagger: dagger,
	Dagger: Dagger,
	daleth: daleth,
	darr: darr,
	Darr: Darr,
	dArr: dArr,
	dash: dash,
	Dashv: Dashv,
	dashv: dashv,
	dbkarow: dbkarow,
	dblac: dblac,
	Dcaron: Dcaron,
	dcaron: dcaron,
	Dcy: Dcy,
	dcy: dcy,
	ddagger: ddagger,
	ddarr: ddarr,
	DD: DD,
	dd: dd,
	DDotrahd: DDotrahd,
	ddotseq: ddotseq,
	deg: deg$1,
	Del: Del,
	Delta: Delta,
	delta: delta,
	demptyv: demptyv,
	dfisht: dfisht,
	Dfr: Dfr,
	dfr: dfr,
	dHar: dHar,
	dharl: dharl,
	dharr: dharr,
	DiacriticalAcute: DiacriticalAcute,
	DiacriticalDot: DiacriticalDot,
	DiacriticalDoubleAcute: DiacriticalDoubleAcute,
	DiacriticalGrave: DiacriticalGrave,
	DiacriticalTilde: DiacriticalTilde,
	diam: diam,
	diamond: diamond,
	Diamond: Diamond,
	diamondsuit: diamondsuit,
	diams: diams,
	die: die,
	DifferentialD: DifferentialD,
	digamma: digamma,
	disin: disin,
	div: div,
	divide: divide$1,
	divideontimes: divideontimes,
	divonx: divonx,
	DJcy: DJcy,
	djcy: djcy,
	dlcorn: dlcorn,
	dlcrop: dlcrop,
	dollar: dollar,
	Dopf: Dopf,
	dopf: dopf,
	Dot: Dot,
	dot: dot,
	DotDot: DotDot,
	doteq: doteq,
	doteqdot: doteqdot,
	DotEqual: DotEqual,
	dotminus: dotminus,
	dotplus: dotplus,
	dotsquare: dotsquare,
	doublebarwedge: doublebarwedge,
	DoubleContourIntegral: DoubleContourIntegral,
	DoubleDot: DoubleDot,
	DoubleDownArrow: DoubleDownArrow,
	DoubleLeftArrow: DoubleLeftArrow,
	DoubleLeftRightArrow: DoubleLeftRightArrow,
	DoubleLeftTee: DoubleLeftTee,
	DoubleLongLeftArrow: DoubleLongLeftArrow,
	DoubleLongLeftRightArrow: DoubleLongLeftRightArrow,
	DoubleLongRightArrow: DoubleLongRightArrow,
	DoubleRightArrow: DoubleRightArrow,
	DoubleRightTee: DoubleRightTee,
	DoubleUpArrow: DoubleUpArrow,
	DoubleUpDownArrow: DoubleUpDownArrow,
	DoubleVerticalBar: DoubleVerticalBar,
	DownArrowBar: DownArrowBar,
	downarrow: downarrow,
	DownArrow: DownArrow,
	Downarrow: Downarrow,
	DownArrowUpArrow: DownArrowUpArrow,
	DownBreve: DownBreve,
	downdownarrows: downdownarrows,
	downharpoonleft: downharpoonleft,
	downharpoonright: downharpoonright,
	DownLeftRightVector: DownLeftRightVector,
	DownLeftTeeVector: DownLeftTeeVector,
	DownLeftVectorBar: DownLeftVectorBar,
	DownLeftVector: DownLeftVector,
	DownRightTeeVector: DownRightTeeVector,
	DownRightVectorBar: DownRightVectorBar,
	DownRightVector: DownRightVector,
	DownTeeArrow: DownTeeArrow,
	DownTee: DownTee,
	drbkarow: drbkarow,
	drcorn: drcorn,
	drcrop: drcrop,
	Dscr: Dscr,
	dscr: dscr,
	DScy: DScy,
	dscy: dscy,
	dsol: dsol,
	Dstrok: Dstrok,
	dstrok: dstrok,
	dtdot: dtdot,
	dtri: dtri,
	dtrif: dtrif,
	duarr: duarr,
	duhar: duhar,
	dwangle: dwangle,
	DZcy: DZcy,
	dzcy: dzcy,
	dzigrarr: dzigrarr,
	Eacute: Eacute$1,
	eacute: eacute$1,
	easter: easter,
	Ecaron: Ecaron,
	ecaron: ecaron,
	Ecirc: Ecirc$1,
	ecirc: ecirc$1,
	ecir: ecir,
	ecolon: ecolon,
	Ecy: Ecy,
	ecy: ecy,
	eDDot: eDDot,
	Edot: Edot,
	edot: edot,
	eDot: eDot,
	ee: ee,
	efDot: efDot,
	Efr: Efr,
	efr: efr,
	eg: eg,
	Egrave: Egrave$1,
	egrave: egrave$1,
	egs: egs,
	egsdot: egsdot,
	el: el,
	Element: Element,
	elinters: elinters,
	ell: ell,
	els: els,
	elsdot: elsdot,
	Emacr: Emacr,
	emacr: emacr,
	empty: empty,
	emptyset: emptyset,
	EmptySmallSquare: EmptySmallSquare,
	emptyv: emptyv,
	EmptyVerySmallSquare: EmptyVerySmallSquare,
	emsp13: emsp13,
	emsp14: emsp14,
	emsp: emsp,
	ENG: ENG,
	eng: eng,
	ensp: ensp,
	Eogon: Eogon,
	eogon: eogon,
	Eopf: Eopf,
	eopf: eopf,
	epar: epar,
	eparsl: eparsl,
	eplus: eplus,
	epsi: epsi,
	Epsilon: Epsilon,
	epsilon: epsilon,
	epsiv: epsiv,
	eqcirc: eqcirc,
	eqcolon: eqcolon,
	eqsim: eqsim,
	eqslantgtr: eqslantgtr,
	eqslantless: eqslantless,
	Equal: Equal,
	equals: equals,
	EqualTilde: EqualTilde,
	equest: equest,
	Equilibrium: Equilibrium,
	equiv: equiv,
	equivDD: equivDD,
	eqvparsl: eqvparsl,
	erarr: erarr,
	erDot: erDot,
	escr: escr,
	Escr: Escr,
	esdot: esdot,
	Esim: Esim,
	esim: esim,
	Eta: Eta,
	eta: eta,
	ETH: ETH$1,
	eth: eth$1,
	Euml: Euml$1,
	euml: euml$1,
	euro: euro,
	excl: excl,
	exist: exist,
	Exists: Exists,
	expectation: expectation,
	exponentiale: exponentiale,
	ExponentialE: ExponentialE,
	fallingdotseq: fallingdotseq,
	Fcy: Fcy,
	fcy: fcy,
	female: female,
	ffilig: ffilig,
	fflig: fflig,
	ffllig: ffllig,
	Ffr: Ffr,
	ffr: ffr,
	filig: filig,
	FilledSmallSquare: FilledSmallSquare,
	FilledVerySmallSquare: FilledVerySmallSquare,
	fjlig: fjlig,
	flat: flat,
	fllig: fllig,
	fltns: fltns,
	fnof: fnof,
	Fopf: Fopf,
	fopf: fopf,
	forall: forall,
	ForAll: ForAll,
	fork: fork,
	forkv: forkv,
	Fouriertrf: Fouriertrf,
	fpartint: fpartint,
	frac12: frac12$1,
	frac13: frac13,
	frac14: frac14$1,
	frac15: frac15,
	frac16: frac16,
	frac18: frac18,
	frac23: frac23,
	frac25: frac25,
	frac34: frac34$1,
	frac35: frac35,
	frac38: frac38,
	frac45: frac45,
	frac56: frac56,
	frac58: frac58,
	frac78: frac78,
	frasl: frasl,
	frown: frown,
	fscr: fscr,
	Fscr: Fscr,
	gacute: gacute,
	Gamma: Gamma,
	gamma: gamma,
	Gammad: Gammad,
	gammad: gammad,
	gap: gap,
	Gbreve: Gbreve,
	gbreve: gbreve,
	Gcedil: Gcedil,
	Gcirc: Gcirc,
	gcirc: gcirc,
	Gcy: Gcy,
	gcy: gcy,
	Gdot: Gdot,
	gdot: gdot,
	ge: ge,
	gE: gE,
	gEl: gEl,
	gel: gel,
	geq: geq,
	geqq: geqq,
	geqslant: geqslant,
	gescc: gescc,
	ges: ges,
	gesdot: gesdot,
	gesdoto: gesdoto,
	gesdotol: gesdotol,
	gesl: gesl,
	gesles: gesles,
	Gfr: Gfr,
	gfr: gfr,
	gg: gg,
	Gg: Gg,
	ggg: ggg,
	gimel: gimel,
	GJcy: GJcy,
	gjcy: gjcy,
	gla: gla,
	gl: gl,
	glE: glE,
	glj: glj,
	gnap: gnap,
	gnapprox: gnapprox,
	gne: gne,
	gnE: gnE,
	gneq: gneq,
	gneqq: gneqq,
	gnsim: gnsim,
	Gopf: Gopf,
	gopf: gopf,
	grave: grave,
	GreaterEqual: GreaterEqual,
	GreaterEqualLess: GreaterEqualLess,
	GreaterFullEqual: GreaterFullEqual,
	GreaterGreater: GreaterGreater,
	GreaterLess: GreaterLess,
	GreaterSlantEqual: GreaterSlantEqual,
	GreaterTilde: GreaterTilde,
	Gscr: Gscr,
	gscr: gscr,
	gsim: gsim,
	gsime: gsime,
	gsiml: gsiml,
	gtcc: gtcc,
	gtcir: gtcir,
	gt: gt$2,
	GT: GT$1,
	Gt: Gt,
	gtdot: gtdot,
	gtlPar: gtlPar,
	gtquest: gtquest,
	gtrapprox: gtrapprox,
	gtrarr: gtrarr,
	gtrdot: gtrdot,
	gtreqless: gtreqless,
	gtreqqless: gtreqqless,
	gtrless: gtrless,
	gtrsim: gtrsim,
	gvertneqq: gvertneqq,
	gvnE: gvnE,
	Hacek: Hacek,
	hairsp: hairsp,
	half: half,
	hamilt: hamilt,
	HARDcy: HARDcy,
	hardcy: hardcy,
	harrcir: harrcir,
	harr: harr,
	hArr: hArr,
	harrw: harrw,
	Hat: Hat,
	hbar: hbar,
	Hcirc: Hcirc,
	hcirc: hcirc,
	hearts: hearts,
	heartsuit: heartsuit,
	hellip: hellip,
	hercon: hercon,
	hfr: hfr,
	Hfr: Hfr,
	HilbertSpace: HilbertSpace,
	hksearow: hksearow,
	hkswarow: hkswarow,
	hoarr: hoarr,
	homtht: homtht,
	hookleftarrow: hookleftarrow,
	hookrightarrow: hookrightarrow,
	hopf: hopf,
	Hopf: Hopf,
	horbar: horbar,
	HorizontalLine: HorizontalLine,
	hscr: hscr,
	Hscr: Hscr,
	hslash: hslash,
	Hstrok: Hstrok,
	hstrok: hstrok,
	HumpDownHump: HumpDownHump,
	HumpEqual: HumpEqual,
	hybull: hybull,
	hyphen: hyphen,
	Iacute: Iacute$1,
	iacute: iacute$1,
	ic: ic,
	Icirc: Icirc$1,
	icirc: icirc$1,
	Icy: Icy,
	icy: icy,
	Idot: Idot,
	IEcy: IEcy,
	iecy: iecy,
	iexcl: iexcl$1,
	iff: iff,
	ifr: ifr,
	Ifr: Ifr,
	Igrave: Igrave$1,
	igrave: igrave$1,
	ii: ii,
	iiiint: iiiint,
	iiint: iiint,
	iinfin: iinfin,
	iiota: iiota,
	IJlig: IJlig,
	ijlig: ijlig,
	Imacr: Imacr,
	imacr: imacr,
	image: image,
	ImaginaryI: ImaginaryI,
	imagline: imagline,
	imagpart: imagpart,
	imath: imath,
	Im: Im,
	imof: imof,
	imped: imped,
	Implies: Implies,
	incare: incare,
	"in": "???",
	infin: infin,
	infintie: infintie,
	inodot: inodot,
	intcal: intcal,
	int: int,
	Int: Int,
	integers: integers,
	Integral: Integral,
	intercal: intercal,
	Intersection: Intersection,
	intlarhk: intlarhk,
	intprod: intprod,
	InvisibleComma: InvisibleComma,
	InvisibleTimes: InvisibleTimes,
	IOcy: IOcy,
	iocy: iocy,
	Iogon: Iogon,
	iogon: iogon,
	Iopf: Iopf,
	iopf: iopf,
	Iota: Iota,
	iota: iota,
	iprod: iprod,
	iquest: iquest$1,
	iscr: iscr,
	Iscr: Iscr,
	isin: isin,
	isindot: isindot,
	isinE: isinE,
	isins: isins,
	isinsv: isinsv,
	isinv: isinv,
	it: it,
	Itilde: Itilde,
	itilde: itilde,
	Iukcy: Iukcy,
	iukcy: iukcy,
	Iuml: Iuml$1,
	iuml: iuml$1,
	Jcirc: Jcirc,
	jcirc: jcirc,
	Jcy: Jcy,
	jcy: jcy,
	Jfr: Jfr,
	jfr: jfr,
	jmath: jmath,
	Jopf: Jopf,
	jopf: jopf,
	Jscr: Jscr,
	jscr: jscr,
	Jsercy: Jsercy,
	jsercy: jsercy,
	Jukcy: Jukcy,
	jukcy: jukcy,
	Kappa: Kappa,
	kappa: kappa,
	kappav: kappav,
	Kcedil: Kcedil,
	kcedil: kcedil,
	Kcy: Kcy,
	kcy: kcy,
	Kfr: Kfr,
	kfr: kfr,
	kgreen: kgreen,
	KHcy: KHcy,
	khcy: khcy,
	KJcy: KJcy,
	kjcy: kjcy,
	Kopf: Kopf,
	kopf: kopf,
	Kscr: Kscr,
	kscr: kscr,
	lAarr: lAarr,
	Lacute: Lacute,
	lacute: lacute,
	laemptyv: laemptyv,
	lagran: lagran,
	Lambda: Lambda,
	lambda: lambda,
	lang: lang,
	Lang: Lang,
	langd: langd,
	langle: langle,
	lap: lap,
	Laplacetrf: Laplacetrf,
	laquo: laquo$1,
	larrb: larrb,
	larrbfs: larrbfs,
	larr: larr,
	Larr: Larr,
	lArr: lArr,
	larrfs: larrfs,
	larrhk: larrhk,
	larrlp: larrlp,
	larrpl: larrpl,
	larrsim: larrsim,
	larrtl: larrtl,
	latail: latail,
	lAtail: lAtail,
	lat: lat,
	late: late,
	lates: lates,
	lbarr: lbarr,
	lBarr: lBarr,
	lbbrk: lbbrk,
	lbrace: lbrace,
	lbrack: lbrack,
	lbrke: lbrke,
	lbrksld: lbrksld,
	lbrkslu: lbrkslu,
	Lcaron: Lcaron,
	lcaron: lcaron,
	Lcedil: Lcedil,
	lcedil: lcedil,
	lceil: lceil,
	lcub: lcub,
	Lcy: Lcy,
	lcy: lcy,
	ldca: ldca,
	ldquo: ldquo,
	ldquor: ldquor,
	ldrdhar: ldrdhar,
	ldrushar: ldrushar,
	ldsh: ldsh,
	le: le,
	lE: lE,
	LeftAngleBracket: LeftAngleBracket,
	LeftArrowBar: LeftArrowBar,
	leftarrow: leftarrow,
	LeftArrow: LeftArrow,
	Leftarrow: Leftarrow,
	LeftArrowRightArrow: LeftArrowRightArrow,
	leftarrowtail: leftarrowtail,
	LeftCeiling: LeftCeiling,
	LeftDoubleBracket: LeftDoubleBracket,
	LeftDownTeeVector: LeftDownTeeVector,
	LeftDownVectorBar: LeftDownVectorBar,
	LeftDownVector: LeftDownVector,
	LeftFloor: LeftFloor,
	leftharpoondown: leftharpoondown,
	leftharpoonup: leftharpoonup,
	leftleftarrows: leftleftarrows,
	leftrightarrow: leftrightarrow,
	LeftRightArrow: LeftRightArrow,
	Leftrightarrow: Leftrightarrow,
	leftrightarrows: leftrightarrows,
	leftrightharpoons: leftrightharpoons,
	leftrightsquigarrow: leftrightsquigarrow,
	LeftRightVector: LeftRightVector,
	LeftTeeArrow: LeftTeeArrow,
	LeftTee: LeftTee,
	LeftTeeVector: LeftTeeVector,
	leftthreetimes: leftthreetimes,
	LeftTriangleBar: LeftTriangleBar,
	LeftTriangle: LeftTriangle,
	LeftTriangleEqual: LeftTriangleEqual,
	LeftUpDownVector: LeftUpDownVector,
	LeftUpTeeVector: LeftUpTeeVector,
	LeftUpVectorBar: LeftUpVectorBar,
	LeftUpVector: LeftUpVector,
	LeftVectorBar: LeftVectorBar,
	LeftVector: LeftVector,
	lEg: lEg,
	leg: leg,
	leq: leq,
	leqq: leqq,
	leqslant: leqslant,
	lescc: lescc,
	les: les,
	lesdot: lesdot,
	lesdoto: lesdoto,
	lesdotor: lesdotor,
	lesg: lesg,
	lesges: lesges,
	lessapprox: lessapprox,
	lessdot: lessdot,
	lesseqgtr: lesseqgtr,
	lesseqqgtr: lesseqqgtr,
	LessEqualGreater: LessEqualGreater,
	LessFullEqual: LessFullEqual,
	LessGreater: LessGreater,
	lessgtr: lessgtr,
	LessLess: LessLess,
	lesssim: lesssim,
	LessSlantEqual: LessSlantEqual,
	LessTilde: LessTilde,
	lfisht: lfisht,
	lfloor: lfloor,
	Lfr: Lfr,
	lfr: lfr,
	lg: lg,
	lgE: lgE,
	lHar: lHar,
	lhard: lhard,
	lharu: lharu,
	lharul: lharul,
	lhblk: lhblk,
	LJcy: LJcy,
	ljcy: ljcy,
	llarr: llarr,
	ll: ll,
	Ll: Ll,
	llcorner: llcorner,
	Lleftarrow: Lleftarrow,
	llhard: llhard,
	lltri: lltri,
	Lmidot: Lmidot,
	lmidot: lmidot,
	lmoustache: lmoustache,
	lmoust: lmoust,
	lnap: lnap,
	lnapprox: lnapprox,
	lne: lne,
	lnE: lnE,
	lneq: lneq,
	lneqq: lneqq,
	lnsim: lnsim,
	loang: loang,
	loarr: loarr,
	lobrk: lobrk,
	longleftarrow: longleftarrow,
	LongLeftArrow: LongLeftArrow,
	Longleftarrow: Longleftarrow,
	longleftrightarrow: longleftrightarrow,
	LongLeftRightArrow: LongLeftRightArrow,
	Longleftrightarrow: Longleftrightarrow,
	longmapsto: longmapsto,
	longrightarrow: longrightarrow,
	LongRightArrow: LongRightArrow,
	Longrightarrow: Longrightarrow,
	looparrowleft: looparrowleft,
	looparrowright: looparrowright,
	lopar: lopar,
	Lopf: Lopf,
	lopf: lopf,
	loplus: loplus,
	lotimes: lotimes,
	lowast: lowast,
	lowbar: lowbar,
	LowerLeftArrow: LowerLeftArrow,
	LowerRightArrow: LowerRightArrow,
	loz: loz,
	lozenge: lozenge,
	lozf: lozf,
	lpar: lpar,
	lparlt: lparlt,
	lrarr: lrarr,
	lrcorner: lrcorner,
	lrhar: lrhar,
	lrhard: lrhard,
	lrm: lrm,
	lrtri: lrtri,
	lsaquo: lsaquo,
	lscr: lscr,
	Lscr: Lscr,
	lsh: lsh,
	Lsh: Lsh,
	lsim: lsim,
	lsime: lsime,
	lsimg: lsimg,
	lsqb: lsqb,
	lsquo: lsquo,
	lsquor: lsquor,
	Lstrok: Lstrok,
	lstrok: lstrok,
	ltcc: ltcc,
	ltcir: ltcir,
	lt: lt$2,
	LT: LT$1,
	Lt: Lt,
	ltdot: ltdot,
	lthree: lthree,
	ltimes: ltimes,
	ltlarr: ltlarr,
	ltquest: ltquest,
	ltri: ltri,
	ltrie: ltrie,
	ltrif: ltrif,
	ltrPar: ltrPar,
	lurdshar: lurdshar,
	luruhar: luruhar,
	lvertneqq: lvertneqq,
	lvnE: lvnE,
	macr: macr$1,
	male: male,
	malt: malt,
	maltese: maltese,
	"Map": "???",
	map: map,
	mapsto: mapsto,
	mapstodown: mapstodown,
	mapstoleft: mapstoleft,
	mapstoup: mapstoup,
	marker: marker,
	mcomma: mcomma,
	Mcy: Mcy,
	mcy: mcy,
	mdash: mdash,
	mDDot: mDDot,
	measuredangle: measuredangle,
	MediumSpace: MediumSpace,
	Mellintrf: Mellintrf,
	Mfr: Mfr,
	mfr: mfr,
	mho: mho,
	micro: micro$1,
	midast: midast,
	midcir: midcir,
	mid: mid,
	middot: middot$1,
	minusb: minusb,
	minus: minus,
	minusd: minusd,
	minusdu: minusdu,
	MinusPlus: MinusPlus,
	mlcp: mlcp,
	mldr: mldr,
	mnplus: mnplus,
	models: models,
	Mopf: Mopf,
	mopf: mopf,
	mp: mp,
	mscr: mscr,
	Mscr: Mscr,
	mstpos: mstpos,
	Mu: Mu,
	mu: mu,
	multimap: multimap,
	mumap: mumap,
	nabla: nabla,
	Nacute: Nacute,
	nacute: nacute,
	nang: nang,
	nap: nap,
	napE: napE,
	napid: napid,
	napos: napos,
	napprox: napprox,
	natural: natural,
	naturals: naturals,
	natur: natur,
	nbsp: nbsp$1,
	nbump: nbump,
	nbumpe: nbumpe,
	ncap: ncap,
	Ncaron: Ncaron,
	ncaron: ncaron,
	Ncedil: Ncedil,
	ncedil: ncedil,
	ncong: ncong,
	ncongdot: ncongdot,
	ncup: ncup,
	Ncy: Ncy,
	ncy: ncy,
	ndash: ndash,
	nearhk: nearhk,
	nearr: nearr,
	neArr: neArr,
	nearrow: nearrow,
	ne: ne,
	nedot: nedot,
	NegativeMediumSpace: NegativeMediumSpace,
	NegativeThickSpace: NegativeThickSpace,
	NegativeThinSpace: NegativeThinSpace,
	NegativeVeryThinSpace: NegativeVeryThinSpace,
	nequiv: nequiv,
	nesear: nesear,
	nesim: nesim,
	NestedGreaterGreater: NestedGreaterGreater,
	NestedLessLess: NestedLessLess,
	NewLine: NewLine,
	nexist: nexist,
	nexists: nexists,
	Nfr: Nfr,
	nfr: nfr,
	ngE: ngE,
	nge: nge,
	ngeq: ngeq,
	ngeqq: ngeqq,
	ngeqslant: ngeqslant,
	nges: nges,
	nGg: nGg,
	ngsim: ngsim,
	nGt: nGt,
	ngt: ngt,
	ngtr: ngtr,
	nGtv: nGtv,
	nharr: nharr,
	nhArr: nhArr,
	nhpar: nhpar,
	ni: ni,
	nis: nis,
	nisd: nisd,
	niv: niv,
	NJcy: NJcy,
	njcy: njcy,
	nlarr: nlarr,
	nlArr: nlArr,
	nldr: nldr,
	nlE: nlE,
	nle: nle,
	nleftarrow: nleftarrow,
	nLeftarrow: nLeftarrow,
	nleftrightarrow: nleftrightarrow,
	nLeftrightarrow: nLeftrightarrow,
	nleq: nleq,
	nleqq: nleqq,
	nleqslant: nleqslant,
	nles: nles,
	nless: nless,
	nLl: nLl,
	nlsim: nlsim,
	nLt: nLt,
	nlt: nlt,
	nltri: nltri,
	nltrie: nltrie,
	nLtv: nLtv,
	nmid: nmid,
	NoBreak: NoBreak,
	NonBreakingSpace: NonBreakingSpace,
	nopf: nopf,
	Nopf: Nopf,
	Not: Not,
	not: not$1,
	NotCongruent: NotCongruent,
	NotCupCap: NotCupCap,
	NotDoubleVerticalBar: NotDoubleVerticalBar,
	NotElement: NotElement,
	NotEqual: NotEqual,
	NotEqualTilde: NotEqualTilde,
	NotExists: NotExists,
	NotGreater: NotGreater,
	NotGreaterEqual: NotGreaterEqual,
	NotGreaterFullEqual: NotGreaterFullEqual,
	NotGreaterGreater: NotGreaterGreater,
	NotGreaterLess: NotGreaterLess,
	NotGreaterSlantEqual: NotGreaterSlantEqual,
	NotGreaterTilde: NotGreaterTilde,
	NotHumpDownHump: NotHumpDownHump,
	NotHumpEqual: NotHumpEqual,
	notin: notin,
	notindot: notindot,
	notinE: notinE,
	notinva: notinva,
	notinvb: notinvb,
	notinvc: notinvc,
	NotLeftTriangleBar: NotLeftTriangleBar,
	NotLeftTriangle: NotLeftTriangle,
	NotLeftTriangleEqual: NotLeftTriangleEqual,
	NotLess: NotLess,
	NotLessEqual: NotLessEqual,
	NotLessGreater: NotLessGreater,
	NotLessLess: NotLessLess,
	NotLessSlantEqual: NotLessSlantEqual,
	NotLessTilde: NotLessTilde,
	NotNestedGreaterGreater: NotNestedGreaterGreater,
	NotNestedLessLess: NotNestedLessLess,
	notni: notni,
	notniva: notniva,
	notnivb: notnivb,
	notnivc: notnivc,
	NotPrecedes: NotPrecedes,
	NotPrecedesEqual: NotPrecedesEqual,
	NotPrecedesSlantEqual: NotPrecedesSlantEqual,
	NotReverseElement: NotReverseElement,
	NotRightTriangleBar: NotRightTriangleBar,
	NotRightTriangle: NotRightTriangle,
	NotRightTriangleEqual: NotRightTriangleEqual,
	NotSquareSubset: NotSquareSubset,
	NotSquareSubsetEqual: NotSquareSubsetEqual,
	NotSquareSuperset: NotSquareSuperset,
	NotSquareSupersetEqual: NotSquareSupersetEqual,
	NotSubset: NotSubset,
	NotSubsetEqual: NotSubsetEqual,
	NotSucceeds: NotSucceeds,
	NotSucceedsEqual: NotSucceedsEqual,
	NotSucceedsSlantEqual: NotSucceedsSlantEqual,
	NotSucceedsTilde: NotSucceedsTilde,
	NotSuperset: NotSuperset,
	NotSupersetEqual: NotSupersetEqual,
	NotTilde: NotTilde,
	NotTildeEqual: NotTildeEqual,
	NotTildeFullEqual: NotTildeFullEqual,
	NotTildeTilde: NotTildeTilde,
	NotVerticalBar: NotVerticalBar,
	nparallel: nparallel,
	npar: npar,
	nparsl: nparsl,
	npart: npart,
	npolint: npolint,
	npr: npr,
	nprcue: nprcue,
	nprec: nprec,
	npreceq: npreceq,
	npre: npre,
	nrarrc: nrarrc,
	nrarr: nrarr,
	nrArr: nrArr,
	nrarrw: nrarrw,
	nrightarrow: nrightarrow,
	nRightarrow: nRightarrow,
	nrtri: nrtri,
	nrtrie: nrtrie,
	nsc: nsc,
	nsccue: nsccue,
	nsce: nsce,
	Nscr: Nscr,
	nscr: nscr,
	nshortmid: nshortmid,
	nshortparallel: nshortparallel,
	nsim: nsim,
	nsime: nsime,
	nsimeq: nsimeq,
	nsmid: nsmid,
	nspar: nspar,
	nsqsube: nsqsube,
	nsqsupe: nsqsupe,
	nsub: nsub,
	nsubE: nsubE,
	nsube: nsube,
	nsubset: nsubset,
	nsubseteq: nsubseteq,
	nsubseteqq: nsubseteqq,
	nsucc: nsucc,
	nsucceq: nsucceq,
	nsup: nsup,
	nsupE: nsupE,
	nsupe: nsupe,
	nsupset: nsupset,
	nsupseteq: nsupseteq,
	nsupseteqq: nsupseteqq,
	ntgl: ntgl,
	Ntilde: Ntilde$1,
	ntilde: ntilde$1,
	ntlg: ntlg,
	ntriangleleft: ntriangleleft,
	ntrianglelefteq: ntrianglelefteq,
	ntriangleright: ntriangleright,
	ntrianglerighteq: ntrianglerighteq,
	Nu: Nu,
	nu: nu,
	num: num,
	numero: numero,
	numsp: numsp,
	nvap: nvap,
	nvdash: nvdash,
	nvDash: nvDash,
	nVdash: nVdash,
	nVDash: nVDash,
	nvge: nvge,
	nvgt: nvgt,
	nvHarr: nvHarr,
	nvinfin: nvinfin,
	nvlArr: nvlArr,
	nvle: nvle,
	nvlt: nvlt,
	nvltrie: nvltrie,
	nvrArr: nvrArr,
	nvrtrie: nvrtrie,
	nvsim: nvsim,
	nwarhk: nwarhk,
	nwarr: nwarr,
	nwArr: nwArr,
	nwarrow: nwarrow,
	nwnear: nwnear,
	Oacute: Oacute$1,
	oacute: oacute$1,
	oast: oast,
	Ocirc: Ocirc$1,
	ocirc: ocirc$1,
	ocir: ocir,
	Ocy: Ocy,
	ocy: ocy,
	odash: odash,
	Odblac: Odblac,
	odblac: odblac,
	odiv: odiv,
	odot: odot,
	odsold: odsold,
	OElig: OElig,
	oelig: oelig,
	ofcir: ofcir,
	Ofr: Ofr,
	ofr: ofr,
	ogon: ogon,
	Ograve: Ograve$1,
	ograve: ograve$1,
	ogt: ogt,
	ohbar: ohbar,
	ohm: ohm,
	oint: oint,
	olarr: olarr,
	olcir: olcir,
	olcross: olcross,
	oline: oline,
	olt: olt,
	Omacr: Omacr,
	omacr: omacr,
	Omega: Omega,
	omega: omega,
	Omicron: Omicron,
	omicron: omicron,
	omid: omid,
	ominus: ominus,
	Oopf: Oopf,
	oopf: oopf,
	opar: opar,
	OpenCurlyDoubleQuote: OpenCurlyDoubleQuote,
	OpenCurlyQuote: OpenCurlyQuote,
	operp: operp,
	oplus: oplus,
	orarr: orarr,
	Or: Or,
	or: or,
	ord: ord,
	order: order,
	orderof: orderof,
	ordf: ordf$1,
	ordm: ordm$1,
	origof: origof,
	oror: oror,
	orslope: orslope,
	orv: orv,
	oS: oS,
	Oscr: Oscr,
	oscr: oscr,
	Oslash: Oslash$1,
	oslash: oslash$1,
	osol: osol,
	Otilde: Otilde$1,
	otilde: otilde$1,
	otimesas: otimesas,
	Otimes: Otimes,
	otimes: otimes,
	Ouml: Ouml$1,
	ouml: ouml$1,
	ovbar: ovbar,
	OverBar: OverBar,
	OverBrace: OverBrace,
	OverBracket: OverBracket,
	OverParenthesis: OverParenthesis,
	para: para$1,
	parallel: parallel,
	par: par,
	parsim: parsim,
	parsl: parsl,
	part: part,
	PartialD: PartialD,
	Pcy: Pcy,
	pcy: pcy,
	percnt: percnt,
	period: period,
	permil: permil,
	perp: perp,
	pertenk: pertenk,
	Pfr: Pfr,
	pfr: pfr,
	Phi: Phi,
	phi: phi,
	phiv: phiv,
	phmmat: phmmat,
	phone: phone,
	Pi: Pi,
	pi: pi,
	pitchfork: pitchfork,
	piv: piv,
	planck: planck,
	planckh: planckh,
	plankv: plankv,
	plusacir: plusacir,
	plusb: plusb,
	pluscir: pluscir,
	plus: plus,
	plusdo: plusdo,
	plusdu: plusdu,
	pluse: pluse,
	PlusMinus: PlusMinus,
	plusmn: plusmn$1,
	plussim: plussim,
	plustwo: plustwo,
	pm: pm,
	Poincareplane: Poincareplane,
	pointint: pointint,
	popf: popf,
	Popf: Popf,
	pound: pound$1,
	prap: prap,
	Pr: Pr,
	pr: pr,
	prcue: prcue,
	precapprox: precapprox,
	prec: prec,
	preccurlyeq: preccurlyeq,
	Precedes: Precedes,
	PrecedesEqual: PrecedesEqual,
	PrecedesSlantEqual: PrecedesSlantEqual,
	PrecedesTilde: PrecedesTilde,
	preceq: preceq,
	precnapprox: precnapprox,
	precneqq: precneqq,
	precnsim: precnsim,
	pre: pre,
	prE: prE,
	precsim: precsim,
	prime: prime,
	Prime: Prime,
	primes: primes,
	prnap: prnap,
	prnE: prnE,
	prnsim: prnsim,
	prod: prod,
	Product: Product,
	profalar: profalar,
	profline: profline,
	profsurf: profsurf,
	prop: prop,
	Proportional: Proportional,
	Proportion: Proportion,
	propto: propto,
	prsim: prsim,
	prurel: prurel,
	Pscr: Pscr,
	pscr: pscr,
	Psi: Psi,
	psi: psi,
	puncsp: puncsp,
	Qfr: Qfr,
	qfr: qfr,
	qint: qint,
	qopf: qopf,
	Qopf: Qopf,
	qprime: qprime,
	Qscr: Qscr,
	qscr: qscr,
	quaternions: quaternions,
	quatint: quatint,
	quest: quest,
	questeq: questeq,
	quot: quot$2,
	QUOT: QUOT$1,
	rAarr: rAarr,
	race: race,
	Racute: Racute,
	racute: racute,
	radic: radic,
	raemptyv: raemptyv,
	rang: rang,
	Rang: Rang,
	rangd: rangd,
	range: range,
	rangle: rangle,
	raquo: raquo$1,
	rarrap: rarrap,
	rarrb: rarrb,
	rarrbfs: rarrbfs,
	rarrc: rarrc,
	rarr: rarr,
	Rarr: Rarr,
	rArr: rArr,
	rarrfs: rarrfs,
	rarrhk: rarrhk,
	rarrlp: rarrlp,
	rarrpl: rarrpl,
	rarrsim: rarrsim,
	Rarrtl: Rarrtl,
	rarrtl: rarrtl,
	rarrw: rarrw,
	ratail: ratail,
	rAtail: rAtail,
	ratio: ratio,
	rationals: rationals,
	rbarr: rbarr,
	rBarr: rBarr,
	RBarr: RBarr,
	rbbrk: rbbrk,
	rbrace: rbrace,
	rbrack: rbrack,
	rbrke: rbrke,
	rbrksld: rbrksld,
	rbrkslu: rbrkslu,
	Rcaron: Rcaron,
	rcaron: rcaron,
	Rcedil: Rcedil,
	rcedil: rcedil,
	rceil: rceil,
	rcub: rcub,
	Rcy: Rcy,
	rcy: rcy,
	rdca: rdca,
	rdldhar: rdldhar,
	rdquo: rdquo,
	rdquor: rdquor,
	rdsh: rdsh,
	real: real,
	realine: realine,
	realpart: realpart,
	reals: reals,
	Re: Re,
	rect: rect,
	reg: reg$1,
	REG: REG$1,
	ReverseElement: ReverseElement,
	ReverseEquilibrium: ReverseEquilibrium,
	ReverseUpEquilibrium: ReverseUpEquilibrium,
	rfisht: rfisht,
	rfloor: rfloor,
	rfr: rfr,
	Rfr: Rfr,
	rHar: rHar,
	rhard: rhard,
	rharu: rharu,
	rharul: rharul,
	Rho: Rho,
	rho: rho,
	rhov: rhov,
	RightAngleBracket: RightAngleBracket,
	RightArrowBar: RightArrowBar,
	rightarrow: rightarrow,
	RightArrow: RightArrow,
	Rightarrow: Rightarrow,
	RightArrowLeftArrow: RightArrowLeftArrow,
	rightarrowtail: rightarrowtail,
	RightCeiling: RightCeiling,
	RightDoubleBracket: RightDoubleBracket,
	RightDownTeeVector: RightDownTeeVector,
	RightDownVectorBar: RightDownVectorBar,
	RightDownVector: RightDownVector,
	RightFloor: RightFloor,
	rightharpoondown: rightharpoondown,
	rightharpoonup: rightharpoonup,
	rightleftarrows: rightleftarrows,
	rightleftharpoons: rightleftharpoons,
	rightrightarrows: rightrightarrows,
	rightsquigarrow: rightsquigarrow,
	RightTeeArrow: RightTeeArrow,
	RightTee: RightTee,
	RightTeeVector: RightTeeVector,
	rightthreetimes: rightthreetimes,
	RightTriangleBar: RightTriangleBar,
	RightTriangle: RightTriangle,
	RightTriangleEqual: RightTriangleEqual,
	RightUpDownVector: RightUpDownVector,
	RightUpTeeVector: RightUpTeeVector,
	RightUpVectorBar: RightUpVectorBar,
	RightUpVector: RightUpVector,
	RightVectorBar: RightVectorBar,
	RightVector: RightVector,
	ring: ring,
	risingdotseq: risingdotseq,
	rlarr: rlarr,
	rlhar: rlhar,
	rlm: rlm,
	rmoustache: rmoustache,
	rmoust: rmoust,
	rnmid: rnmid,
	roang: roang,
	roarr: roarr,
	robrk: robrk,
	ropar: ropar,
	ropf: ropf,
	Ropf: Ropf,
	roplus: roplus,
	rotimes: rotimes,
	RoundImplies: RoundImplies,
	rpar: rpar,
	rpargt: rpargt,
	rppolint: rppolint,
	rrarr: rrarr,
	Rrightarrow: Rrightarrow,
	rsaquo: rsaquo,
	rscr: rscr,
	Rscr: Rscr,
	rsh: rsh,
	Rsh: Rsh,
	rsqb: rsqb,
	rsquo: rsquo,
	rsquor: rsquor,
	rthree: rthree,
	rtimes: rtimes,
	rtri: rtri,
	rtrie: rtrie,
	rtrif: rtrif,
	rtriltri: rtriltri,
	RuleDelayed: RuleDelayed,
	ruluhar: ruluhar,
	rx: rx,
	Sacute: Sacute,
	sacute: sacute,
	sbquo: sbquo,
	scap: scap,
	Scaron: Scaron,
	scaron: scaron,
	Sc: Sc,
	sc: sc,
	sccue: sccue,
	sce: sce,
	scE: scE,
	Scedil: Scedil,
	scedil: scedil,
	Scirc: Scirc,
	scirc: scirc,
	scnap: scnap,
	scnE: scnE,
	scnsim: scnsim,
	scpolint: scpolint,
	scsim: scsim,
	Scy: Scy,
	scy: scy,
	sdotb: sdotb,
	sdot: sdot,
	sdote: sdote,
	searhk: searhk,
	searr: searr,
	seArr: seArr,
	searrow: searrow,
	sect: sect$1,
	semi: semi,
	seswar: seswar,
	setminus: setminus,
	setmn: setmn,
	sext: sext,
	Sfr: Sfr,
	sfr: sfr,
	sfrown: sfrown,
	sharp: sharp,
	SHCHcy: SHCHcy,
	shchcy: shchcy,
	SHcy: SHcy,
	shcy: shcy,
	ShortDownArrow: ShortDownArrow,
	ShortLeftArrow: ShortLeftArrow,
	shortmid: shortmid,
	shortparallel: shortparallel,
	ShortRightArrow: ShortRightArrow,
	ShortUpArrow: ShortUpArrow,
	shy: shy$1,
	Sigma: Sigma,
	sigma: sigma,
	sigmaf: sigmaf,
	sigmav: sigmav,
	sim: sim,
	simdot: simdot,
	sime: sime,
	simeq: simeq,
	simg: simg,
	simgE: simgE,
	siml: siml,
	simlE: simlE,
	simne: simne,
	simplus: simplus,
	simrarr: simrarr,
	slarr: slarr,
	SmallCircle: SmallCircle,
	smallsetminus: smallsetminus,
	smashp: smashp,
	smeparsl: smeparsl,
	smid: smid,
	smile: smile,
	smt: smt,
	smte: smte,
	smtes: smtes,
	SOFTcy: SOFTcy,
	softcy: softcy,
	solbar: solbar,
	solb: solb,
	sol: sol,
	Sopf: Sopf,
	sopf: sopf,
	spades: spades,
	spadesuit: spadesuit,
	spar: spar,
	sqcap: sqcap,
	sqcaps: sqcaps,
	sqcup: sqcup,
	sqcups: sqcups,
	Sqrt: Sqrt,
	sqsub: sqsub,
	sqsube: sqsube,
	sqsubset: sqsubset,
	sqsubseteq: sqsubseteq,
	sqsup: sqsup,
	sqsupe: sqsupe,
	sqsupset: sqsupset,
	sqsupseteq: sqsupseteq,
	square: square,
	Square: Square,
	SquareIntersection: SquareIntersection,
	SquareSubset: SquareSubset,
	SquareSubsetEqual: SquareSubsetEqual,
	SquareSuperset: SquareSuperset,
	SquareSupersetEqual: SquareSupersetEqual,
	SquareUnion: SquareUnion,
	squarf: squarf,
	squ: squ,
	squf: squf,
	srarr: srarr,
	Sscr: Sscr,
	sscr: sscr,
	ssetmn: ssetmn,
	ssmile: ssmile,
	sstarf: sstarf,
	Star: Star,
	star: star,
	starf: starf,
	straightepsilon: straightepsilon,
	straightphi: straightphi,
	strns: strns,
	sub: sub,
	Sub: Sub,
	subdot: subdot,
	subE: subE,
	sube: sube,
	subedot: subedot,
	submult: submult,
	subnE: subnE,
	subne: subne,
	subplus: subplus,
	subrarr: subrarr,
	subset: subset,
	Subset: Subset,
	subseteq: subseteq,
	subseteqq: subseteqq,
	SubsetEqual: SubsetEqual,
	subsetneq: subsetneq,
	subsetneqq: subsetneqq,
	subsim: subsim,
	subsub: subsub,
	subsup: subsup,
	succapprox: succapprox,
	succ: succ,
	succcurlyeq: succcurlyeq,
	Succeeds: Succeeds,
	SucceedsEqual: SucceedsEqual,
	SucceedsSlantEqual: SucceedsSlantEqual,
	SucceedsTilde: SucceedsTilde,
	succeq: succeq,
	succnapprox: succnapprox,
	succneqq: succneqq,
	succnsim: succnsim,
	succsim: succsim,
	SuchThat: SuchThat,
	sum: sum,
	Sum: Sum,
	sung: sung,
	sup1: sup1$1,
	sup2: sup2$1,
	sup3: sup3$1,
	sup: sup,
	Sup: Sup,
	supdot: supdot,
	supdsub: supdsub,
	supE: supE,
	supe: supe,
	supedot: supedot,
	Superset: Superset,
	SupersetEqual: SupersetEqual,
	suphsol: suphsol,
	suphsub: suphsub,
	suplarr: suplarr,
	supmult: supmult,
	supnE: supnE,
	supne: supne,
	supplus: supplus,
	supset: supset,
	Supset: Supset,
	supseteq: supseteq,
	supseteqq: supseteqq,
	supsetneq: supsetneq,
	supsetneqq: supsetneqq,
	supsim: supsim,
	supsub: supsub,
	supsup: supsup,
	swarhk: swarhk,
	swarr: swarr,
	swArr: swArr,
	swarrow: swarrow,
	swnwar: swnwar,
	szlig: szlig$1,
	Tab: Tab,
	target: target,
	Tau: Tau,
	tau: tau,
	tbrk: tbrk,
	Tcaron: Tcaron,
	tcaron: tcaron,
	Tcedil: Tcedil,
	tcedil: tcedil,
	Tcy: Tcy,
	tcy: tcy,
	tdot: tdot,
	telrec: telrec,
	Tfr: Tfr,
	tfr: tfr,
	there4: there4,
	therefore: therefore,
	Therefore: Therefore,
	Theta: Theta,
	theta: theta,
	thetasym: thetasym,
	thetav: thetav,
	thickapprox: thickapprox,
	thicksim: thicksim,
	ThickSpace: ThickSpace,
	ThinSpace: ThinSpace,
	thinsp: thinsp,
	thkap: thkap,
	thksim: thksim,
	THORN: THORN$1,
	thorn: thorn$1,
	tilde: tilde,
	Tilde: Tilde,
	TildeEqual: TildeEqual,
	TildeFullEqual: TildeFullEqual,
	TildeTilde: TildeTilde,
	timesbar: timesbar,
	timesb: timesb,
	times: times$1,
	timesd: timesd,
	tint: tint,
	toea: toea,
	topbot: topbot,
	topcir: topcir,
	top: top,
	Topf: Topf,
	topf: topf,
	topfork: topfork,
	tosa: tosa,
	tprime: tprime,
	trade: trade,
	TRADE: TRADE,
	triangle: triangle,
	triangledown: triangledown,
	triangleleft: triangleleft,
	trianglelefteq: trianglelefteq,
	triangleq: triangleq,
	triangleright: triangleright,
	trianglerighteq: trianglerighteq,
	tridot: tridot,
	trie: trie,
	triminus: triminus,
	TripleDot: TripleDot,
	triplus: triplus,
	trisb: trisb,
	tritime: tritime,
	trpezium: trpezium,
	Tscr: Tscr,
	tscr: tscr,
	TScy: TScy,
	tscy: tscy,
	TSHcy: TSHcy,
	tshcy: tshcy,
	Tstrok: Tstrok,
	tstrok: tstrok,
	twixt: twixt,
	twoheadleftarrow: twoheadleftarrow,
	twoheadrightarrow: twoheadrightarrow,
	Uacute: Uacute$1,
	uacute: uacute$1,
	uarr: uarr,
	Uarr: Uarr,
	uArr: uArr,
	Uarrocir: Uarrocir,
	Ubrcy: Ubrcy,
	ubrcy: ubrcy,
	Ubreve: Ubreve,
	ubreve: ubreve,
	Ucirc: Ucirc$1,
	ucirc: ucirc$1,
	Ucy: Ucy,
	ucy: ucy,
	udarr: udarr,
	Udblac: Udblac,
	udblac: udblac,
	udhar: udhar,
	ufisht: ufisht,
	Ufr: Ufr,
	ufr: ufr,
	Ugrave: Ugrave$1,
	ugrave: ugrave$1,
	uHar: uHar,
	uharl: uharl,
	uharr: uharr,
	uhblk: uhblk,
	ulcorn: ulcorn,
	ulcorner: ulcorner,
	ulcrop: ulcrop,
	ultri: ultri,
	Umacr: Umacr,
	umacr: umacr,
	uml: uml$1,
	UnderBar: UnderBar,
	UnderBrace: UnderBrace,
	UnderBracket: UnderBracket,
	UnderParenthesis: UnderParenthesis,
	Union: Union,
	UnionPlus: UnionPlus,
	Uogon: Uogon,
	uogon: uogon,
	Uopf: Uopf,
	uopf: uopf,
	UpArrowBar: UpArrowBar,
	uparrow: uparrow,
	UpArrow: UpArrow,
	Uparrow: Uparrow,
	UpArrowDownArrow: UpArrowDownArrow,
	updownarrow: updownarrow,
	UpDownArrow: UpDownArrow,
	Updownarrow: Updownarrow,
	UpEquilibrium: UpEquilibrium,
	upharpoonleft: upharpoonleft,
	upharpoonright: upharpoonright,
	uplus: uplus,
	UpperLeftArrow: UpperLeftArrow,
	UpperRightArrow: UpperRightArrow,
	upsi: upsi,
	Upsi: Upsi,
	upsih: upsih,
	Upsilon: Upsilon,
	upsilon: upsilon,
	UpTeeArrow: UpTeeArrow,
	UpTee: UpTee,
	upuparrows: upuparrows,
	urcorn: urcorn,
	urcorner: urcorner,
	urcrop: urcrop,
	Uring: Uring,
	uring: uring,
	urtri: urtri,
	Uscr: Uscr,
	uscr: uscr,
	utdot: utdot,
	Utilde: Utilde,
	utilde: utilde,
	utri: utri,
	utrif: utrif,
	uuarr: uuarr,
	Uuml: Uuml$1,
	uuml: uuml$1,
	uwangle: uwangle,
	vangrt: vangrt,
	varepsilon: varepsilon,
	varkappa: varkappa,
	varnothing: varnothing,
	varphi: varphi,
	varpi: varpi,
	varpropto: varpropto,
	varr: varr,
	vArr: vArr,
	varrho: varrho,
	varsigma: varsigma,
	varsubsetneq: varsubsetneq,
	varsubsetneqq: varsubsetneqq,
	varsupsetneq: varsupsetneq,
	varsupsetneqq: varsupsetneqq,
	vartheta: vartheta,
	vartriangleleft: vartriangleleft,
	vartriangleright: vartriangleright,
	vBar: vBar,
	Vbar: Vbar,
	vBarv: vBarv,
	Vcy: Vcy,
	vcy: vcy,
	vdash: vdash,
	vDash: vDash,
	Vdash: Vdash,
	VDash: VDash,
	Vdashl: Vdashl,
	veebar: veebar,
	vee: vee,
	Vee: Vee,
	veeeq: veeeq,
	vellip: vellip,
	verbar: verbar,
	Verbar: Verbar,
	vert: vert,
	Vert: Vert,
	VerticalBar: VerticalBar,
	VerticalLine: VerticalLine,
	VerticalSeparator: VerticalSeparator,
	VerticalTilde: VerticalTilde,
	VeryThinSpace: VeryThinSpace,
	Vfr: Vfr,
	vfr: vfr,
	vltri: vltri,
	vnsub: vnsub,
	vnsup: vnsup,
	Vopf: Vopf,
	vopf: vopf,
	vprop: vprop,
	vrtri: vrtri,
	Vscr: Vscr,
	vscr: vscr,
	vsubnE: vsubnE,
	vsubne: vsubne,
	vsupnE: vsupnE,
	vsupne: vsupne,
	Vvdash: Vvdash,
	vzigzag: vzigzag,
	Wcirc: Wcirc,
	wcirc: wcirc,
	wedbar: wedbar,
	wedge: wedge,
	Wedge: Wedge,
	wedgeq: wedgeq,
	weierp: weierp,
	Wfr: Wfr,
	wfr: wfr,
	Wopf: Wopf,
	wopf: wopf,
	wp: wp,
	wr: wr,
	wreath: wreath,
	Wscr: Wscr,
	wscr: wscr,
	xcap: xcap,
	xcirc: xcirc,
	xcup: xcup,
	xdtri: xdtri,
	Xfr: Xfr,
	xfr: xfr,
	xharr: xharr,
	xhArr: xhArr,
	Xi: Xi,
	xi: xi,
	xlarr: xlarr,
	xlArr: xlArr,
	xmap: xmap,
	xnis: xnis,
	xodot: xodot,
	Xopf: Xopf,
	xopf: xopf,
	xoplus: xoplus,
	xotime: xotime,
	xrarr: xrarr,
	xrArr: xrArr,
	Xscr: Xscr,
	xscr: xscr,
	xsqcup: xsqcup,
	xuplus: xuplus,
	xutri: xutri,
	xvee: xvee,
	xwedge: xwedge,
	Yacute: Yacute$1,
	yacute: yacute$1,
	YAcy: YAcy,
	yacy: yacy,
	Ycirc: Ycirc,
	ycirc: ycirc,
	Ycy: Ycy,
	ycy: ycy,
	yen: yen$1,
	Yfr: Yfr,
	yfr: yfr,
	YIcy: YIcy,
	yicy: yicy,
	Yopf: Yopf,
	yopf: yopf,
	Yscr: Yscr,
	yscr: yscr,
	YUcy: YUcy,
	yucy: yucy,
	yuml: yuml$1,
	Yuml: Yuml,
	Zacute: Zacute,
	zacute: zacute,
	Zcaron: Zcaron,
	zcaron: zcaron,
	Zcy: Zcy,
	zcy: zcy,
	Zdot: Zdot,
	zdot: zdot,
	zeetrf: zeetrf,
	ZeroWidthSpace: ZeroWidthSpace,
	Zeta: Zeta,
	zeta: zeta,
	zfr: zfr,
	Zfr: Zfr,
	ZHcy: ZHcy,
	zhcy: zhcy,
	zigrarr: zigrarr,
	zopf: zopf,
	Zopf: Zopf,
	Zscr: Zscr,
	zscr: zscr,
	zwj: zwj,
	zwnj: zwnj
};

var Aacute = "??";
var aacute = "??";
var Acirc = "??";
var acirc = "??";
var acute = "??";
var AElig = "??";
var aelig = "??";
var Agrave = "??";
var agrave = "??";
var amp$1 = "&";
var AMP = "&";
var Aring = "??";
var aring = "??";
var Atilde = "??";
var atilde = "??";
var Auml = "??";
var auml = "??";
var brvbar = "??";
var Ccedil = "??";
var ccedil = "??";
var cedil = "??";
var cent = "??";
var copy = "??";
var COPY = "??";
var curren = "??";
var deg = "??";
var divide = "??";
var Eacute = "??";
var eacute = "??";
var Ecirc = "??";
var ecirc = "??";
var Egrave = "??";
var egrave = "??";
var ETH = "??";
var eth = "??";
var Euml = "??";
var euml = "??";
var frac12 = "??";
var frac14 = "??";
var frac34 = "??";
var gt$1 = ">";
var GT = ">";
var Iacute = "??";
var iacute = "??";
var Icirc = "??";
var icirc = "??";
var iexcl = "??";
var Igrave = "??";
var igrave = "??";
var iquest = "??";
var Iuml = "??";
var iuml = "??";
var laquo = "??";
var lt$1 = "<";
var LT = "<";
var macr = "??";
var micro = "??";
var middot = "??";
var nbsp = "??";
var not = "??";
var Ntilde = "??";
var ntilde = "??";
var Oacute = "??";
var oacute = "??";
var Ocirc = "??";
var ocirc = "??";
var Ograve = "??";
var ograve = "??";
var ordf = "??";
var ordm = "??";
var Oslash = "??";
var oslash = "??";
var Otilde = "??";
var otilde = "??";
var Ouml = "??";
var ouml = "??";
var para = "??";
var plusmn = "??";
var pound = "??";
var quot$1 = "\"";
var QUOT = "\"";
var raquo = "??";
var reg = "??";
var REG = "??";
var sect = "??";
var shy = "??";
var sup1 = "??";
var sup2 = "??";
var sup3 = "??";
var szlig = "??";
var THORN = "??";
var thorn = "??";
var times = "??";
var Uacute = "??";
var uacute = "??";
var Ucirc = "??";
var ucirc = "??";
var Ugrave = "??";
var ugrave = "??";
var uml = "??";
var Uuml = "??";
var uuml = "??";
var Yacute = "??";
var yacute = "??";
var yen = "??";
var yuml = "??";
var require$$1 = {
	Aacute: Aacute,
	aacute: aacute,
	Acirc: Acirc,
	acirc: acirc,
	acute: acute,
	AElig: AElig,
	aelig: aelig,
	Agrave: Agrave,
	agrave: agrave,
	amp: amp$1,
	AMP: AMP,
	Aring: Aring,
	aring: aring,
	Atilde: Atilde,
	atilde: atilde,
	Auml: Auml,
	auml: auml,
	brvbar: brvbar,
	Ccedil: Ccedil,
	ccedil: ccedil,
	cedil: cedil,
	cent: cent,
	copy: copy,
	COPY: COPY,
	curren: curren,
	deg: deg,
	divide: divide,
	Eacute: Eacute,
	eacute: eacute,
	Ecirc: Ecirc,
	ecirc: ecirc,
	Egrave: Egrave,
	egrave: egrave,
	ETH: ETH,
	eth: eth,
	Euml: Euml,
	euml: euml,
	frac12: frac12,
	frac14: frac14,
	frac34: frac34,
	gt: gt$1,
	GT: GT,
	Iacute: Iacute,
	iacute: iacute,
	Icirc: Icirc,
	icirc: icirc,
	iexcl: iexcl,
	Igrave: Igrave,
	igrave: igrave,
	iquest: iquest,
	Iuml: Iuml,
	iuml: iuml,
	laquo: laquo,
	lt: lt$1,
	LT: LT,
	macr: macr,
	micro: micro,
	middot: middot,
	nbsp: nbsp,
	not: not,
	Ntilde: Ntilde,
	ntilde: ntilde,
	Oacute: Oacute,
	oacute: oacute,
	Ocirc: Ocirc,
	ocirc: ocirc,
	Ograve: Ograve,
	ograve: ograve,
	ordf: ordf,
	ordm: ordm,
	Oslash: Oslash,
	oslash: oslash,
	Otilde: Otilde,
	otilde: otilde,
	Ouml: Ouml,
	ouml: ouml,
	para: para,
	plusmn: plusmn,
	pound: pound,
	quot: quot$1,
	QUOT: QUOT,
	raquo: raquo,
	reg: reg,
	REG: REG,
	sect: sect,
	shy: shy,
	sup1: sup1,
	sup2: sup2,
	sup3: sup3,
	szlig: szlig,
	THORN: THORN,
	thorn: thorn,
	times: times,
	Uacute: Uacute,
	uacute: uacute,
	Ucirc: Ucirc,
	ucirc: ucirc,
	Ugrave: Ugrave,
	ugrave: ugrave,
	uml: uml,
	Uuml: Uuml,
	uuml: uuml,
	Yacute: Yacute,
	yacute: yacute,
	yen: yen,
	yuml: yuml
};

var amp = "&";
var apos = "'";
var gt = ">";
var lt = "<";
var quot = "\"";
var require$$0$1 = {
	amp: amp,
	apos: apos,
	gt: gt,
	lt: lt,
	quot: quot
};

var require$$0 = {
	"0": 65533,
	"128": 8364,
	"130": 8218,
	"131": 402,
	"132": 8222,
	"133": 8230,
	"134": 8224,
	"135": 8225,
	"136": 710,
	"137": 8240,
	"138": 352,
	"139": 8249,
	"140": 338,
	"142": 381,
	"145": 8216,
	"146": 8217,
	"147": 8220,
	"148": 8221,
	"149": 8226,
	"150": 8211,
	"151": 8212,
	"152": 732,
	"153": 8482,
	"154": 353,
	"155": 8250,
	"156": 339,
	"158": 382,
	"159": 376
};

var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

var decode_json_1 = __importDefault(require$$0);
// Adapted from https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
var fromCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.fromCodePoint ||
    function (codePoint) {
        var output = "";
        if (codePoint > 0xffff) {
            codePoint -= 0x10000;
            output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
            codePoint = 0xdc00 | (codePoint & 0x3ff);
        }
        output += String.fromCharCode(codePoint);
        return output;
    };
function decodeCodePoint(codePoint) {
    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
        return "\uFFFD";
    }
    if (codePoint in decode_json_1.default) {
        codePoint = decode_json_1.default[codePoint];
    }
    return fromCodePoint(codePoint);
}
var _default = decodeCodePoint;

var decode_codepoint = /*#__PURE__*/Object.defineProperty({
	default: _default
}, '__esModule', {value: true});

var require$$3 = decode_codepoint;

var decode = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeHTML = exports.decodeHTMLStrict = exports.decodeXML = void 0;
var entities_json_1 = __importDefault(require$$1$1);
var legacy_json_1 = __importDefault(require$$1);
var xml_json_1 = __importDefault(require$$0$1);
var decode_codepoint_1 = __importDefault(require$$3);
var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
exports.decodeXML = getStrictDecoder(xml_json_1.default);
exports.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
function getStrictDecoder(map) {
    var replace = getReplacer(map);
    return function (str) { return String(str).replace(strictEntityRe, replace); };
}
var sorter = function (a, b) { return (a < b ? 1 : -1); };
exports.decodeHTML = (function () {
    var legacy = Object.keys(legacy_json_1.default).sort(sorter);
    var keys = Object.keys(entities_json_1.default).sort(sorter);
    for (var i = 0, j = 0; i < keys.length; i++) {
        if (legacy[j] === keys[i]) {
            keys[i] += ";?";
            j++;
        }
        else {
            keys[i] += ";";
        }
    }
    var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
    var replace = getReplacer(entities_json_1.default);
    function replacer(str) {
        if (str.substr(-1) !== ";")
            str += ";";
        return replace(str);
    }
    // TODO consider creating a merged map
    return function (str) { return String(str).replace(re, replacer); };
})();
function getReplacer(map) {
    return function replace(str) {
        if (str.charAt(1) === "#") {
            var secondChar = str.charAt(2);
            if (secondChar === "X" || secondChar === "x") {
                return decode_codepoint_1.default(parseInt(str.substr(3), 16));
            }
            return decode_codepoint_1.default(parseInt(str.substr(2), 10));
        }
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        return map[str.slice(1, -1)] || str;
    };
}
});

var encode = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = void 0;
var xml_json_1 = __importDefault(require$$0$1);
var inverseXML = getInverseObj(xml_json_1.default);
var xmlReplacer = getInverseReplacer(inverseXML);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using XML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
exports.encodeXML = getASCIIEncoder(inverseXML);
var entities_json_1 = __importDefault(require$$1$1);
var inverseHTML = getInverseObj(entities_json_1.default);
var htmlReplacer = getInverseReplacer(inverseHTML);
/**
 * Encodes all entities and non-ASCII characters in the input.
 *
 * This includes characters that are valid ASCII characters in HTML documents.
 * For example `#` will be encoded as `&num;`. To get a more compact output,
 * consider using the `encodeNonAsciiHTML` function.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
exports.encodeHTML = getInverse(inverseHTML, htmlReplacer);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in HTML
 * documents using HTML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
exports.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
function getInverseObj(obj) {
    return Object.keys(obj)
        .sort()
        .reduce(function (inverse, name) {
        inverse[obj[name]] = "&" + name + ";";
        return inverse;
    }, {});
}
function getInverseReplacer(inverse) {
    var single = [];
    var multiple = [];
    for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
        var k = _a[_i];
        if (k.length === 1) {
            // Add value to single array
            single.push("\\" + k);
        }
        else {
            // Add value to multiple array
            multiple.push(k);
        }
    }
    // Add ranges to single characters.
    single.sort();
    for (var start = 0; start < single.length - 1; start++) {
        // Find the end of a run of characters
        var end = start;
        while (end < single.length - 1 &&
            single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) {
            end += 1;
        }
        var count = 1 + end - start;
        // We want to replace at least three characters
        if (count < 3)
            continue;
        single.splice(start, count, single[start] + "-" + single[end]);
    }
    multiple.unshift("[" + single.join("") + "]");
    return new RegExp(multiple.join("|"), "g");
}
// /[^\0-\x7F]/gu
var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
var getCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.prototype.codePointAt != null
    ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        function (str) { return str.codePointAt(0); }
    : // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        function (c) {
            return (c.charCodeAt(0) - 0xd800) * 0x400 +
                c.charCodeAt(1) -
                0xdc00 +
                0x10000;
        };
function singleCharReplacer(c) {
    return "&#x" + (c.length > 1 ? getCodePoint(c) : c.charCodeAt(0))
        .toString(16)
        .toUpperCase() + ";";
}
function getInverse(inverse, re) {
    return function (data) {
        return data
            .replace(re, function (name) { return inverse[name]; })
            .replace(reNonASCII, singleCharReplacer);
    };
}
var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using numeric hexadecimal reference (eg. `&#xfc;`).
 *
 * Have a look at `escapeUTF8` if you want a more concise output at the expense
 * of reduced transportability.
 *
 * @param data String to escape.
 */
function escape(data) {
    return data.replace(reEscapeChars, singleCharReplacer);
}
exports.escape = escape;
/**
 * Encodes all characters not valid in XML documents using numeric hexadecimal
 * reference (eg. `&#xfc;`).
 *
 * Note that the output will be character-set dependent.
 *
 * @param data String to escape.
 */
function escapeUTF8(data) {
    return data.replace(xmlReplacer, singleCharReplacer);
}
exports.escapeUTF8 = escapeUTF8;
function getASCIIEncoder(obj) {
    return function (data) {
        return data.replace(reEscapeChars, function (c) { return obj[c] || singleCharReplacer(c); });
    };
}
});

var decode_1 = decode;

var encode_1 = encode;

var lib = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;


/**
 * Decodes a string with entities.
 *
 * @param data String to decode.
 * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `decodeXML` or `decodeHTML` directly.
 */
function decode(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
}
exports.decode = decode;
/**
 * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
 *
 * @param data String to decode.
 * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `decodeHTMLStrict` or `decodeXML` directly.
 */
function decodeStrict(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
}
exports.decodeStrict = decodeStrict;
/**
 * Encodes a string with entities.
 *
 * @param data String to encode.
 * @param level Optional level to encode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `encodeHTML`, `encodeXML` or `encodeNonAsciiHTML` directly.
 */
function encode(data, level) {
    return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
}
exports.encode = encode;
var encode_2 = encode_1;
Object.defineProperty(exports, "encodeXML", { enumerable: true, get: function () { return encode_2.encodeXML; } });
Object.defineProperty(exports, "encodeHTML", { enumerable: true, get: function () { return encode_2.encodeHTML; } });
Object.defineProperty(exports, "encodeNonAsciiHTML", { enumerable: true, get: function () { return encode_2.encodeNonAsciiHTML; } });
Object.defineProperty(exports, "escape", { enumerable: true, get: function () { return encode_2.escape; } });
Object.defineProperty(exports, "escapeUTF8", { enumerable: true, get: function () { return encode_2.escapeUTF8; } });
// Legacy aliases (deprecated)
Object.defineProperty(exports, "encodeHTML4", { enumerable: true, get: function () { return encode_2.encodeHTML; } });
Object.defineProperty(exports, "encodeHTML5", { enumerable: true, get: function () { return encode_2.encodeHTML; } });
var decode_2 = decode_1;
Object.defineProperty(exports, "decodeXML", { enumerable: true, get: function () { return decode_2.decodeXML; } });
Object.defineProperty(exports, "decodeHTML", { enumerable: true, get: function () { return decode_2.decodeHTML; } });
Object.defineProperty(exports, "decodeHTMLStrict", { enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } });
// Legacy aliases (deprecated)
Object.defineProperty(exports, "decodeHTML4", { enumerable: true, get: function () { return decode_2.decodeHTML; } });
Object.defineProperty(exports, "decodeHTML5", { enumerable: true, get: function () { return decode_2.decodeHTML; } });
Object.defineProperty(exports, "decodeHTML4Strict", { enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } });
Object.defineProperty(exports, "decodeHTML5Strict", { enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } });
Object.defineProperty(exports, "decodeXMLStrict", { enumerable: true, get: function () { return decode_2.decodeXML; } });
});

var util = createCommonjsModule(function (module, exports) {

const nameStartChar = ':A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
const nameChar = nameStartChar + '\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
const nameRegexp = '[' + nameStartChar + '][' + nameChar + ']*';
const regexName = new RegExp('^' + nameRegexp + '$');

const getAllMatches = function(string, regex) {
  const matches = [];
  let match = regex.exec(string);
  while (match) {
    const allmatches = [];
    const len = match.length;
    for (let index = 0; index < len; index++) {
      allmatches.push(match[index]);
    }
    matches.push(allmatches);
    match = regex.exec(string);
  }
  return matches;
};

const isName = function(string) {
  const match = regexName.exec(string);
  return !(match === null || typeof match === 'undefined');
};

exports.isExist = function(v) {
  return typeof v !== 'undefined';
};

exports.isEmptyObject = function(obj) {
  return Object.keys(obj).length === 0;
};

/**
 * Copy all the properties of a into b.
 * @param {*} target
 * @param {*} a
 */
exports.merge = function(target, a, arrayMode) {
  if (a) {
    const keys = Object.keys(a); // will return an array of own properties
    const len = keys.length; //don't make it inline
    for (let i = 0; i < len; i++) {
      if (arrayMode === 'strict') {
        target[keys[i]] = [ a[keys[i]] ];
      } else {
        target[keys[i]] = a[keys[i]];
      }
    }
  }
};
/* exports.merge =function (b,a){
  return Object.assign(b,a);
} */

exports.getValue = function(v) {
  if (exports.isExist(v)) {
    return v;
  } else {
    return '';
  }
};

// const fakeCall = function(a) {return a;};
// const fakeCallNoReturn = function() {};

exports.buildOptions = function(options, defaultOptions, props) {
  var newOptions = {};
  if (!options) {
    return defaultOptions; //if there are not options
  }

  for (let i = 0; i < props.length; i++) {
    if (options[props[i]] !== undefined) {
      newOptions[props[i]] = options[props[i]];
    } else {
      newOptions[props[i]] = defaultOptions[props[i]];
    }
  }
  return newOptions;
};

/**
 * Check if a tag name should be treated as array
 *
 * @param tagName the node tagname
 * @param arrayMode the array mode option
 * @param parentTagName the parent tag name
 * @returns {boolean} true if node should be parsed as array
 */
exports.isTagNameInArrayMode = function (tagName, arrayMode, parentTagName) {
  if (arrayMode === false) {
    return false;
  } else if (arrayMode instanceof RegExp) {
    return arrayMode.test(tagName);
  } else if (typeof arrayMode === 'function') {
    return !!arrayMode(tagName, parentTagName);
  }

  return arrayMode === "strict";
};

exports.isName = isName;
exports.getAllMatches = getAllMatches;
exports.nameRegexp = nameRegexp;
});

const convertToJson = function(node, options, parentTagName) {
  const jObj = {};

  // when no child node or attr is present
  if ((!node.child || util.isEmptyObject(node.child)) && (!node.attrsMap || util.isEmptyObject(node.attrsMap))) {
    return util.isExist(node.val) ? node.val : '';
  }

  // otherwise create a textnode if node has some text
  if (util.isExist(node.val) && !(typeof node.val === 'string' && (node.val === '' || node.val === options.cdataPositionChar))) {
    const asArray = util.isTagNameInArrayMode(node.tagname, options.arrayMode, parentTagName);
    jObj[options.textNodeName] = asArray ? [node.val] : node.val;
  }

  util.merge(jObj, node.attrsMap, options.arrayMode);

  const keys = Object.keys(node.child);
  for (let index = 0; index < keys.length; index++) {
    const tagName = keys[index];
    if (node.child[tagName] && node.child[tagName].length > 1) {
      jObj[tagName] = [];
      for (let tag in node.child[tagName]) {
        if (node.child[tagName].hasOwnProperty(tag)) {
          jObj[tagName].push(convertToJson(node.child[tagName][tag], options, tagName));
        }
      }
    } else {
      const result = convertToJson(node.child[tagName][0], options, tagName);
      const asArray = (options.arrayMode === true && typeof result === 'object') || util.isTagNameInArrayMode(tagName, options.arrayMode, parentTagName);
      jObj[tagName] = asArray ? [result] : result;
    }
  }

  //add value
  return jObj;
};

var convertToJson_1 = convertToJson;

var node2json = {
	convertToJson: convertToJson_1
};

var xmlNode = function(tagname, parent, val) {
  this.tagname = tagname;
  this.parent = parent;
  this.child = {}; //child tags
  this.attrsMap = {}; //attributes map
  this.val = val; //text only
  this.addChild = function(child) {
    if (Array.isArray(this.child[child.tagname])) {
      //already presents
      this.child[child.tagname].push(child);
    } else {
      this.child[child.tagname] = [child];
    }
  };
};

const buildOptions$3 = util.buildOptions;

'<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)'
  .replace(/NAME/g, util.nameRegexp);

//const tagsRegx = new RegExp("<(\\/?[\\w:\\-\._]+)([^>]*)>(\\s*"+cdataRegx+")*([^<]+)?","g");
//const tagsRegx = new RegExp("<(\\/?)((\\w*:)?([\\w:\\-\._]+))([^>]*)>([^<]*)("+cdataRegx+"([^<]*))*([^<]+)?","g");

//polyfill
if (!Number.parseInt && window.parseInt) {
  Number.parseInt = window.parseInt;
}
if (!Number.parseFloat && window.parseFloat) {
  Number.parseFloat = window.parseFloat;
}

const defaultOptions$2 = {
  attributeNamePrefix: '@_',
  attrNodeName: false,
  textNodeName: '#text',
  ignoreAttributes: true,
  ignoreNameSpace: false,
  allowBooleanAttributes: false, //a tag can have attributes without any value
  //ignoreRootElement : false,
  parseNodeValue: true,
  parseAttributeValue: false,
  arrayMode: false,
  trimValues: true, //Trim string values of tag and attributes
  cdataTagName: false,
  cdataPositionChar: '\\c',
  tagValueProcessor: function(a, tagName) {
    return a;
  },
  attrValueProcessor: function(a, attrName) {
    return a;
  },
  stopNodes: []
  //decodeStrict: false,
};

var defaultOptions_1 = defaultOptions$2;

const props$2 = [
  'attributeNamePrefix',
  'attrNodeName',
  'textNodeName',
  'ignoreAttributes',
  'ignoreNameSpace',
  'allowBooleanAttributes',
  'parseNodeValue',
  'parseAttributeValue',
  'arrayMode',
  'trimValues',
  'cdataTagName',
  'cdataPositionChar',
  'tagValueProcessor',
  'attrValueProcessor',
  'parseTrueNumberOnly',
  'stopNodes'
];
var props_1 = props$2;

/**
 * Trim -> valueProcessor -> parse value
 * @param {string} tagName
 * @param {string} val
 * @param {object} options
 */
function processTagValue(tagName, val, options) {
  if (val) {
    if (options.trimValues) {
      val = val.trim();
    }
    val = options.tagValueProcessor(val, tagName);
    val = parseValue(val, options.parseNodeValue, options.parseTrueNumberOnly);
  }

  return val;
}

function resolveNameSpace(tagname, options) {
  if (options.ignoreNameSpace) {
    const tags = tagname.split(':');
    const prefix = tagname.charAt(0) === '/' ? '/' : '';
    if (tags[0] === 'xmlns') {
      return '';
    }
    if (tags.length === 2) {
      tagname = prefix + tags[1];
    }
  }
  return tagname;
}

function parseValue(val, shouldParse, parseTrueNumberOnly) {
  if (shouldParse && typeof val === 'string') {
    let parsed;
    if (val.trim() === '' || isNaN(val)) {
      parsed = val === 'true' ? true : val === 'false' ? false : val;
    } else {
      if (val.indexOf('0x') !== -1) {
        //support hexa decimal
        parsed = Number.parseInt(val, 16);
      } else if (val.indexOf('.') !== -1) {
        parsed = Number.parseFloat(val);
        val = val.replace(/\.?0+$/, "");
      } else {
        parsed = Number.parseInt(val, 10);
      }
      if (parseTrueNumberOnly) {
        parsed = String(parsed) === val ? parsed : val;
      }
    }
    return parsed;
  } else {
    if (util.isExist(val)) {
      return val;
    } else {
      return '';
    }
  }
}

//TODO: change regex to capture NS
//const attrsRegx = new RegExp("([\\w\\-\\.\\:]+)\\s*=\\s*(['\"])((.|\n)*?)\\2","gm");
const attrsRegx = new RegExp('([^\\s=]+)\\s*(=\\s*([\'"])(.*?)\\3)?', 'g');

function buildAttributesMap(attrStr, options) {
  if (!options.ignoreAttributes && typeof attrStr === 'string') {
    attrStr = attrStr.replace(/\r?\n/g, ' ');
    //attrStr = attrStr || attrStr.trim();

    const matches = util.getAllMatches(attrStr, attrsRegx);
    const len = matches.length; //don't make it inline
    const attrs = {};
    for (let i = 0; i < len; i++) {
      const attrName = resolveNameSpace(matches[i][1], options);
      if (attrName.length) {
        if (matches[i][4] !== undefined) {
          if (options.trimValues) {
            matches[i][4] = matches[i][4].trim();
          }
          matches[i][4] = options.attrValueProcessor(matches[i][4], attrName);
          attrs[options.attributeNamePrefix + attrName] = parseValue(
            matches[i][4],
            options.parseAttributeValue,
            options.parseTrueNumberOnly
          );
        } else if (options.allowBooleanAttributes) {
          attrs[options.attributeNamePrefix + attrName] = true;
        }
      }
    }
    if (!Object.keys(attrs).length) {
      return;
    }
    if (options.attrNodeName) {
      const attrCollection = {};
      attrCollection[options.attrNodeName] = attrs;
      return attrCollection;
    }
    return attrs;
  }
}

const getTraversalObj = function(xmlData, options) {
  xmlData = xmlData.replace(/\r\n?/g, "\n");
  options = buildOptions$3(options, defaultOptions$2, props$2);
  const xmlObj = new xmlNode('!xml');
  let currentNode = xmlObj;
  let textData = "";

//function match(xmlData){
  for(let i=0; i< xmlData.length; i++){
    const ch = xmlData[i];
    if(ch === '<'){
      if( xmlData[i+1] === '/') {//Closing Tag
        const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.");
        let tagName = xmlData.substring(i+2,closeIndex).trim();

        if(options.ignoreNameSpace){
          const colonIndex = tagName.indexOf(":");
          if(colonIndex !== -1){
            tagName = tagName.substr(colonIndex+1);
          }
        }

        /* if (currentNode.parent) {
          currentNode.parent.val = util.getValue(currentNode.parent.val) + '' + processTagValue2(tagName, textData , options);
        } */
        if(currentNode){
          if(currentNode.val){
            currentNode.val = util.getValue(currentNode.val) + '' + processTagValue(tagName, textData , options);
          }else {
            currentNode.val = processTagValue(tagName, textData , options);
          }
        }

        if (options.stopNodes.length && options.stopNodes.includes(currentNode.tagname)) {
          currentNode.child = [];
          if (currentNode.attrsMap == undefined) { currentNode.attrsMap = {};}
          currentNode.val = xmlData.substr(currentNode.startIndex + 1, i - currentNode.startIndex - 1);
        }
        currentNode = currentNode.parent;
        textData = "";
        i = closeIndex;
      } else if( xmlData[i+1] === '?') {
        i = findClosingIndex(xmlData, "?>", i, "Pi Tag is not closed.");
      } else if(xmlData.substr(i + 1, 3) === '!--') {
        i = findClosingIndex(xmlData, "-->", i, "Comment is not closed.");
      } else if( xmlData.substr(i + 1, 2) === '!D') {
        const closeIndex = findClosingIndex(xmlData, ">", i, "DOCTYPE is not closed.");
        const tagExp = xmlData.substring(i, closeIndex);
        if(tagExp.indexOf("[") >= 0){
          i = xmlData.indexOf("]>", i) + 1;
        }else {
          i = closeIndex;
        }
      }else if(xmlData.substr(i + 1, 2) === '![') {
        const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
        const tagExp = xmlData.substring(i + 9,closeIndex);

        //considerations
        //1. CDATA will always have parent node
        //2. A tag with CDATA is not a leaf node so it's value would be string type.
        if(textData){
          currentNode.val = util.getValue(currentNode.val) + '' + processTagValue(currentNode.tagname, textData , options);
          textData = "";
        }

        if (options.cdataTagName) {
          //add cdata node
          const childNode = new xmlNode(options.cdataTagName, currentNode, tagExp);
          currentNode.addChild(childNode);
          //for backtracking
          currentNode.val = util.getValue(currentNode.val) + options.cdataPositionChar;
          //add rest value to parent node
          if (tagExp) {
            childNode.val = tagExp;
          }
        } else {
          currentNode.val = (currentNode.val || '') + (tagExp || '');
        }

        i = closeIndex + 2;
      }else {//Opening tag
        const result = closingIndexForOpeningTag(xmlData, i+1);
        let tagExp = result.data;
        const closeIndex = result.index;
        const separatorIndex = tagExp.indexOf(" ");
        let tagName = tagExp;
        let shouldBuildAttributesMap = true;
        if(separatorIndex !== -1){
          tagName = tagExp.substr(0, separatorIndex).replace(/\s\s*$/, '');
          tagExp = tagExp.substr(separatorIndex + 1);
        }

        if(options.ignoreNameSpace){
          const colonIndex = tagName.indexOf(":");
          if(colonIndex !== -1){
            tagName = tagName.substr(colonIndex+1);
            shouldBuildAttributesMap = tagName !== result.data.substr(colonIndex + 1);
          }
        }

        //save text to parent node
        if (currentNode && textData) {
          if(currentNode.tagname !== '!xml'){
            currentNode.val = util.getValue(currentNode.val) + '' + processTagValue( currentNode.tagname, textData, options);
          }
        }

        if(tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1){//selfClosing tag

          if(tagName[tagName.length - 1] === "/"){ //remove trailing '/'
            tagName = tagName.substr(0, tagName.length - 1);
            tagExp = tagName;
          }else {
            tagExp = tagExp.substr(0, tagExp.length - 1);
          }

          const childNode = new xmlNode(tagName, currentNode, '');
          if(tagName !== tagExp){
            childNode.attrsMap = buildAttributesMap(tagExp, options);
          }
          currentNode.addChild(childNode);
        }else {//opening tag

          const childNode = new xmlNode( tagName, currentNode );
          if (options.stopNodes.length && options.stopNodes.includes(childNode.tagname)) {
            childNode.startIndex=closeIndex;
          }
          if(tagName !== tagExp && shouldBuildAttributesMap){
            childNode.attrsMap = buildAttributesMap(tagExp, options);
          }
          currentNode.addChild(childNode);
          currentNode = childNode;
        }
        textData = "";
        i = closeIndex;
      }
    }else {
      textData += xmlData[i];
    }
  }
  return xmlObj;
};

function closingIndexForOpeningTag(data, i){
  let attrBoundary;
  let tagExp = "";
  for (let index = i; index < data.length; index++) {
    let ch = data[index];
    if (attrBoundary) {
        if (ch === attrBoundary) attrBoundary = "";//reset
    } else if (ch === '"' || ch === "'") {
        attrBoundary = ch;
    } else if (ch === '>') {
        return {
          data: tagExp,
          index: index
        }
    } else if (ch === '\t') {
      ch = " ";
    }
    tagExp += ch;
  }
}

function findClosingIndex(xmlData, str, i, errMsg){
  const closingIndex = xmlData.indexOf(str, i);
  if(closingIndex === -1){
    throw new Error(errMsg)
  }else {
    return closingIndex + str.length - 1;
  }
}

var getTraversalObj_1 = getTraversalObj;

var xmlstr2xmlnode = {
	defaultOptions: defaultOptions_1,
	props: props_1,
	getTraversalObj: getTraversalObj_1
};

const defaultOptions$1 = {
  allowBooleanAttributes: false, //A tag can have attributes without any value
};

const props$1 = ['allowBooleanAttributes'];

//const tagsPattern = new RegExp("<\\/?([\\w:\\-_\.]+)\\s*\/?>","g");
var validate$1 = function (xmlData, options) {
  options = util.buildOptions(options, defaultOptions$1, props$1);

  //xmlData = xmlData.replace(/(\r\n|\n|\r)/gm,"");//make it single line
  //xmlData = xmlData.replace(/(^\s*<\?xml.*?\?>)/g,"");//Remove XML starting tag
  //xmlData = xmlData.replace(/(<!DOCTYPE[\s\w\"\.\/\-\:]+(\[.*\])*\s*>)/g,"");//Remove DOCTYPE
  const tags = [];
  let tagFound = false;

  //indicates that the root tag has been closed (aka. depth 0 has been reached)
  let reachedRoot = false;

  if (xmlData[0] === '\ufeff') {
    // check for byte order mark (BOM)
    xmlData = xmlData.substr(1);
  }

  for (let i = 0; i < xmlData.length; i++) {

    if (xmlData[i] === '<' && xmlData[i+1] === '?') {
      i+=2;
      i = readPI(xmlData,i);
      if (i.err) return i;
    }else if (xmlData[i] === '<') {
      //starting of tag
      //read until you reach to '>' avoiding any '>' in attribute value

      i++;
      
      if (xmlData[i] === '!') {
        i = readCommentAndCDATA(xmlData, i);
        continue;
      } else {
        let closingTag = false;
        if (xmlData[i] === '/') {
          //closing tag
          closingTag = true;
          i++;
        }
        //read tagname
        let tagName = '';
        for (; i < xmlData.length &&
          xmlData[i] !== '>' &&
          xmlData[i] !== ' ' &&
          xmlData[i] !== '\t' &&
          xmlData[i] !== '\n' &&
          xmlData[i] !== '\r'; i++
        ) {
          tagName += xmlData[i];
        }
        tagName = tagName.trim();
        //console.log(tagName);

        if (tagName[tagName.length - 1] === '/') {
          //self closing tag without attributes
          tagName = tagName.substring(0, tagName.length - 1);
          //continue;
          i--;
        }
        if (!validateTagName(tagName)) {
          let msg;
          if (tagName.trim().length === 0) {
            msg = "There is an unnecessary space between tag name and backward slash '</ ..'.";
          } else {
            msg = "Tag '"+tagName+"' is an invalid name.";
          }
          return getErrorObject('InvalidTag', msg, getLineNumberForPosition(xmlData, i));
        }

        const result = readAttributeStr(xmlData, i);
        if (result === false) {
          return getErrorObject('InvalidAttr', "Attributes for '"+tagName+"' have open quote.", getLineNumberForPosition(xmlData, i));
        }
        let attrStr = result.value;
        i = result.index;

        if (attrStr[attrStr.length - 1] === '/') {
          //self closing tag
          attrStr = attrStr.substring(0, attrStr.length - 1);
          const isValid = validateAttributeString(attrStr, options);
          if (isValid === true) {
            tagFound = true;
            //continue; //text may presents after self closing tag
          } else {
            //the result from the nested function returns the position of the error within the attribute
            //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
            //this gives us the absolute index in the entire xml, which we can use to find the line at last
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
          }
        } else if (closingTag) {
          if (!result.tagClosed) {
            return getErrorObject('InvalidTag', "Closing tag '"+tagName+"' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
          } else if (attrStr.trim().length > 0) {
            return getErrorObject('InvalidTag', "Closing tag '"+tagName+"' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, i));
          } else {
            const otg = tags.pop();
            if (tagName !== otg) {
              return getErrorObject('InvalidTag', "Closing tag '"+otg+"' is expected inplace of '"+tagName+"'.", getLineNumberForPosition(xmlData, i));
            }

            //when there are no more tags, we reached the root level.
            if (tags.length == 0) {
              reachedRoot = true;
            }
          }
        } else {
          const isValid = validateAttributeString(attrStr, options);
          if (isValid !== true) {
            //the result from the nested function returns the position of the error within the attribute
            //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
            //this gives us the absolute index in the entire xml, which we can use to find the line at last
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
          }

          //if the root level has been reached before ...
          if (reachedRoot === true) {
            return getErrorObject('InvalidXml', 'Multiple possible root nodes found.', getLineNumberForPosition(xmlData, i));
          } else {
            tags.push(tagName);
          }
          tagFound = true;
        }

        //skip tag text value
        //It may include comments and CDATA value
        for (i++; i < xmlData.length; i++) {
          if (xmlData[i] === '<') {
            if (xmlData[i + 1] === '!') {
              //comment or CADATA
              i++;
              i = readCommentAndCDATA(xmlData, i);
              continue;
            } else if (xmlData[i+1] === '?') {
              i = readPI(xmlData, ++i);
              if (i.err) return i;
            } else {
              break;
            }
          } else if (xmlData[i] === '&') {
            const afterAmp = validateAmpersand(xmlData, i);
            if (afterAmp == -1)
              return getErrorObject('InvalidChar', "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
            i = afterAmp;
          }
        } //end of reading tag text value
        if (xmlData[i] === '<') {
          i--;
        }
      }
    } else {
      if (xmlData[i] === ' ' || xmlData[i] === '\t' || xmlData[i] === '\n' || xmlData[i] === '\r') {
        continue;
      }
      return getErrorObject('InvalidChar', "char '"+xmlData[i]+"' is not expected.", getLineNumberForPosition(xmlData, i));
    }
  }

  if (!tagFound) {
    return getErrorObject('InvalidXml', 'Start tag expected.', 1);
  } else if (tags.length > 0) {
    return getErrorObject('InvalidXml', "Invalid '"+JSON.stringify(tags, null, 4).replace(/\r?\n/g, '')+"' found.", 1);
  }

  return true;
};

/**
 * Read Processing insstructions and skip
 * @param {*} xmlData
 * @param {*} i
 */
function readPI(xmlData, i) {
  var start = i;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] == '?' || xmlData[i] == ' ') {
      //tagname
      var tagname = xmlData.substr(start, i - start);
      if (i > 5 && tagname === 'xml') {
        return getErrorObject('InvalidXml', 'XML declaration allowed only at the start of the document.', getLineNumberForPosition(xmlData, i));
      } else if (xmlData[i] == '?' && xmlData[i + 1] == '>') {
        //check if valid attribut string
        i++;
        break;
      } else {
        continue;
      }
    }
  }
  return i;
}

function readCommentAndCDATA(xmlData, i) {
  if (xmlData.length > i + 5 && xmlData[i + 1] === '-' && xmlData[i + 2] === '-') {
    //comment
    for (i += 3; i < xmlData.length; i++) {
      if (xmlData[i] === '-' && xmlData[i + 1] === '-' && xmlData[i + 2] === '>') {
        i += 2;
        break;
      }
    }
  } else if (
    xmlData.length > i + 8 &&
    xmlData[i + 1] === 'D' &&
    xmlData[i + 2] === 'O' &&
    xmlData[i + 3] === 'C' &&
    xmlData[i + 4] === 'T' &&
    xmlData[i + 5] === 'Y' &&
    xmlData[i + 6] === 'P' &&
    xmlData[i + 7] === 'E'
  ) {
    let angleBracketsCount = 1;
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === '<') {
        angleBracketsCount++;
      } else if (xmlData[i] === '>') {
        angleBracketsCount--;
        if (angleBracketsCount === 0) {
          break;
        }
      }
    }
  } else if (
    xmlData.length > i + 9 &&
    xmlData[i + 1] === '[' &&
    xmlData[i + 2] === 'C' &&
    xmlData[i + 3] === 'D' &&
    xmlData[i + 4] === 'A' &&
    xmlData[i + 5] === 'T' &&
    xmlData[i + 6] === 'A' &&
    xmlData[i + 7] === '['
  ) {
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === ']' && xmlData[i + 1] === ']' && xmlData[i + 2] === '>') {
        i += 2;
        break;
      }
    }
  }

  return i;
}

var doubleQuote = '"';
var singleQuote = "'";

/**
 * Keep reading xmlData until '<' is found outside the attribute value.
 * @param {string} xmlData
 * @param {number} i
 */
function readAttributeStr(xmlData, i) {
  let attrStr = '';
  let startChar = '';
  let tagClosed = false;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
      if (startChar === '') {
        startChar = xmlData[i];
      } else if (startChar !== xmlData[i]) {
        //if vaue is enclosed with double quote then single quotes are allowed inside the value and vice versa
        continue;
      } else {
        startChar = '';
      }
    } else if (xmlData[i] === '>') {
      if (startChar === '') {
        tagClosed = true;
        break;
      }
    }
    attrStr += xmlData[i];
  }
  if (startChar !== '') {
    return false;
  }

  return {
    value: attrStr,
    index: i,
    tagClosed: tagClosed
  };
}

/**
 * Select all the attributes whether valid or invalid.
 */
const validAttrStrRegxp = new RegExp('(\\s*)([^\\s=]+)(\\s*=)?(\\s*([\'"])(([\\s\\S])*?)\\5)?', 'g');

//attr, ="sd", a="amit's", a="sd"b="saf", ab  cd=""

function validateAttributeString(attrStr, options) {
  //console.log("start:"+attrStr+":end");

  //if(attrStr.trim().length === 0) return true; //empty string

  const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
  const attrNames = {};

  for (let i = 0; i < matches.length; i++) {
    if (matches[i][1].length === 0) {
      //nospace before attribute name: a="sd"b="saf"
      return getErrorObject('InvalidAttr', "Attribute '"+matches[i][2]+"' has no space in starting.", getPositionFromMatch(attrStr, matches[i][0]))
    } else if (matches[i][3] === undefined && !options.allowBooleanAttributes) {
      //independent attribute: ab
      return getErrorObject('InvalidAttr', "boolean attribute '"+matches[i][2]+"' is not allowed.", getPositionFromMatch(attrStr, matches[i][0]));
    }
    /* else if(matches[i][6] === undefined){//attribute without value: ab=
                    return { err: { code:"InvalidAttr",msg:"attribute " + matches[i][2] + " has no value assigned."}};
                } */
    const attrName = matches[i][2];
    if (!validateAttrName(attrName)) {
      return getErrorObject('InvalidAttr', "Attribute '"+attrName+"' is an invalid name.", getPositionFromMatch(attrStr, matches[i][0]));
    }
    if (!attrNames.hasOwnProperty(attrName)) {
      //check for duplicate attribute.
      attrNames[attrName] = 1;
    } else {
      return getErrorObject('InvalidAttr', "Attribute '"+attrName+"' is repeated.", getPositionFromMatch(attrStr, matches[i][0]));
    }
  }

  return true;
}

function validateNumberAmpersand(xmlData, i) {
  let re = /\d/;
  if (xmlData[i] === 'x') {
    i++;
    re = /[\da-fA-F]/;
  }
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === ';')
      return i;
    if (!xmlData[i].match(re))
      break;
  }
  return -1;
}

function validateAmpersand(xmlData, i) {
  // https://www.w3.org/TR/xml/#dt-charref
  i++;
  if (xmlData[i] === ';')
    return -1;
  if (xmlData[i] === '#') {
    i++;
    return validateNumberAmpersand(xmlData, i);
  }
  let count = 0;
  for (; i < xmlData.length; i++, count++) {
    if (xmlData[i].match(/\w/) && count < 20)
      continue;
    if (xmlData[i] === ';')
      break;
    return -1;
  }
  return i;
}

function getErrorObject(code, message, lineNumber) {
  return {
    err: {
      code: code,
      msg: message,
      line: lineNumber,
    },
  };
}

function validateAttrName(attrName) {
  return util.isName(attrName);
}

// const startsWithXML = /^xml/i;

function validateTagName(tagname) {
  return util.isName(tagname) /* && !tagname.match(startsWithXML) */;
}

//this function returns the line number for the character at the given index
function getLineNumberForPosition(xmlData, index) {
  var lines = xmlData.substring(0, index).split(/\r?\n/);
  return lines.length;
}

//this function returns the position of the last character of match within attrStr
function getPositionFromMatch(attrStr, match) {
  return attrStr.indexOf(match) + match.length;
}

var validator = {
	validate: validate$1
};

const char = function(a) {
  return String.fromCharCode(a);
};

const chars = {
  nilChar: char(176),
  missingChar: char(201),
  nilPremitive: char(175),
  missingPremitive: char(200),

  emptyChar: char(178),
  emptyValue: char(177), //empty Premitive

  boundryChar: char(179),

  objStart: char(198),
  arrStart: char(204),
  arrayEnd: char(185),
};

const charsArr = [
  chars.nilChar,
  chars.nilPremitive,
  chars.missingChar,
  chars.missingPremitive,
  chars.boundryChar,
  chars.emptyChar,
  chars.emptyValue,
  chars.arrayEnd,
  chars.objStart,
  chars.arrStart,
];

const _e = function(node, e_schema, options) {
  if (typeof e_schema === 'string') {
    //premitive
    if (node && node[0] && node[0].val !== undefined) {
      return getValue(node[0].val);
    } else {
      return getValue(node);
    }
  } else {
    const hasValidData = hasData(node);
    if (hasValidData === true) {
      let str = '';
      if (Array.isArray(e_schema)) {
        //attributes can't be repeated. hence check in children tags only
        str += chars.arrStart;
        const itemSchema = e_schema[0];
        //var itemSchemaType = itemSchema;
        const arr_len = node.length;

        if (typeof itemSchema === 'string') {
          for (let arr_i = 0; arr_i < arr_len; arr_i++) {
            const r = getValue(node[arr_i].val);
            str = processValue(str, r);
          }
        } else {
          for (let arr_i = 0; arr_i < arr_len; arr_i++) {
            const r = _e(node[arr_i], itemSchema, options);
            str = processValue(str, r);
          }
        }
        str += chars.arrayEnd; //indicates that next item is not array item
      } else {
        //object
        str += chars.objStart;
        const keys = Object.keys(e_schema);
        if (Array.isArray(node)) {
          node = node[0];
        }
        for (let i in keys) {
          const key = keys[i];
          //a property defined in schema can be present either in attrsMap or children tags
          //options.textNodeName will not present in both maps, take it's value from val
          //options.attrNodeName will be present in attrsMap
          let r;
          if (!options.ignoreAttributes && node.attrsMap && node.attrsMap[key]) {
            r = _e(node.attrsMap[key], e_schema[key], options);
          } else if (key === options.textNodeName) {
            r = _e(node.val, e_schema[key], options);
          } else {
            r = _e(node.child[key], e_schema[key], options);
          }
          str = processValue(str, r);
        }
      }
      return str;
    } else {
      return hasValidData;
    }
  }
};

const getValue = function(a /*, type*/) {
  switch (a) {
    case undefined:
      return chars.missingPremitive;
    case null:
      return chars.nilPremitive;
    case '':
      return chars.emptyValue;
    default:
      return a;
  }
};

const processValue = function(str, r) {
  if (!isAppChar(r[0]) && !isAppChar(str[str.length - 1])) {
    str += chars.boundryChar;
  }
  return str + r;
};

const isAppChar = function(ch) {
  return charsArr.indexOf(ch) !== -1;
};

function hasData(jObj) {
  if (jObj === undefined) {
    return chars.missingChar;
  } else if (jObj === null) {
    return chars.nilChar;
  } else if (
    jObj.child &&
    Object.keys(jObj.child).length === 0 &&
    (!jObj.attrsMap || Object.keys(jObj.attrsMap).length === 0)
  ) {
    return chars.emptyChar;
  } else {
    return true;
  }
}


const buildOptions$2 = util.buildOptions;

const convert2nimn = function(node, e_schema, options) {
  options = buildOptions$2(options, xmlstr2xmlnode.defaultOptions, xmlstr2xmlnode.props);
  return _e(node, e_schema, options);
};

var convert2nimn_1 = convert2nimn;

var nimndata = {
	convert2nimn: convert2nimn_1
};

const buildOptions$1 = util.buildOptions;


//TODO: do it later
const convertToJsonString = function(node, options) {
  options = buildOptions$1(options, xmlstr2xmlnode.defaultOptions, xmlstr2xmlnode.props);

  options.indentBy = options.indentBy || '';
  return _cToJsonStr(node, options);
};

const _cToJsonStr = function(node, options, level) {
  let jObj = '{';

  //traver through all the children
  const keys = Object.keys(node.child);

  for (let index = 0; index < keys.length; index++) {
    var tagname = keys[index];
    if (node.child[tagname] && node.child[tagname].length > 1) {
      jObj += '"' + tagname + '" : [ ';
      for (var tag in node.child[tagname]) {
        jObj += _cToJsonStr(node.child[tagname][tag], options) + ' , ';
      }
      jObj = jObj.substr(0, jObj.length - 1) + ' ] '; //remove extra comma in last
    } else {
      jObj += '"' + tagname + '" : ' + _cToJsonStr(node.child[tagname][0], options) + ' ,';
    }
  }
  util.merge(jObj, node.attrsMap);
  //add attrsMap as new children
  if (util.isEmptyObject(jObj)) {
    return util.isExist(node.val) ? node.val : '';
  } else {
    if (util.isExist(node.val)) {
      if (!(typeof node.val === 'string' && (node.val === '' || node.val === options.cdataPositionChar))) {
        jObj += '"' + options.textNodeName + '" : ' + stringval(node.val);
      }
    }
  }
  //add value
  if (jObj[jObj.length - 1] === ',') {
    jObj = jObj.substr(0, jObj.length - 2);
  }
  return jObj + '}';
};

function stringval(v) {
  if (v === true || v === false || !isNaN(v)) {
    return v;
  } else {
    return '"' + v + '"';
  }
}

var convertToJsonString_1 = convertToJsonString;

var node2json_str = {
	convertToJsonString: convertToJsonString_1
};

//parse Empty Node as self closing node
const buildOptions = util.buildOptions;

const defaultOptions = {
  attributeNamePrefix: '@_',
  attrNodeName: false,
  textNodeName: '#text',
  ignoreAttributes: true,
  cdataTagName: false,
  cdataPositionChar: '\\c',
  format: false,
  indentBy: '  ',
  supressEmptyNode: false,
  tagValueProcessor: function(a) {
    return a;
  },
  attrValueProcessor: function(a) {
    return a;
  },
};

const props = [
  'attributeNamePrefix',
  'attrNodeName',
  'textNodeName',
  'ignoreAttributes',
  'cdataTagName',
  'cdataPositionChar',
  'format',
  'indentBy',
  'supressEmptyNode',
  'tagValueProcessor',
  'attrValueProcessor',
];

function Parser(options) {
  this.options = buildOptions(options, defaultOptions, props);
  if (this.options.ignoreAttributes || this.options.attrNodeName) {
    this.isAttribute = function(/*a*/) {
      return false;
    };
  } else {
    this.attrPrefixLen = this.options.attributeNamePrefix.length;
    this.isAttribute = isAttribute;
  }
  if (this.options.cdataTagName) {
    this.isCDATA = isCDATA;
  } else {
    this.isCDATA = function(/*a*/) {
      return false;
    };
  }
  this.replaceCDATAstr = replaceCDATAstr;
  this.replaceCDATAarr = replaceCDATAarr;

  if (this.options.format) {
    this.indentate = indentate;
    this.tagEndChar = '>\n';
    this.newLine = '\n';
  } else {
    this.indentate = function() {
      return '';
    };
    this.tagEndChar = '>';
    this.newLine = '';
  }

  if (this.options.supressEmptyNode) {
    this.buildTextNode = buildEmptyTextNode;
    this.buildObjNode = buildEmptyObjNode;
  } else {
    this.buildTextNode = buildTextValNode;
    this.buildObjNode = buildObjectNode;
  }

  this.buildTextValNode = buildTextValNode;
  this.buildObjectNode = buildObjectNode;
}

Parser.prototype.parse = function(jObj) {
  return this.j2x(jObj, 0).val;
};

Parser.prototype.j2x = function(jObj, level) {
  let attrStr = '';
  let val = '';
  const keys = Object.keys(jObj);
  const len = keys.length;
  for (let i = 0; i < len; i++) {
    const key = keys[i];
    if (typeof jObj[key] === 'undefined') ; else if (jObj[key] === null) {
      val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
    } else if (jObj[key] instanceof Date) {
      val += this.buildTextNode(jObj[key], key, '', level);
    } else if (typeof jObj[key] !== 'object') {
      //premitive type
      const attr = this.isAttribute(key);
      if (attr) {
        attrStr += ' ' + attr + '="' + this.options.attrValueProcessor('' + jObj[key]) + '"';
      } else if (this.isCDATA(key)) {
        if (jObj[this.options.textNodeName]) {
          val += this.replaceCDATAstr(jObj[this.options.textNodeName], jObj[key]);
        } else {
          val += this.replaceCDATAstr('', jObj[key]);
        }
      } else {
        //tag value
        if (key === this.options.textNodeName) {
          if (jObj[this.options.cdataTagName]) ; else {
            val += this.options.tagValueProcessor('' + jObj[key]);
          }
        } else {
          val += this.buildTextNode(jObj[key], key, '', level);
        }
      }
    } else if (Array.isArray(jObj[key])) {
      //repeated nodes
      if (this.isCDATA(key)) {
        val += this.indentate(level);
        if (jObj[this.options.textNodeName]) {
          val += this.replaceCDATAarr(jObj[this.options.textNodeName], jObj[key]);
        } else {
          val += this.replaceCDATAarr('', jObj[key]);
        }
      } else {
        //nested nodes
        const arrLen = jObj[key].length;
        for (let j = 0; j < arrLen; j++) {
          const item = jObj[key][j];
          if (typeof item === 'undefined') ; else if (item === null) {
            val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
          } else if (typeof item === 'object') {
            const result = this.j2x(item, level + 1);
            val += this.buildObjNode(result.val, key, result.attrStr, level);
          } else {
            val += this.buildTextNode(item, key, '', level);
          }
        }
      }
    } else {
      //nested node
      if (this.options.attrNodeName && key === this.options.attrNodeName) {
        const Ks = Object.keys(jObj[key]);
        const L = Ks.length;
        for (let j = 0; j < L; j++) {
          attrStr += ' ' + Ks[j] + '="' + this.options.attrValueProcessor('' + jObj[key][Ks[j]]) + '"';
        }
      } else {
        const result = this.j2x(jObj[key], level + 1);
        val += this.buildObjNode(result.val, key, result.attrStr, level);
      }
    }
  }
  return {attrStr: attrStr, val: val};
};

function replaceCDATAstr(str, cdata) {
  str = this.options.tagValueProcessor('' + str);
  if (this.options.cdataPositionChar === '' || str === '') {
    return str + '<![CDATA[' + cdata + ']]' + this.tagEndChar;
  } else {
    return str.replace(this.options.cdataPositionChar, '<![CDATA[' + cdata + ']]' + this.tagEndChar);
  }
}

function replaceCDATAarr(str, cdata) {
  str = this.options.tagValueProcessor('' + str);
  if (this.options.cdataPositionChar === '' || str === '') {
    return str + '<![CDATA[' + cdata.join(']]><![CDATA[') + ']]' + this.tagEndChar;
  } else {
    for (let v in cdata) {
      str = str.replace(this.options.cdataPositionChar, '<![CDATA[' + cdata[v] + ']]>');
    }
    return str + this.newLine;
  }
}

function buildObjectNode(val, key, attrStr, level) {
  if (attrStr && !val.includes('<')) {
    return (
      this.indentate(level) +
      '<' +
      key +
      attrStr +
      '>' +
      val +
      //+ this.newLine
      // + this.indentate(level)
      '</' +
      key +
      this.tagEndChar
    );
  } else {
    return (
      this.indentate(level) +
      '<' +
      key +
      attrStr +
      this.tagEndChar +
      val +
      //+ this.newLine
      this.indentate(level) +
      '</' +
      key +
      this.tagEndChar
    );
  }
}

function buildEmptyObjNode(val, key, attrStr, level) {
  if (val !== '') {
    return this.buildObjectNode(val, key, attrStr, level);
  } else {
    return this.indentate(level) + '<' + key + attrStr + '/' + this.tagEndChar;
    //+ this.newLine
  }
}

function buildTextValNode(val, key, attrStr, level) {
  return (
    this.indentate(level) +
    '<' +
    key +
    attrStr +
    '>' +
    this.options.tagValueProcessor(val) +
    '</' +
    key +
    this.tagEndChar
  );
}

function buildEmptyTextNode(val, key, attrStr, level) {
  if (val !== '') {
    return this.buildTextValNode(val, key, attrStr, level);
  } else {
    return this.indentate(level) + '<' + key + attrStr + '/' + this.tagEndChar;
  }
}

function indentate(level) {
  return this.options.indentBy.repeat(level);
}

function isAttribute(name /*, options*/) {
  if (name.startsWith(this.options.attributeNamePrefix)) {
    return name.substr(this.attrPrefixLen);
  } else {
    return false;
  }
}

function isCDATA(name) {
  return name === this.options.cdataTagName;
}

//formatting
//indentation
//\n after each closing or self closing tag

var json2xml = Parser;

var parser = createCommonjsModule(function (module, exports) {



const x2xmlnode = xmlstr2xmlnode;
const buildOptions = util.buildOptions;


exports.parse = function(xmlData, options, validationOption) {
  if( validationOption){
    if(validationOption === true) validationOption = {};
    
    const result = validator.validate(xmlData, validationOption);
    if (result !== true) {
      throw Error( result.err.msg)
    }
  }
  options = buildOptions(options, x2xmlnode.defaultOptions, x2xmlnode.props);
  const traversableObj = xmlstr2xmlnode.getTraversalObj(xmlData, options);
  //print(traversableObj, "  ");
  return node2json.convertToJson(traversableObj, options);
};
exports.convertTonimn = nimndata.convert2nimn;
exports.getTraversalObj = xmlstr2xmlnode.getTraversalObj;
exports.convertToJson = node2json.convertToJson;
exports.convertToJsonString = node2json_str.convertToJsonString;
exports.validate = validator.validate;
exports.j2xParser = json2xml;
exports.parseToNimn = function(xmlData, schema, options) {
  return exports.convertTonimn(exports.getTraversalObj(xmlData, options), schema, options);
};
});

var deserializerMiddleware = function (options, deserializer) {
    return function (next, context) {
        return function (args) { return __awaiter(void 0, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, next(args)];
                    case 1:
                        response = (_a.sent()).response;
                        return [4 /*yield*/, deserializer(response, options)];
                    case 2:
                        parsed = _a.sent();
                        return [2 /*return*/, {
                                response: response,
                                output: parsed,
                            }];
                }
            });
        }); };
    };
};

var serializerMiddleware = function (options, serializer) {
    return function (next, context) {
        return function (args) { return __awaiter(void 0, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, serializer(args.input, options)];
                    case 1:
                        request = _a.sent();
                        return [2 /*return*/, next(exports.__assign(exports.__assign({}, args), { request: request }))];
                }
            });
        }); };
    };
};

var deserializerMiddlewareOption = {
    name: "deserializerMiddleware",
    step: "deserialize",
    tags: ["DESERIALIZER"],
    override: true,
};
var serializerMiddlewareOption = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: ["SERIALIZER"],
    override: true,
};
function getSerdePlugin(config, serializer, deserializer) {
    return {
        applyToStack: function (commandStack) {
            commandStack.add(deserializerMiddleware(config, deserializer), deserializerMiddlewareOption);
            commandStack.add(serializerMiddleware(config, serializer), serializerMiddlewareOption);
        },
    };
}

/**
 * Validate whether a string is an ARN.
 */
var validate = function (str) {
    return typeof str === "string" && str.indexOf("arn:") === 0 && str.split(":").length >= 6;
};
/**
 * Parse an ARN string into structure with partition, service, region, accountId and resource values
 */
var parse = function (arn) {
    var segments = arn.split(":");
    if (segments.length < 6 || segments[0] !== "arn")
        throw new Error("Malformed ARN");
    var _a = __read(segments), 
    //Skip "arn" literal
    partition = _a[1], service = _a[2], region = _a[3], accountId = _a[4], resource = _a.slice(5);
    return {
        partition: partition,
        service: service,
        region: region,
        accountId: accountId,
        resource: resource.join(":"),
    };
};

exports.Client = Client;
exports.Command = Command;
exports.HttpRequest = HttpRequest;
exports.HttpResponse = HttpResponse;
exports.SENSITIVE_STRING = SENSITIVE_STRING;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncValues = __asyncValues;
exports.__await = __await;
exports.__awaiter = __awaiter;
exports.__extends = __extends;
exports.__generator = __generator;
exports.__read = __read;
exports.__rest = __rest;
exports.__spreadArray = __spreadArray;
exports.__values = __values;
exports.createCommonjsModule = createCommonjsModule;
exports.extendedEncodeURIComponent = extendedEncodeURIComponent;
exports.getAugmentedNamespace = getAugmentedNamespace;
exports.getSerdePlugin = getSerdePlugin;
exports.getValueFromTextNode = getValueFromTextNode;
exports.lib = lib;
exports.parse = parse;
exports.parser = parser;
exports.validate = validate;
