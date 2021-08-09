/**
 * Site root. will navigation to home
 *
 * @author Dapeng Zhang
 * @version 1.0.0
 */
import React from 'react';
import Head from 'next/head';
import Home from './home';

export default () => (
  <>
    <Head>
      <title>Mark Tech</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,height=device-height" />
      <meta property="og:type" content="website" />
      <meta
        name="description"
        content="Security, confidentiality, accountability, transparency, traceability - we have created iTrazo supply chain traceability platform to protect your brand, your revenue and most importantly your consumers. Whether you need to comply with serialization on product traceability, protect brand tampering and counterfeiting or create a trusted relationship with your consumers – We are your one stop traceability solution partner."
      />

      {/* For social media */}
      <meta property="og:title" content="Mark Tech" />
      <meta
        property="og:description"
        content="Security, confidentiality, accountability, transparency, traceability - we have created iTrazo supply chain traceability platform to protect your brand, your revenue and most importantly your consumers. Whether you need to comply with serialization on product traceability, protect brand tampering and counterfeiting or create a trusted relationship with your consumers – We are your one stop traceability solution partner."
      />
      <meta property="og:url" content="https://itrazotracetech.com/" />
      <meta
        property="og:image"
        content="https://itrazotracetech.com/cached/iTrazo-new-logo.jpg"
      />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Non-Essential, But Recommended */}
      <meta property="og:site_name" content="Mark Tech" />
      <meta name="twitter:image:alt" content="Mark Tech" />
      <link rel="https://cdn.rawgit.com/mfd/f3d96ec7f0e8f034cc22ea73b3797b59/raw/856f1dbb8d807aabceb80b6d4f94b464df461b3e/gotham.css"/>
      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />


      {/* Non-Essential, But Required for Analytics */}
      {/* <meta property="fb:app_id" content="your_app_id" /> */}
      {/* <meta name="twitter:site" content="@website-username" /> */}
    </Head>
    <Home />
  </>
);
