/**
 * Brand logo in header
 *
 * @author Dapeng Zhang
 * @version 1.0.0
 */

import React from 'react';
import styled from 'styled-components';


const Brand = styled.div`
  padding: 0rem 1rem;
  width: 20rem;
  margin-top: -3rem;
`;

const Icon = styled.img`
  width: 100%;
`;

export default () => (
  <Brand>
    <Icon
      src="/cached/Mark_Tech_Logo.png"
      alt="iTrazo_Tracetech-Logo"
    />
  </Brand>
);
