/**
 * Home Page service section structure
 *
 * @version 1.0.0
 */
import React from 'react';
import styled from 'styled-components';
import {
  PageSection,
  Content,
  PageH3,
  Link,
  Card,
  ToOccupy5,
  PageH3black,
  ScreenSize,
} from '../../../Styles';
import { FadeIn, FadeInUp} from '../../../Animations';

const ServiceItem = styled(ToOccupy5)`
  position: relative;
  margin-top: 10rem;
  overflow: visible;
  height: 50rem;
  @media screen and (max-width: ${ScreenSize.small}) {
    height: 60rem;
  }
`;

const FadeInUpAligned = styled(FadeInUp)`
  height: 100%;
`;

const ServiceCard = styled(Card)`
  //padding-top: 12rem;
  height: 100%;
   margin-left: 15rem;
  p {
    padding: 0;
  }
`;

const ImageWrapper = styled(FadeIn)`
  width: 60rem;
  height: 70rem;
  // overflow: hidden;
  position: absolute;
  left: 50%;
  top: 0;
  margin-left: -35rem;
  margin-top: -5rem;
  z-index: 100;

  img {
    width: auto;
    height: 100%;
    object-fit: cover;
    // margin-right: 60rem;
  }
`;

export default () => (
  <PageSection>
    <ServiceItem>

      <FadeInUpAligned>
        <ImageWrapper>
          <img
              src="/cached/iTrazo_tracetech_traceability.png"
              alt="Internet-of-things-iot"
          />
        </ImageWrapper>
      </FadeInUpAligned>
    </ServiceItem>
    <ServiceItem>
      <FadeInUpAligned>
        <ServiceCard>
          <PageH3>HARNESS THE POWER OF DIGITAL TRACABILITY</PageH3>
          <Content>
            <PageH3black>A new way to build superior business understanding and control:</PageH3black>
            A new way to build superior business understanding and control:<br />
            • individually identify, trace and track products, <br />cases, pallets, containers or other assets<br />
            • automatically capture data with available scanning technologies<br />
            • employ real time geolocation, anywhere on the globe<br />
            • engage consumers at point of purchase and consumption<br />
          </Content>
          <Link href="/services/digital-identity">Learn More &rarr;</Link>
        </ServiceCard>
      </FadeInUpAligned>
    </ServiceItem>
  </PageSection>
);
