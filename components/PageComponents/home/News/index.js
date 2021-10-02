/**
 * Home Page news section structure
 *
 * @version 1.0.0
 */
import React from 'react';
import styled from 'styled-components';
import {
  SliderSection,
  Strong,
  Content,
  NewsH3,
  NewsTime,
  BackgroundColorDark,
  Link,
  Card,
  Slider,
  SliderWrapper,
} from '../../../Styles';
import { FadeIn} from '../../../Animations';

const News = styled(BackgroundColorDark)`
  h2 {
    color: white;
  }
`;

const SliderItem = styled(FadeIn)`
  padding: 0 2rem;
`;

const NewsCard = styled(Card)`
  padding: 3rem;
`;

export default () => (
  <News>
    <SliderSection>
      {/*<FadeInLeft>*/}
      {/*  <PageH1Minor>News</PageH1Minor>*/}
      {/*</FadeInLeft>*/}
      <SliderWrapper>
        <Slider
          // prevArrow={<PrevArrow aria-label="PrevArrow" />}
          // nextArrow={<NextArrow aria-label="NextArrow" />}
          //   customPaging= { () => (
          // <div className="ft-slick__dots--custom">
          //   <div className="loading" />
          // </div>
          // )}
            autoplay= {true}
            autoplaySpeed={2000}
            arrows={false}
          slidesToShow={1}
          slidesToScroll={1}
          infinite={true}
          dots
          responsive={[
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          <SliderItem>
            <NewsCard>
              <NewsH3>
                <Link href="/news/covid-19">
                  This tracebility platform will help stop the spread of COVID-19
                </Link>
              </NewsH3>
              <NewsTime>FINAL 31.3.20</NewsTime>
              <Content>
                A real-time location tracking system is acailable now, that police and defence forces could be using to pinpoint Australians that are not doing the right thing with social distancing and delf-isolation.
              </Content>
              <Link href="/news/covid-19">Learn More &rarr;</Link>
            </NewsCard>
          </SliderItem>
          <SliderItem>
            <NewsCard>
              <NewsH3>
                <Link href="/news/5-ways-traceability-technologies">
                  5 ways traceability technologies can lead to a safer, more sustainable world
                </Link>
              </NewsH3>
              <NewsTime>Posted on September 13, 2019</NewsTime>
              <Content>
                <Strong>2019 Australian Supply Chain & Logistics Awards</Strong>
              </Content>
              <Content>
                We all know the world is rife with environmental, economic and social problems. What few of us realize is that many of these issues arise because today’s supply chains lack visibility and transparency at every stage of the journey, from raw materials to consumer products.
              </Content>
              <Link href="/news/5-ways-traceability-technologies">Learn More &rarr;</Link>
            </NewsCard>
          </SliderItem>
          <SliderItem>
            <NewsCard>
              <NewsH3>
                <Link href="/news/enhancing">
                  Enhancing Australia’s systems
                  for tracing agricultural
                  production and products
                </Link>
              </NewsH3>
              <NewsTime>Traceability Working Group</NewsTime>
              <Content>
                <Strong>2019 Australian Supply Chain & Logistics Awards</Strong>
              </Content>
              <Content>
                We all know the world is rife with environmental, economic and social problems. What few of us realize is that many of these issues arise because today’s supply chains lack visibility and transparency at every stage of the journey, from raw materials to consumer products.
              </Content>
              <Link href="/news/enhancing">Learn More &rarr;</Link>
            </NewsCard>
          </SliderItem>
          <SliderItem>
            <NewsCard>
              <NewsH3>
                <Link href="/news/food-consumers">
                  Coronavirus: Food consumers will demand more digital traceability, post-Covid-19
                </Link>
              </NewsH3>
              <NewsTime>Lawrence Gullery12:56, Apr 01 2020</NewsTime>
              <Content>
                <Strong>2019 Australian Supply Chain & Logistics Awards</Strong>
              </Content>
              <Content>
                Digital traceability is about to move into first place in terms of what food consumers will demand post-Covid-19.
              </Content>
              <Link href="/news/food-consumers">Learn More &rarr;</Link>
            </NewsCard>
          </SliderItem>
        </Slider>
      </SliderWrapper>
    </SliderSection>
  </News>
);
