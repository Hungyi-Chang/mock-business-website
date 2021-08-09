/**
 * Industries page page contents
 *
 * @author Mark Chang
 * @version 1.0.0
 */
import React from 'react';
import Head from 'next/head';

import {
    ScreenSize,
    PageBody,
    FlexVertical,
    FlexItem,
    PageSection,
    Content,
    PageH2Minor,
    PageH2Minor_left,
    Img,
    ImgBanner, FlexBox, UnstyledButton as Button,
} from '../../components/Styles';
import { FadeInLeft, FadeIn } from '../../components/Animations';
import styled from "styled-components";

const PageH2MinorRed=styled.a`
 font: 900 3.6rem/1.4 'Open Sans', sans-serif;
 color: #CD5C5C;
 line-height: 1.1;
  @media only screen and (max-width: ${ScreenSize.small}) {
     font: 900 3.8rem/1.4 sans-serif;
    }
  
`;
const SubmitButton = styled(Button)`
  padding: 1rem 1.5rem;
  border-radius: 3px;
  color: white;
  transition: transform 0.2s ease-out;
   a {
  color: white;
  text-decoration: none;
  cursor: pointer;

  }
  ${(props) => {
    const { loading,width,font } = props;
    if (loading) {
        return `
        background: #337ab7;
        font-size: 1.6rem;
      `;
    }
    return `background: black;
            width:${width};
            font:${font};
    
    `;
}};

  &:hover {
    transform: scale(1.2);
  }
`;
export const BackgroundColorLight = styled.div`
 
  background-color: #F0F0F0;
  height: 38rem;
  width: 35rem;
  overflow: hidden;
  margin-bottom: 3rem;
  ${(props) => {
    const { boxShadow, height, width } = props;
    return `box-shadow: ${boxShadow};
          height: ${height};
          width:${width};
  `;
}}
`;

const Home= () => (
    <PageBody>
        <Head>
            <title>MARK TECH (HOME)</title>
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
            <ImgBanner src="cached/iTrazo_tracetech_Banner_Home.png"
                       alt="Platform"/>
            <FadeInLeft>
                <FlexBox margin={"-5rem auto 2rem"}>
                    <FlexItem flex={"40%"} margin={"auto"} >
                        <FlexVertical margin={"-3rem auto 0 0"}>
                            <FlexItem margin={"auto"}>
                                <PageH2Minor>
                                    <strong>USE OUR PLATFORM</strong>
                                </PageH2Minor>
                                <SubmitButton width={"18rem"} font={"600 1.8rem/1.4 \"Gill Sans\", sans-serif"}><a href="/platform">
                                    LEARN MORE
                                </a></SubmitButton>
                            </FlexItem>
                        </FlexVertical>
                    </FlexItem>

                    <FlexItem flex={"60%"} margin={"0 auto 0"}>
                        <Img width={"60rem"} widthMiniScreen={"45rem"}
                             src="cached/Desktop_Mockup_Insights_Transparent.png"
                             alt="Platform"
                        />
                    </FlexItem>

                </FlexBox>
            </FadeInLeft>

            <Img width={"100%"} widthMiniScreen={"100%"}
                 src="cached/iTrazo_tracetech_Content_Collage_1.png"
                 alt="itrazo-platform"
            />
            <FadeInLeft>


                <FlexVertical margin={"1rem 0 0"}>
                    <FlexItem  margin={"1.5rem auto 0"}>
                        <PageH2Minor>
                            <strong>TRACETECH OPPORTUNITIES</strong>
                        </PageH2Minor>
                    </FlexItem>
                </FlexVertical>
                <FadeInLeft>
                <FlexBox margin={"1rem auto 5rem"} padding={"0 1rem 0"}>
                    <FlexItem  margin={"auto"}>
                        <BackgroundColorLight>
                            <FlexVertical margin={"auto"}>
                                <FlexItem margin={" -0.5rem auto -2rem"}>
                                    <PageH2Minor>
                                        <strong>Process</strong>
                                    </PageH2Minor>
                                </FlexItem>
                                <FlexItem margin={"0 auto 3rem"}>
                                    <Content>
                                        Track inputs and outputs<br /> throughout sourcing,<br />
                                        manufacturing and distribution<br /> chains to enable quality control<br />
                                        and product recall,
                                        improve<br /> process security and efficiencies.
                                    </Content>
                                </FlexItem>
                                <FlexItem margin={"auto"}>
                                    <SubmitButton width={"15rem"} font={"600 1.5rem/1.4 \"Gill Sans\", sans-serif"}><a href="/process">
                                        LEARN MORE
                                    </a></SubmitButton>
                                </FlexItem>
                            </FlexVertical>
                        </BackgroundColorLight>
                    </FlexItem>
                    <FlexItem  margin={"auto"}>
                        <BackgroundColorLight>
                            <FlexVertical margin={"auto"}>
                                <FlexItem margin={" -0.5rem auto -2rem"}>
                                    <PageH2Minor>
                                        <strong>Consumer</strong>
                                    </PageH2Minor>
                                </FlexItem>
                                <FlexItem margin={"0 auto 3rem"}>
                                    <Content>
                                        Protect and grow brand value<br />
                                        by engaging consumers to<br />
                                        authenticate, activate and<br />
                                        deliver transparent provenance.
                                    </Content>
                                </FlexItem>
                                <FlexItem margin={"3.8rem auto 0"}>
                                    <SubmitButton width={"15rem"} font={"600 1.5rem/1.4 \"Gill Sans\", sans-serif"}><a href="/platform">
                                        LEARN MORE
                                    </a></SubmitButton>
                                </FlexItem>
                            </FlexVertical>
                        </BackgroundColorLight>
                    </FlexItem>
                    <FlexItem  margin={"auto"}>
                        <BackgroundColorLight>
                            <FlexVertical margin={"auto"}>
                                <FlexItem margin={" -0.5rem auto -2rem"}>
                                    <PageH2Minor>
                                        <strong>Assets</strong>
                                    </PageH2Minor>
                                </FlexItem>
                                <FlexItem margin={"0 auto 3rem"}>
                                    <Content>
                                        Locate and manage assets to<br />
                                        track location, control user access,<br />
                                        analyse utilisation and capture<br />
                                        service histories.
                                    </Content>
                                </FlexItem>
                                <FlexItem margin={"3.5rem auto 0"}>
                                    <SubmitButton width={"15rem"} font={"600 1.5rem/1.4 \"Gill Sans\", sans-serif"}><a href="/platform">
                                        LEARN MORE
                                    </a></SubmitButton>
                                </FlexItem>
                            </FlexVertical>
                        </BackgroundColorLight>
                    </FlexItem>
                </FlexBox>
                    </FadeInLeft>
            </FadeInLeft>
        </PageSection>
        <Img width={"100%"} widthMiniScreen={"100%"}
             src="cached/iTrazo_tracetech_Content_Collage_2.png"
             alt="itrazo-platform"
        />
        <PageSection>
                    <FadeInLeft>
                        <FlexVertical>
                            <FlexItem  margin={"2rem auto 0"}>
                                <PageH2Minor>
                                    <strong>HOW ITRAZO CAN <PageH2MinorRed>PROTECT</PageH2MinorRed> YOUR BRAND</strong>
                                </PageH2Minor>
                            </FlexItem>
                        </FlexVertical>
                    </FadeInLeft>
                    <FadeIn>
                        <FlexBox margin={"1rem auto 5rem"} padding={"0 5rem 0"}>
                            <FlexItem  margin={"auto"}>
                                <BackgroundColorLight width={"26rem"} height={"26rem"}>
                                    <FlexVertical margin={"auto"}>
                                        <FlexItem  margin={"3rem auto 0"}>
                                            <Img width={"6rem"} widthMiniScreen={"6rem"}
                                                 src="cached/Website_Content_Verification_icon.png"
                                                 alt="Platform"
                                            />
                                        </FlexItem>
                                        <FlexItem margin={"1rem auto 0"}>
                                            <Content>
                                                Authentication
                                            </Content>
                                        </FlexItem>
                                    </FlexVertical>
                                </BackgroundColorLight>
                            </FlexItem>
                            <FlexItem  margin={"auto"}>
                                <BackgroundColorLight width={"26rem"} height={"26rem"}>
                                    <FlexVertical margin={"auto"}>
                                        <FlexItem  margin={"3rem auto 0"}>
                                            <Img width={"6rem"} widthMiniScreen={"6rem"}
                                                 src="cached/Website_Content_Counterfeit_icon.png"
                                                 alt="Platform"
                                            />
                                        </FlexItem>
                                        <FlexItem margin={"1rem auto 0"}>
                                            <Content>
                                                Counterfeit<br />
                                                Detection
                                            </Content>
                                        </FlexItem>

                                    </FlexVertical>
                                </BackgroundColorLight>
                            </FlexItem>
                            <FlexItem  margin={"auto"}>
                                <BackgroundColorLight width={"26rem"} height={"26rem"}>
                                    <FlexVertical margin={"auto"}>
                                        <FlexItem  margin={"4rem auto 0"}>
                                            <Img width={"6rem"} widthMiniScreen={"6rem"}
                                                 src="cached/Website_Content_Consumer_Engagement_icon.png"
                                                 alt="Platform"
                                            />


                                        </FlexItem>
                                        <FlexItem margin={"1rem auto 0"}>
                                            <Content>Consumer<br />
                                                Engagement</Content>
                                        </FlexItem>

                                    </FlexVertical>
                                </BackgroundColorLight>
                            </FlexItem>
                            <FlexItem  margin={"auto"}>
                                <BackgroundColorLight width={"26rem"} height={"26rem"}>
                                    <FlexVertical margin={"auto"}>
                                        <FlexItem  margin={"3rem auto 0"}>
                                            <Img width={"6rem"} widthMiniScreen={"6rem"}
                                                 src="cached/Website_Content_Activation_icon.png"
                                                 alt="Platform"
                                            />
                                        </FlexItem>
                                        <FlexItem margin={"1rem auto 0"}>
                                            <Content>Product-based<br />
                                            Activations</Content>
                                        </FlexItem>

                                    </FlexVertical>
                                </BackgroundColorLight>
                            </FlexItem>
                        </FlexBox>

                    </FadeIn>
            <FadeIn>
                <FlexBox margin={"1rem auto 5rem"} padding={"0 5rem 0"}>
                    <FlexItem  margin={"auto"}>
                        <BackgroundColorLight width={"26rem"} height={"26rem"}>
                            <FlexVertical margin={"auto"}>
                                <FlexItem  margin={"3rem auto 0"}>
                                    <Img width={"6rem"} widthMiniScreen={"6rem"}
                                         src="cached/Website_Content_Data_insights_icon.png"
                                         alt="Platform"
                                    />
                                </FlexItem>
                                <FlexItem margin={"1rem auto 0"}>
                                    <Content>
                                        Data Insights
                                    </Content>
                                </FlexItem>
                            </FlexVertical>
                        </BackgroundColorLight>
                    </FlexItem>
                    <FlexItem  margin={"auto"}>
                        <BackgroundColorLight width={"26rem"} height={"26rem"}>
                            <FlexVertical margin={"auto"}>
                                <FlexItem  margin={"3rem auto 0"}>
                                    <Img width={"6rem"} widthMiniScreen={"6rem"}
                                         src="cached/Website_Content_Provenance_transparency_icon.png"
                                         alt="Platform"
                                    />
                                </FlexItem>
                                <FlexItem margin={"1rem auto 0"}>
                                    <Content>
                                        Provenance<br />
                                        Transparency
                                    </Content>
                                </FlexItem>

                            </FlexVertical>
                        </BackgroundColorLight>
                    </FlexItem>
                    <FlexItem  margin={"auto"}>
                        <BackgroundColorLight width={"26rem"} height={"26rem"}>
                            <FlexVertical margin={"auto"}>
                                <FlexItem  margin={"4rem auto 0"}>
                                    <Img width={"6rem"} widthMiniScreen={"6rem"}
                                         src="cached/Website_Content_ESG_Compliance_icon.png"
                                         alt="Platform"
                                    />


                                </FlexItem>
                                <FlexItem margin={"1rem auto 0"}>
                                    <Content>ESG Compliance</Content>
                                </FlexItem>

                            </FlexVertical>
                        </BackgroundColorLight>
                    </FlexItem>
                    <FlexItem  margin={"auto"}>
                        <BackgroundColorLight width={"26rem"} height={"0"}>
                        </BackgroundColorLight>
                    </FlexItem>
                </FlexBox>

            </FadeIn>


        </PageSection>
        <PageSection>
                        <Img width={"100%"} widthMiniScreen={"100%"}
                             src="cached/iTrazo_tracetech_Website_Content_Collage_3.png"
                             alt="itrazo-platform"
                        />
            <FadeInLeft>
                <FlexBox margin={"5rem auto 5rem"}>
                    <FlexItem flex={"50%"} margin={"auto"}>
                        <Img width={"60rem"} widthMiniScreen={"45rem"}
                             src="cached/Website_Contents_Activate_it.png"
                             alt="itrazo-platform"
                        />
                    </FlexItem>
                    <FlexItem flex={"50%"} margin={"auto"} >
                    <FlexVertical>
                        <FlexItem margin={"-3rem auto 0"}>
                            <PageH2Minor_left>
                                <strong>BOOK YOUR<br /> CONSULTATION<br /> SESSION TODAY</strong>
                            </PageH2Minor_left>
                            <SubmitButton width={"18rem"} font={"600 1.8rem/1.4 \"Gill Sans\", sans-serif"}><a href="/contact/enquiry">
                                LEARN MORE
                            </a></SubmitButton>
                        </FlexItem>

                    </FlexVertical>
                    </FlexItem>
                </FlexBox>
            </FadeInLeft>
        </PageSection>


    </PageBody>
);
export default Home;
