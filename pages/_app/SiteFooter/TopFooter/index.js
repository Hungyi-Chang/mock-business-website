import React from 'react';
import styled from 'styled-components';
import {  ScreenSize } from '../../../../components/Styles';

const TopFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #ffffff;
  padding: 2.5rem;
  background-color: #434444;
  font: 600 15px/1.4 "Gill Sans", sans-serif;

  @media screen and (max-width: ${ScreenSize.small}) {
    font-size: 2rem;
  }
  img {
     object-fit: contain;
      margin: 0 auto 1rem;
      width: 60px;
      height: auto;

      @media screen and (max-width: ${ScreenSize.small}) {
        width: 45px;
        height: auto;
      }
`;


export default () => (

    <TopFooter>
        <img src='/cached/iTrazo_tracetech_footer_Icon.png' alt='iTrazo_Tracetech_logo'/>
        GET IN TOUCH WITH YOUR ONE STOP TRACEABILITY SOLUTION PARTNER
    </TopFooter>
);
