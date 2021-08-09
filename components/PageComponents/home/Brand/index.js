import React from 'react';
import styled from 'styled-components';
import {
    SliderSection,
    Slider,
    SliderWrapper,
} from '../../../Styles';
const Brand = styled.div`
  position: relative;
  width: 100%;
  max-height: 580px;
  color: white;
  background-color: black;
  // overflow: hidden;
  z-index: 0;

  * {
    font-family: Impact, Charcoal, sans-serif;
  }
`;

const Icon = styled.img`
  padding : 1rem 1rem 1rem 1rem;
  object-fit: cover;
  width: 100%;
  max-height: 580px;
`;
export default () => (
  <Brand>
      <SliderSection>
          <SliderWrapper>
              <Slider
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
                  <div>
                      <Icon
                          src="/cached/Demo.png"
                          alt="iTrazo_Tracetech-Logo"
                      />
                  </div>
                  <div>
                      <Icon
                          src="/cached/Demo.png"
                          alt="iTrazo_Tracetech-Logo"
                      />
                  </div>
                  <div>
                      <Icon
                          src="/cached/Demo.png"
                          alt="iTrazo_Tracetech-Logo"
                      />
                  </div>
              </Slider>
          </SliderWrapper>
      </SliderSection>
  </Brand>
);
