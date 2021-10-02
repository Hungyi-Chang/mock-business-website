/**
 * Home Page About section structure
 *
 * @version 1.0.0
 */
import React from 'react';
import styled from 'styled-components';
import {
  PageSection,
  Content,
} from '../../../Styles';
import { FadeInUp} from '../../../Animations';

const About = styled.div`
  
  background-size: 25% auto;
  background-position: 112% 25%;
  background-repeat: no-repeat;
`;
const Icon = styled.img`
  // padding : 1rem  1rem ;
  object-fit: cover;
  width: 100%;
  max-height: 580px;
`;

export default () => (
  <About>
    <PageSection>
      <FadeInUp>
        <Content>
          <Icon
              src="/cached/iTrazo_opportunity.png"
                alt="iTrazo_Tracetech-Logo"
          />
        </Content>
      </FadeInUp>
      <FadeInUp>
        <Content>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod <br />tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis<br /> nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea itrazo insights a consequat<br /> itrazo keys. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie<br /> consequat, pit lobortis nisl ut.
        </Content>
      </FadeInUp>


    </PageSection>
  </About>
);
