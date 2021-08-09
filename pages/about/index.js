/**
 * Industries page page contents
 *
 * @author Beier Nie
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
  PageH2Minor3,
  PageH2Minor2,
  PageH2Minor4,
  ColorWhite,
  BackgroundColorDark,
  Img,
  ImgBanner, FlexBox,
} from '../../components/Styles';
import { FadeInLeft, FadeIn } from '../../components/Animations';

const About= () => (
  <PageBody>
    <Head>
      <title>MARK TECH (ABOUT)</title>
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
          content="iTrazo Tracetech (formerly blockbit solutions) - About Us"
      />
      <meta
          property="og:description"
          content="Security, confidentiality, accountability, transparency, traceability - we have created iTrazo supply chain traceability platform to protect your brand, your revenue and most importantly your consumers. Whether you need to comply with serialization on product traceability, protect brand tampering and counterfeiting or create a trusted relationship with your consumers – We are your one stop traceability solution partner."
      />
      <meta
          property="og:url"
          content="https://itrazotracetech.com/about/about-us"
      />
      <meta
          property="og:image"
          content="https://itrazotracetech.com/cached/iTrazo-new-logo.jpg"
      />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Non-Essential, But Recommended */}
      <meta
          property="og:site_name"
          content="iTrazo Tracetech (formerly blockbit solutions) - About Us"
      />
      <meta
          name="twitter:image:alt"
          content="iTrazo Tracetech (formerly blockbit solutions) - About Us"
      />

      {/* Non-Essential, But Required for Analytics */}
      {/* <meta property="fb:app_id" content="your_app_id" /> */}
      {/* <meta name="twitter:site" content="@website-username" /> */}
    </Head>

    <PageSection>
      <ImgBanner src="cached/About_Banner.png"
           alt="itrazo-industries"/>
      <FadeInLeft>
        <FlexVertical margin={"-3rem 0 0"}>
          <FlexItem  margin={"0 auto 0"}>
            <Img width={"25rem"} widthMiniScreen={"30rem"}
                 src="cached/iTrazo_tracetech_about_business.png"
                 alt="itrazo-About"
            />
          </FlexItem>
          <FlexItem  margin={"1.8rem auto 0"}>
            <PageH2Minor>
              WHO ARE WE?
            </PageH2Minor>
          </FlexItem>
          <FlexItem margin={"-3rem auto 0"}>
            <Content>
              We are pioneers in harnessing TraceTech to grow business success
            </Content>
          </FlexItem>
        </FlexVertical>
        <FlexBox margin={"2rem auto 5rem"}>
          <FlexItem  margin={"auto"}>
            <Img width={"15rem"} widthMiniScreen={"20rem"}
                src="cached/iTrazo_tracetech_Traceability_Icon.png"
                alt="itrazo-industries"
            />
            <PageH2Minor2>
              Creators
            </PageH2Minor2>
            <Content>
              of a world-leading, user-friendly<br />TraceTech platform
            </Content>
          </FlexItem>
          <FlexItem  margin={"auto"}>
            <Img width={"15rem"} widthMiniScreen={"20rem"}
                 src="cached/iTrazo_tracetech__Experts_Icon.png"
                 alt="itrazo-industries"
            />

            <PageH2Minor2>
              Experts
            </PageH2Minor2>
            <Content>
              in customising TraceTech solutions<br /> to realise business opportunities
            </Content>
          </FlexItem>
          <FlexItem  margin={"auto"}>
            <Img width={"15rem"} widthMiniScreen={"20rem"}
                 src="cached/iTrazo_tracetech_Partners_Icon.png"
                 alt="itrazo-industries"
            />
            <PageH2Minor2>
             Your Partners
            </PageH2Minor2>
            <Content>
              through discovery, design and<br /> implementation
            </Content>
          </FlexItem>

        </FlexBox>
      </FadeInLeft>
    </PageSection>
    <PageSection>
      <BackgroundColorDark>
        <ColorWhite color="#E6E6E6">
        <FadeInLeft>
          <FlexVertical>
            <FlexItem  margin={"0.2rem auto 0"}>
              <PageH2Minor>
                OUR TEAM
              </PageH2Minor>
            </FlexItem>
            <FlexItem margin={"-3rem auto 1rem"}>
              <Content>
                Mark.Tech has an exceptional leadership and technical team to create an effective solution.<br /> Our leaders have a forward-thinking philosophy for delivering operational and technological excellence<br /> and recognise that a top-performing team is key to attaining customer success stories.
              </Content>
            </FlexItem>
          </FlexVertical>
        </FadeInLeft>
        <FadeIn>
          <FlexBox margin={"2rem auto 5rem"} >
            <FlexItem  margin={"auto"}>
              <Img width={"23rem"} widthMiniScreen={"25rem"}
                   src="cached/programmer-icon-png-8-300x200.png"
                   alt="itrazo-industries"
              />
              <PageH2Minor4>
               Janny
              </PageH2Minor4>
              <PageH2Minor3>
                CEO/Director
              </PageH2Minor3>
              <Content>
                Business & I.T. pioneer who created<br />
                Mark.Tech's award-winning Digital<br />
                Traceability platform, and discovered<br />
                new ways to enable practical,<br />
                large-scale analysis of securely<br />
                encrypted, active digital identities.
              </Content>
            </FlexItem>
            <FlexItem  margin={"0 auto"}>
              <Img width={"23rem"} widthMiniScreen={"25rem"}
                   src="cached/programmer-icon-png-8-300x200.png"
                   alt="itrazo-industries"
              />
              <PageH2Minor4>
                Paul
              </PageH2Minor4>
              <PageH2Minor3>
                COO
              </PageH2Minor3>
              <Content>
                Supply chain expert who applies<br />
                experienced know-how to convert<br />
                traceability potential<br />
                into practical business solutions.
              </Content>
            </FlexItem>
            <FlexItem  margin={"0 auto"}>
              <Img width={"23rem"} widthMiniScreen={"25rem"}
                   src="cached/programmer-icon-png-8-300x200.png"
                   alt="itrazo-industries"
              />
              <PageH2Minor4>
               Mark
              </PageH2Minor4>
              <PageH2Minor3>
                Public and Agri sector Advisor
              </PageH2Minor3>
              <Content>
                A forward thinking and commercially<br /> minded leader with over 25 years<br /> executive level experience in<br /> Agriculture and Public sector<br /> engagement.
              </Content>
            </FlexItem>

          </FlexBox>

        </FadeIn>

        </ColorWhite>
      </BackgroundColorDark>
    </PageSection>
    <PageSection>
      <FadeInLeft>
        <FlexVertical>
          <FlexItem  margin={"4.5rem auto 0"}>
            <Img width={"25rem"} widthMiniScreen={"30rem"}
                 src="cached/iTrazo_tracetech_Call_out.png"
                 alt="itrazo-industries"
            />
          </FlexItem>
          <FlexItem  margin={"1.8rem auto 0"}>
            <PageH2Minor>
              OUR TECHNICAL TEAM
            </PageH2Minor>
          </FlexItem>
          <FlexItem margin={"-3rem auto 0"}>
            <Content>
              Our technical team’s design-thinking is core to our human-centred product development to stay ahead of any competition.<br />
              Our dedication and passion is evident in the quality and simplicity of our products, services and relationships.
            </Content>
          </FlexItem>

        </FlexVertical>

      </FadeInLeft>

    </PageSection>

  </PageBody>
);
export default About;
