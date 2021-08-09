/**
 * Industries page page contents
 *
 * @author Mark Chang
 * @version 1.0.0
 */
import React from 'react';
import Head from 'next/head';

import {
    PageBody,
    FlexVertical,
    FlexItem,
    PageSection,
    Content,
    PageH2Minor,
    Img,
    ImgBanner,
} from '../../components/Styles';
import { FadeInLeft } from '../../components/Animations';




const Process= () => (
    <PageBody>
        <Head>
            <title>MARK TECH (PROCESS)</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width,height=device-height" />
            <meta property="og:type" content="website" />
            <meta
                name="description"
                content="Security, confidentiality, accountability, transparency, traceability - we have created iTrazo supply chain traceability platform to protect your brand, your revenue and most importantly your consumers. Whether you need to comply with serialization on product traceability, protect brand tampering and counterfeiting or create a trusted relationship with your consumers – We are your one stop traceability solution partner."
            />

            {/* For social media */}
            <meta
                property="og:title"
                content="iTrazo Tracetech (formerly blockbit solutions) - Process"
            />
            <meta
                property="og:description"
                content="Security, confidentiality, accountability, transparency, traceability - we have created iTrazo supply chain traceability platform to protect your brand, your revenue and most importantly your consumers. Whether you need to comply with serialization on product traceability, protect brand tampering and counterfeiting or create a trusted relationship with your consumers – We are your one stop traceability solution partner."
            />
            <meta
                property="og:url"
                content="https://itrazotracetech.com/platform"
            />
            <meta
                property="og:image"
                content="https://itrazotracetech.com/cached/iTrazo-new-logo.jpg"
            />
            <meta name="twitter:card" content="summary_large_image" />

            {/* Non-Essential, But Recommended */}
            <meta
                property="og:site_name"
                content="iTrazo Tracetech (formerly blockbit solutions) - Process"
            />
            <meta
                name="twitter:image:alt"
                content="iTrazo Tracetech (formerly blockbit solutions) - Process"
            />

            {/* Non-Essential, But Required for Analytics */}
            {/* <meta property="fb:app_id" content="your_app_id" /> */}
            {/* <meta name="twitter:site" content="@website-username" /> */}
        </Head>

        <PageSection>
            <ImgBanner src="cached/iTrazo_tracetech_Banner_Process.png"
                       alt="assets"/>
            <FadeInLeft>
                <FlexVertical margin={"-3rem 0 4rem"}>
                    <FlexItem  margin={"1.5rem auto 0"}>
                        <PageH2Minor>
                            <strong>PROCESS TRANSPARENCY</strong>
                        </PageH2Minor>
                    </FlexItem>
                    <FlexItem margin={"-3rem auto 0"}>
                        <Content>
                            Track inputs and outputs throughout sourcing, manufacturing and distribution chains to enable<br /> quality control and product recall, improve process and security and efficiencies
                        </Content>
                    </FlexItem>
                </FlexVertical>
            </FadeInLeft>
            <Img width={"100%"} widthMiniScreen={"100%"} margin={"0 0 -2rem"}
                 src="cached/iTrazo_tracetech_process_wallpaper.png"
                 alt="itrazo-assets"
            />
        </PageSection>


    </PageBody>
);
export default Process;
