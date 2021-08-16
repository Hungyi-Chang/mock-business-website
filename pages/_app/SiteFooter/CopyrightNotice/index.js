/**
 * This is the copyright notice
 *
 * @version 1.0.0
 */

import React from 'react';
import styled from 'styled-components';
import {  ScreenSize } from '../../../../components/Styles';

const CopyrightNotice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #ffffff;
  padding: 1.5rem;
  background-color: #3e4f64;
  font: 200 11px/1.4 "Gill Sans", sans-serif;

  @media screen and (max-width: ${ScreenSize.small}) {
    font-size: 2rem;
  }
  img {
     object-fit: contain;
      margin: -5rem auto -3rem;
      width: 20rem;
      height: auto;

      @media screen and (max-width: ${ScreenSize.small}) {
        width: 90px;
        height: auto;
      }
`;

export default () => (
  <CopyrightNotice>
      <img src='/cached/Mark_Tech_Logo.png' alt='iTrazo_Tracetech_logo'/>
    © 2020 Mark.Tech Pty Ltd.<br /> All Rights Reserved
  </CopyrightNotice>
);
