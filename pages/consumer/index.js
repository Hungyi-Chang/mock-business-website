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
import { FadeInLeft} from '../../components/Animations';



const Consumer= () => (
    <PageBody>
        <Head>
            <title>iTrazo Tracetech (formerly blockbit solutions) - Consumer</title>
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
                content="iTrazo Tracetech (formerly blockbit solutions) - Consumer"
            />
            <meta
                property="og:description"
                content="Security, confidentiality, accountability, transparency, traceability - we have created iTrazo supply chain traceability platform to protect your brand, your revenue and most importantly your consumers. Whether you need to comply with serialization on product traceability, protect brand tampering and counterfeiting or create a trusted relationship with your consumers – We are your one stop traceability solution partner."
            />
            <meta
                property="og:url"
                content="https://itrazotracetech.com/Consumer"
            />
            <meta
                property="og:image"
                content="https://itrazotracetech.com/cached/iTrazo-new-logo.jpg"
            />
            <meta name="twitter:card" content="summary_large_image" />

            {/* Non-Essential, But Recommended */}
            <meta
                property="og:site_name"
                content="iTrazo Tracetech (formerly blockbit solutions) - Consumer"
            />
            <meta
                name="twitter:image:alt"
                content="iTrazo Tracetech (formerly blockbit solutions) - Consumer"
            />

            {/* Non-Essential, But Required for Analytics */}
            {/* <meta property="fb:app_id" content="your_app_id" /> */}
            {/* <meta name="twitter:site" content="@website-username" /> */}
        </Head>

        <PageSection>
            <ImgBanner src="cached/iTrazo_tracetech_Banner_Consumer.png"
                       alt="Consumer"/>
            <FadeInLeft margin={"-3rem 0 0"}>
                <FlexVertical >
                    <FlexItem margin={"auto"} >
                        <Img width={"55rem"} widthMiniScreen={"55rem"}
                             src="cached/iTrazo_tracetech_Activate.png"
                             alt="itrazo-About"
                        />
                    </FlexItem>
                </FlexVertical>
            </FadeInLeft>
            <Img width={"100%"}
                 src="cached/iTrazo_tracetech_Call_out_3.png"
                 alt="itrazo-consumer"
            />
            <FadeInLeft>
                <FlexVertical>
                    <FlexItem  margin={"1.8rem auto 0"}>
                        <PageH2Minor>
                            <strong>CONSUMER USE CASE</strong>
                        </PageH2Minor>
                    </FlexItem>

                </FlexVertical>
            </FadeInLeft>
                    <Img width={"100%"}
                         src="cached/iTrazo_tracetech_Consumer_college.png"
                         alt="itrazo-consumer"
                    />
            <FadeInLeft>
            <FlexVertical>
                <FlexItem margin={"2rem auto 2rem"}>
                    <Content>
                        Trust Mark.Tech pioneering active digital identities, traceability and authentication<br /> technology to harness brand protection and consumer engagement.
                    </Content>
                </FlexItem>

            </FlexVertical>
                </FadeInLeft>
        </PageSection>


    </PageBody>
);
export default Consumer;
