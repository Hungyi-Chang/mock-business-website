/**
 * Site Footer
 *
 * @version 1.0.1
 */
import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import CopyrightNotice from './CopyrightNotice';
import TopFooter from './TopFooter'

const FooterPanel = styled.div`
  position: relative;
  width:100%
  height: auto;
  background-repeat: no-repeat;
  background-size: 12em 12em;
  background-position: top left;
  z-index: 1;
  background-color: white;
`;


export default () => (
  <FooterPanel>
    < TopFooter/>
    <Navigation />
    <CopyrightNotice />
  </FooterPanel>
);
