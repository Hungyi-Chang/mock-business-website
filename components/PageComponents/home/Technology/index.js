import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  BackgroundColorDark,
  PageSection,
  ToOccupy5,
  PageH3,
  Content,
  Link,
  PrevArrow,
  NextArrow,
  Slider as OriginalSlider,
  SliderWrapper,
  ScreenSize,
  PageH1Minor,
} from '../../../Styles';

import { FadeInUp, FadeInLeft, FadeIn } from '../../../Animations';

const Technology = styled(BackgroundColorDark)`
  background-image: url('/cached/electric-circuit-gray.png');
  background-position-x: 0%;
  background-position-y: 90%;
  background-repeat: no-repeat;
  background-size: 35%;
  color: white;
`;

const Slider = styled(OriginalSlider)`
  position: relative;
  z-index: 1000;

  .slick-list {
    overflow: visible;
  }
`;

const SliderNavWrapper = styled(SliderWrapper)`
  border-radius: 1rem;
  margin-bottom: 5rem;
  padding: 1.6rem 2.4rem;
  background-color: rgba(0, 0, 0, 0.5);
`;

const NavItem = styled.div`
  text-align: center;
  cursor: pointer;

  & > h3 {
    font-size: 2.4rem;
    margin: 1rem 0 0.6rem;
    white-space: nowrap;
  }

  & > div {
    width: 13.5rem;
    height: 8rem;
    margin: 0.8rem auto 2.4rem;
    padding: 0.4rem;
    position: relative;

    img {
      object-fit: cover;
      width: 12.7rem;
      height: 7.145rem;
    }

    &::after {
      content: '';
      width: 13.5rem;
      height: 8rem;
      position: absolute;
      background: white;
      left: 0;
      top: 0;
      margin-left: 0;
      margin-top: 0;
      border-radius: 5px;
      z-index: -1;

      ${(props) => {
    const { selected } = props;
    if (selected) {
      return `
      background: #f1762b;
      background: linear-gradient(135deg, rgba(238,72,35, 1) 0%, rgba(241,118,43, 1) 25%, rgba(241,118,43, 1) 50%, #E7C137 100%);
    `;
    }
    return '';
  }}
    }
  }
`;

const SliderDetailWrapper = styled(SliderWrapper)``;

const DetailItem = styled.div`
  height: 40rem;
  position: relative;
  padding: 0 1rem;
`;

const DetailMedia = styled(ToOccupy5)`
  transition: transform 0.5s ease-out;
  transform-origin: left top;

  border-radius: 1rem;
  padding: 2rem;
  position: relative;

  video {
    position: relative;

    &:focus {
      outline: none;
    }
  }

  & > * {
    width: 100%;
    border-radius: 1rem;
    object-fit: cover;
  }

  @media only screen and (min-width: ${ScreenSize.large}) {
    ${(props) => {
    const { play } = props;
    if (play) {
      return `
        transform: scale(2) translateY(-16rem);
      `;
    }
    return '';
  }}
  }
`;

const DetailContent = styled(ToOccupy5)`
  transition: transform 0.5s ease-out;
  transform-origin: right;

  @media only screen and (min-width: ${ScreenSize.large}) {
    ${(props) => {
    const { play } = props;
    if (play) {
      return `
      transform: scale(0);
    `;
    }
    return '';
  }}
  }
`;

export default () => {
  const nav = useRef();
  const detail = useRef();
  const [sliderNavSetting, setSliderNavSetting] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderDetailSetting, setSliderDetailSetting] = useState({});
  const videoRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    if (nav.current && detail.current) {
      setSliderNavSetting({
        asNavFor: detail.current,
      });
      setSliderDetailSetting({
        asNavFor: nav.current,
      });
    }
  }, [nav.current, detail.current]);
  return (
    <Technology>
      <PageSection>
        <FadeInLeft>
          <PageH1Minor>Our Technologies</PageH1Minor>
        </FadeInLeft>
        <SliderNavWrapper>
          <Slider
            ref={nav}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...sliderNavSetting}
            slidesToShow={3}
            slidesToScroll={1}
            focusOnSelect
            afterChange={(value) => setCurrentSlide(value)}
          >
            <FadeInUp>
              <NavItem selected={currentSlide === 0}>
                <PageH3>iTrazo®</PageH3>
                <div>
                  <img
                    src="/cached/iTrazo-small.jpg"
                    alt="iTrazo"
                  />
                </div>
              </NavItem>
            </FadeInUp>
            <FadeInUp>
              <NavItem selected={currentSlide === 1}>
                <PageH3>iTrazokeys®</PageH3>
                <div>
                  <img
                    src="/cached/iTrazokeys-small.jpg"
                    alt="iTrazokeys"
                  />
                </div>
              </NavItem>
            </FadeInUp>
            <FadeInUp>
              <NavItem selected={currentSlide === 2}>
                <PageH3>iTrazo Insights</PageH3>
                <div>
                  <img
                    src="/cached/iTrazo-Insights-small.jpg"
                    alt="iTrazo-Insights"
                  />
                </div>
              </NavItem>
            </FadeInUp>
          </Slider>
        </SliderNavWrapper>
        <SliderDetailWrapper>
          <Slider
            ref={detail}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...sliderDetailSetting}
            prevArrow={<PrevArrow aria-label="PrevArrow" />}
            nextArrow={<NextArrow aria-label="NextArrow" />}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={!playVideo}
            autoplaySpeed={5000}
            dots
            infinite
            speed={100}
          >
           
            <FadeIn>
              <DetailItem>
                <DetailMedia>
                  <img
                    className="fill"
                    src="/cached/iTrazokeys.jpg"
                    alt="iTrazokeys"
                  />
                </DetailMedia>
                <DetailContent>
                  <PageH3>iTrazokeys®</PageH3>
                  <Content>
                    Futureproof your products with iTrazokeys. Placing
                    iTrazokeys on every product protects your brand and connects
                    you with your consumers. The demand for traceability is key
                    for consumer engagement. Data-driven experiences, brand
                    loyalty, consumer engagement and market insights are just
                    some of the things made possible with our highly affordable
                    iTrazokeys.
                  </Content>
                  <Link href="/products/itrazokeys">Learn More &rarr;</Link>
                </DetailContent>
              </DetailItem>
            </FadeIn>
            <FadeIn>
              <DetailItem>
                <DetailMedia>
                  <img
                    className="fill"
                    src="/cached/iTrazo-Insights.jpg"
                    alt="iTrazo-Insights"
                  />
                </DetailMedia>
                <DetailContent>
                  <PageH3>iTrazo Insights</PageH3>
                  <Content>
                    iTrazo Insights gives you complete actionable knowledge in
                    real time of your products journey so you can maximize
                    operational excellence all the way through the supply chain.
                  </Content>
                  <Link href="/products/itrazo-insights">
                    Learn More &rarr;
                  </Link>
                </DetailContent>
              </DetailItem>
            </FadeIn>
          </Slider>
        </SliderDetailWrapper>
      </PageSection>
    </Technology>
  );
};
