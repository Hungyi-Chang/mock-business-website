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




const Partner= () => (
    <PageBody>
        <Head>
            <title>MARK TECH (PARTNER)</title>
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
                content="iTrazo Tracetech (formerly blockbit solutions) - Partner"
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
                content="iTrazo Tracetech (formerly blockbit solutions) - Partner"
            />
            <meta
                name="twitter:image:alt"
                content="iTrazo Tracetech (formerly blockbit solutions) - Partner"
            />

            {/* Non-Essential, But Required for Analytics */}
            {/* <meta property="fb:app_id" content="your_app_id" /> */}
            {/* <meta name="twitter:site" content="@website-username" /> */}
        </Head>

        <PageSection>
            <ImgBanner src="cached/iTrazo_tracetech_Banner_partners.png"
                       alt="Platform"/>
            <FadeInLeft>
                <FlexVertical margin={"-3rem 0 0"}>
                    <FlexItem  margin={"1.5rem auto 0"}>
                        <PageH2Minor>
                            <strong>LEADING RELATIONSHIPS THAT ALLOWS<br />
                                COMPLETE TRACEABILITY SOLUTIONS</strong>
                        </PageH2Minor>
                    </FlexItem>
                    <FlexItem margin={"-3rem auto 0"}>
                        <Content>
                            We have established leading partner relationships that allow us to bring complete solutions for traceability.<br />
                            Our partners are commited to helping us with our customers by adding their services and offerings for traceable product creation.
                        </Content>
                    </FlexItem>
                </FlexVertical>

            </FadeInLeft>
        </PageSection>
        <PageSection>

                    <FadeIn>
                        <FlexBox margin={"2rem auto 5rem"}>
                            <FlexItem  margin={"0 auto"}>
                                <Img width={"8rem"} widthMiniScreen={"10rem"}
                                     src="cached/iTrazo_tracetech_packagingicon.png"
                                     alt="Platform"
                                />

                                <Content>
                                    Smart packaging,<br />printing,labelling
                                </Content>
                            </FlexItem>
                            <FlexItem  margin={"0 auto 0"}>
                                <Img width={"8rem"} widthMiniScreen={"10rem"}
                                     src="cached/iTrazo_tracetech_NFCicon.png"
                                     alt="Platform"
                                />

                                <Content>
                                    Serialisation, RFID,<br /> NFC application<br /> to products
                                </Content>
                            </FlexItem>
                            <FlexItem  margin={"1.2rem auto 0"}>
                                <Img width={"8rem"} widthMiniScreen={"10rem"}
                                     src="cached/iTrazo_Tracetech_Scan_icon.png"
                                     alt="Platform"
                                />
                                <Content>
                                    Line machinery,<br /> hardware,<br /> manufacturing software
                                </Content>
                            </FlexItem>
                            <FlexItem  margin={"0 auto"}>
                                <Img width={"8rem"} widthMiniScreen={"10rem"}
                                     src="cached/iTrazo_tracetech_cloudIcon.png"
                                     alt="Platform"
                                />
                                <Content>
                                    IOT Infrastructure and<br /> communication<br /> connectivity
                                    </Content>
                            </FlexItem>
                            <FlexItem  margin={"0 auto"}>
                                <Img width={"8rem"} widthMiniScreen={"10rem"}
                                     src="cached/iTrazo_Tracetech_Securityicon.png"
                                     alt="Platform"
                                />
                                <Content>
                                    Security compliance<br />and management
                                </Content>
                            </FlexItem>

                        </FlexBox>

                    </FadeIn>


        </PageSection>
        <PageSection>
                        <Img width={"100%"} widthMiniScreen={"100%"}
                             src="cached/iTrazo_tracetech_partnerWallpaper.png"
                             alt="itrazo-platform"
                        />
            <FadeInLeft>
                <FlexVertical>
                    <FlexBox margin={"6rem auto 5rem"}>
                        <FlexItem margin={"-3rem auto 0"}>
                            <Content>
                                Together with our partners we go beyond the fragmented solutions in the market where some competitors <br />
                                part-solutions for digital supply chain traceability
                            </Content>
                        </FlexItem>
                    </FlexBox>
                </FlexVertical>
                <FlexBox>
                    <FlexItem  margin={"0 auto 4rem"}>
                        <Img width={"35rem"} widthMiniScreen={"30rem"}
                             src="cached/labelmakers_logo.png"
                             alt="Platform"
                        />


                    </FlexItem>
                    <FlexItem  margin={"-1rem auto 2rem"}>
                        <Img width={"25rem"} widthMiniScreen={"30rem"}
                             src="cached/orora_logo.jpg"
                             alt="Platform"
                        />


                    </FlexItem>
                </FlexBox>
                <FlexBox>
                    <FlexItem  margin={"0 auto 2rem"}>
                        <Img width={"20rem"} widthMiniScreen={"25rem"}
                             src="cached/visy_logo.png"
                             alt="Platform"
                        />


                    </FlexItem>
                    <FlexItem  margin={"0 auto 0"}>
                        <Img width={"30rem"} widthMiniScreen={"35rem"}
                             src="cached/matthewslogo.png"
                             alt="Platform"
                        />


                    </FlexItem>
                </FlexBox>
                <FlexBox>
                    <FlexItem  margin={"1.5rem auto"}>
                        <Img width={"35rem"} widthMiniScreen={"40rem"}
                             src="cached/ceres-tag_logo.png"
                             alt="Platform"
                        />


                    </FlexItem>
                    <FlexItem  margin={"0 auto 0"}>
                        <Img width={"20rem"} widthMiniScreen={"25rem"}
                             src="cached/ITsecurity.png"
                             alt="Platform"
                        />


                    </FlexItem>
                </FlexBox>
                <FlexBox>
                    <FlexItem  margin={"-3rem auto 0"}>
                        <Img width={"25rem"} widthMiniScreen={"30rem"}
                             src="cached/ibm.jpg"
                             alt="Platform"
                        />


                    </FlexItem>
                    <FlexItem  margin={"-3rem auto 0"}>
                        <Img width={"25rem"} widthMiniScreen={"30rem"}
                             src="cached/sigfox.png"
                             alt="Platform"
                        />


                    </FlexItem>
                </FlexBox>


            </FadeInLeft>
        </PageSection>


    </PageBody>
);
export default Partner;
