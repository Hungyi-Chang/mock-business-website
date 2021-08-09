import React from 'react';
import Head from 'next/head';
import ContactForm from '../../../components/PageComponents/contact/enquiry/ContactForm';
import { PageBody, PageSection } from '../../../components/Styles';

export default () => (
  <PageBody>
    <Head>
      <title>MARK TECH</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,height=device-height" />
      <meta property="og:type" content="website" />
      <meta
        name="description"
        content="Contact Us - iTrazo Tracetech (Formerly Blockbit Solutions) - Security, confidentiality, accountability, transparency, traceability - iTrazo supply chain traceability platform protects your brand, revenue and consumers. Whether you need to comply with serialization on product traceability, product brand tampering &amp; counterfeiting, or create a trusted relationship with consumers - Contact us today."
      />

      {/* For social media */}
      <meta
        property="og:title"
        content="Contact Us - iTrazo Tracetech (Formerly Blockbit Solutions)"
      />
      <meta
        property="og:description"
        content="Contact Us - iTrazo Tracetech (Formerly Blockbit Solutions) - Security, confidentiality, accountability, transparency, traceability - iTrazo supply chain traceability platform protects your brand, revenue and consumers. Whether you need to comply with serialization on product traceability, product brand tampering &amp; counterfeiting, or create a trusted relationship with consumers - Contact us today."
      />
      <meta
        property="og:url"
        content="https://itrazotracetech.com/contact/enquiry"
      />
      <meta
        property="og:image"
        content="https://itrazotracetech.com/cached/iTrazo-new-logo.jpg"
      />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Non-Essential, But Recommended */}
      <meta
        property="og:site_name"
        content="Contact Us - iTrazo Tracetech (Formerly Blockbit Solutions)"
      />
      <meta
        name="twitter:image:alt"
        content="Contact Us - iTrazo Tracetech (Formerly Blockbit Solutions)"
      />

      {/* Non-Essential, But Required for Analytics */}
      {/* <meta property="fb:app_id" content="your_app_id" /> */}
      {/* <meta name="twitter:site" content="@website-username" /> */}
    </Head>
    <PageSection>
      <ContactForm />
    </PageSection>
  </PageBody>
);
