/**
 * News Overview page contents
 *
 * @author Dapeng Zhang, Beier Nie
 * @version 1.0.0
 */
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import {
  PageBody,
  PageSection,
  Image as OriginalImage,
  BackgroundColorLight,
  Link,
  Padding,
  Hidden,
  PageH2Minor6, FlexBox, FlexVertical, FlexItem,
   ScreenSize, ImgBanner,PageH2Minor7
} from '../../../components/Styles';

const NewsButton = styled.button`

  float: left;
  width: 13rem;
  height: 3rem;
  text-decoration: none;
  color: white;
  background: black;
  padding: 0 1rem;
  border-radius: 0.1rem;
  text-align: center;
  &:hover {
    opacity: 0.8;
  }
  a {
  color: white;
  text-decoration: none;
   font: 400 16px/1.4 "Gill Sans", sans-serif;
  cursor: pointer;

  @media screen and (max-width: ${ScreenSize.large}) {
    font-size: 10px;
  }
  @media screen and (max-width: ${ScreenSize.small}) {
    font-size: 10px;
  }
  
  }
  
  outline: none;
  box-shadow: none;

`;


const Image = styled(OriginalImage)`
  max-height: 20rem;
  transition: transform 3s;
  margin: auto;
  object-fit: contain;

  &:hover {
    transform: scale(1.3);
  }
`;

const NewsOverview = () => (
  <PageBody>
    <Head>
      <title>Latest News</title>
      <meta name="Description" content="Latest News" />
    </Head>

    <PageSection>
      <ImgBanner
          src="/cached/iTrazo_tracetech_News.png"
          alt="COVID19-iTrazo-TraceTech"
      />

      <FlexBox margin={"auto"} padding={"1rem 5rem 0"} >

      <FlexItem margin={"auto"} padding={"1.5rem"}>
          <BackgroundColorLight>
            <FlexVertical margin={"auto"}>
              <FlexItem margin={"0 auto 0"}>
                  <Padding padding="2rem">
                    <Link href="/news/enhancing">
                      <Hidden>
                        <Image
                            src="/resources/images/news/enhancing.png"
                            alt="COVID19-iTrazo-TraceTech"
                        />
                      </Hidden>
                    </Link>
                  </Padding>
              </FlexItem>
              <FlexItem margin={"-3rem 0 3rem"}>
                <Padding padding="1rem">
                  <PageH2Minor6>
                    Enhancing Australia’s<br /> systems for tracing<br /> agricultural production<br /> and products
                    </PageH2Minor6>
                </Padding>

              </FlexItem>
              <FlexItem margin={"-1rem 0 0"}>

                  <Padding padding="0 1rem 0">
                    <PageH2Minor7>
                      A real-time location tracking system<br/>
                      is available now, that police and<br/>
                      defence forces could be using to pinpoint<br/>
                      Australians that are not doing<br/>
                      the right thing with social distancing and self-isolation.<br/><br/><br/><br/></PageH2Minor7>
                    <NewsButton>
                      <a href="/news/enhancing">
                        READ MORE
                      </a>
                    </NewsButton>
                  </Padding>
              </FlexItem>
            </FlexVertical>
          </BackgroundColorLight>
      </FlexItem>
        <FlexItem margin={"auto"}  padding={"1.5rem"}>
          <BackgroundColorLight>
            <FlexVertical margin={"auto"}>
              <FlexItem margin={"0 auto 0"}>
                <Padding padding="2rem">
                  <Link href="/news/food-consumers#page">
                    <Hidden>
                      <Image
                          src="/resources/images/news/food-consumers.png"
                          alt="COVID19-iTrazo-TraceTech"
                      />
                    </Hidden>
                  </Link>
                </Padding>
              </FlexItem>
              <FlexItem margin={"-2rem 0 3rem"}>
                <Padding padding="1rem">
                  <PageH2Minor6>
                    Coronavirus: Food<br/>consumers will<br/> demand more digital<br/> traceability, post-Covid-19
                  </PageH2Minor6>
                </Padding>

              </FlexItem>
              <FlexItem margin={"-1rem 0 0"}>

                <Padding padding="0 1rem 0">
                  <PageH2Minor7>
                    Digital traceability is about to move<br/> into first place in terms of what<br/>
                    food consumers will demand<br/> post-Covid-19.<br/> <br/><br/> <br/><br/> </PageH2Minor7>
                    <NewsButton>
                    <a href="/news/food-consumers#page">
                      READ MORE
                    </a>
                  </NewsButton>
                </Padding>
              </FlexItem>
            </FlexVertical>
          </BackgroundColorLight>
        </FlexItem>
        <FlexItem margin={"auto"}  padding={"1.5rem"}>
          <BackgroundColorLight>
            <FlexVertical margin={"auto"}>
              <FlexItem margin={"0 auto 0"}>
                <Padding padding="2rem">
                  <Link href="/news/5-ways-traceability-technologies">
                    <Hidden>
                      <Image
                          src="/resources/images/news/5-ways.png"
                          alt="COVID19-iTrazo-TraceTech"
                      />
                    </Hidden>
                  </Link>
                </Padding>
              </FlexItem>
              <FlexItem margin={"-4.5rem 0 3rem"}>
                <Padding padding="1rem">
                  <PageH2Minor6>
                    5 ways traceability<br/> technologies can lead<br/> to a safer, more<br/> sustainable world
                  </PageH2Minor6>
                </Padding>

              </FlexItem>
              <FlexItem margin={"-1rem 0 0"}>

                <Padding padding="0 1rem 0">
                  <PageH2Minor7>
                    We all know the world is rife with<br/>
                    environmental, economic and social<br/>
                    problems. What few of us realize is<br/> that many of these issues arise be-
                    <br/> cause today’s supply chains lack<br/> visibility and transparency at every
                    <br/> stage of the journey, from raw mate-<br/> rials to consumer products.<br/><br/></PageH2Minor7>
                  <NewsButton>
                    <a href="/news/5-ways-traceability-technologies">
                      READ MORE
                    </a>
                  </NewsButton>
                </Padding>
              </FlexItem>
            </FlexVertical>
          </BackgroundColorLight>
        </FlexItem>
      </FlexBox>

    </PageSection>

  </PageBody>
);
export default NewsOverview;
