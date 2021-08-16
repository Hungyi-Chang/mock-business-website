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
    ImgBanner, FlexBox,
} from '../../components/Styles';
import { FadeInLeft, FadeIn } from '../../components/Animations';


const Platform= () => (
    <PageBody>
        <Head>
            <title>MARK TECH (PLATFORM)</title>
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
                content="iTrazo Tracetech (formerly blockbit solutions) - Platform"
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
                content="iTrazo Tracetech (formerly blockbit solutions) - Platform"
            />
            <meta
                name="twitter:image:alt"
                content="iTrazo Tracetech (formerly blockbit solutions) - Platform"
            />

            {/* Non-Essential, But Required for Analytics */}
            {/* <meta property="fb:app_id" content="your_app_id" /> */}
            {/* <meta name="twitter:site" content="@website-username" /> */}
        </Head>

        <PageSection>
            <ImgBanner src="cached/iTrazo_tracetech_Banner_Platform.png"
                       alt="Platform"/>
            <FadeInLeft>
                <FlexVertical margin={"-3rem 0 0"}>
                    <FlexItem  margin={"1.5rem auto 0"}>
                        <PageH2Minor>
                            <strong>ABOUT OUR PLATFORM</strong>
                        </PageH2Minor>
                    </FlexItem>
                    <FlexItem margin={"-3rem auto 0"}>
                        <Content>
                            Award-winning* business tool<br />
                            Adaptable platform for customised TraceTech applications<br />
                            Real-time processing enabled by unique architecture<br />
                            Fully integrated, real-time geolocation capabilities<br />
                            Built-in AI and machine learning capacity to extract real-time operational and marketing insights.<br />
                        </Content>
                    </FlexItem>
                </FlexVertical>
                <FlexBox margin={"2rem auto 5rem"}>
                    <FlexItem  margin={"auto"}>
                        <Img width={"45rem"} widthMiniScreen={"50rem"}
                             src="cached/iTrazo_tracetech_insight.png"
                             alt="Platform"
                        />
                    </FlexItem>
                    <FlexItem  margin={"auto"}>
                        <Img width={"45rem"} widthMiniScreen={"50rem"}
                             src="cached/iTrazo_tracetech_tracking.png"
                             alt="Platform"
                        />

                    </FlexItem>
                    <FlexItem  margin={"auto"}>
                        <Img width={"45rem"} widthMiniScreen={"50rem"}
                             src="cached/iTrazo_tracetech_siteMap.png"
                             alt="Platform"
                        />
                    </FlexItem>

                </FlexBox>
            </FadeInLeft>
        </PageSection>
        <PageSection>
                    <FadeInLeft>
                        <FlexVertical>
                            <FlexItem  margin={"0.2rem auto 0"}>
                                <PageH2Minor>
                                    <strong>HOW OUR PLATFORM WORKS</strong>
                                </PageH2Minor>
                            </FlexItem>
                            <FlexItem margin={"-3rem auto 1rem"}>
                                <Content>
                                    A new way to build superior business understanding and control
                                </Content>
                            </FlexItem>
                        </FlexVertical>
                    </FadeInLeft>
                    <FadeIn>
                        <FlexBox margin={"2rem auto 5rem"}>
                            <FlexItem  margin={"0 auto"}>
                                <Img width={"10rem"} widthMiniScreen={"15rem"}
                                     src="cached/iTrazo_tracetech_trackingIcon.png"
                                     alt="Platform"
                                />

                                <Content>
                                    Individually identify,<br /> trace and track products,<br /> cases, pallets, containers<br /> or assets
                                </Content>
                            </FlexItem>
                            <FlexItem  margin={"1.5rem auto 0"}>
                                <Img width={"10rem"} widthMiniScreen={"15rem"}
                                     src="cached/iTrazo_Tracetech_Scan_icon.png"
                                     alt="Platform"
                                />

                                <Content>
                                    Automatically capture<br />  data with available trace<br />  and scanning<br />  technologies
                                </Content>
                            </FlexItem>
                            <FlexItem  margin={"0 auto"}>
                                <Img width={"10rem"} widthMiniScreen={"15rem"}
                                     src="cached/iTrazo_Tracetech_planetIcon.png"
                                     alt="Platform"
                                />
                                <Content>
                                    Employ real-time<br />  geolocation, anywhere on<br />  the globe
                                </Content>
                            </FlexItem>
                            <FlexItem  margin={"0 auto"}>
                                <Img width={"10rem"} widthMiniScreen={"15rem"}
                                     src="cached/iTrazo_tracetech_consumerIcon.png"
                                     alt="Platform"
                                />
                                <Content>
                                    Engage consumers at<br />  point of purchase<br />  and consumption
                                    </Content>
                            </FlexItem>

                        </FlexBox>

                    </FadeIn>


        </PageSection>
        <PageSection>
                        <Img width={"100%"} widthMiniScreen={"100%"}
                             src="cached/iTrazo_tracetech_callOut1.png"
                             alt="itrazo-platform"
                        />
        </PageSection>
        <PageSection>

            <FadeInLeft>
                <FlexVertical>
                    <FlexItem  margin={"1.8rem auto 0"}>
                        <PageH2Minor>
                            <strong>INSIGHTS</strong>
                        </PageH2Minor>
                    </FlexItem>
                    <FlexItem margin={"-3rem auto 0"}>
                        <Content>
                            Bringing new levels of insight, control and transparency to business operations.
                        </Content>
                    </FlexItem>
                    <FlexItem  margin={"0 auto -2rem"}>
                        <Img width={"80rem"} widthMiniScreen={"50rem"}
                             src="cached/iTrazo_tracetech_insight.png"
                             alt="itrazo-platform"
                        />
                    </FlexItem>
                </FlexVertical>
                </FadeInLeft>

        </PageSection>

    </PageBody>
);
export default Platform;
