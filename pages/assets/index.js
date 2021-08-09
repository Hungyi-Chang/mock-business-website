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
    Content_left,
    PageH2Minor5,
    Img,
    ImgBanner, FlexBox,
} from '../../components/Styles';
import { FadeInLeft } from '../../components/Animations';
import styled from "styled-components";

const Ul = styled.ul`
  // list-style-type: none;
  padding: 0 0.75rem;
  list-style-image: url('cached/iTrazo_Bullet_Red.png');
float: left;
  li {
  
    margin: 0.8rem 0.3rem;
  }
`;

const Assets= () => (
    <PageBody>
        <Head>
            <title>iTrazo Tracetech (formerly blockbit solutions) - Assets</title>
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
                content="iTrazo Tracetech (formerly blockbit solutions) - Assets"
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
                content="iTrazo Tracetech (formerly blockbit solutions) - Assets"
            />
            <meta
                name="twitter:image:alt"
                content="iTrazo Tracetech (formerly blockbit solutions) - Assets"
            />

            {/* Non-Essential, But Required for Analytics */}
            {/* <meta property="fb:app_id" content="your_app_id" /> */}
            {/* <meta name="twitter:site" content="@website-username" /> */}
        </Head>

        <PageSection>
            <ImgBanner src="cached/iTrazo_tracetech_assetes_Banner.png"
                       alt="assets"/>
            <FadeInLeft>
                <FlexVertical margin={"-3rem 0 0"}>
                    <FlexItem  margin={"1.5rem auto 0"}>
                        <PageH2Minor>
                            <strong>ASSET TRACEABILITY</strong>
                        </PageH2Minor>
                    </FlexItem>
                    <FlexItem margin={"-3rem auto 0"}>
                        <Content>
                            Locate and manage assets to track location, control user access, analyse utilisation and capture service histories
                        </Content>
                    </FlexItem>
                </FlexVertical>
            </FadeInLeft>
        </PageSection>
        <PageSection>
            <FadeInLeft>
                <FlexBox margin={"2rem auto -5rem"}>
                    <FlexItem flex={"60%"} margin={"auto"}>
                        <Img width={"60rem"} widthMiniScreen={"45rem"}
                             src="cached/iTrazo_tracetech_Asset_Management.png"
                             alt="itrazo-assets"
                        />
                    </FlexItem>
                    <FlexItem flex={"40%"} margin={"0 0 5rem 5rem"} >
                        <FlexVertical>
                            <FlexItem>
                                <PageH2Minor5>
                                    MAKE TRACEABILITY WORK
                                </PageH2Minor5>
                            </FlexItem>
                            <FlexItem>
                                <PageH2Minor5>
                                    FOR YOUR BUSINESS
                                </PageH2Minor5>
                            </FlexItem>
                            <FlexItem  >
                                <Ul>
                                    <li>
                                        <Content_left>
                                            Key to realising potential of the internet of<br /> things (ioT)
                                        </Content_left>
                                    </li>
                                    <li>
                                        <Content_left>
                                            Enable real-time engagement across ‘smart’<br /> digital systems
                                        </Content_left>
                                    </li>
                                    <li>
                                        <Content_left>
                                            Empower users to digitally interact with asset<br /> managers
                                        </Content_left>
                                    </li>
                                </Ul>
                            </FlexItem>
                        </FlexVertical>
                    </FlexItem>
                </FlexBox>
            </FadeInLeft>
            <Img width={"100%"} widthMiniScreen={"100%"}
                 src="cached/iTrazo_tracetech_assets_wallpaper.png"
                 alt="itrazo-assets"
            />
        </PageSection>


    </PageBody>
);
export default Assets;
