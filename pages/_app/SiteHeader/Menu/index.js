/**
 * @version 1.0.0
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { UnstyledButton, ThemeColor, ScreenSize } from '../../../../components/Styles';

const MenuBar = styled.div`

  width: 15px;
  height: 2px;
  background-color: black;
  margin: 3px 0;
  border-radius: 1px;

  @media screen and (max-width: ${ScreenSize.small}) {
    width: 10px;
  }
`;

const Button = styled(UnstyledButton)`
  position: absolute;
  right: 2rem;
  top: 1rem;
  background: white;
  padding: 8px 12px;
  height: 40px;
  border-radius: 5px;
  float: right;
  display: none;

  &:hover{
    background: ${ThemeColor};

    div{
      background: white;
    }
  }

  @media screen and (max-width: ${ScreenSize.middle}) {
     display: block;
  }

  @media screen and (max-width: ${ScreenSize.small}) {
    height: 34px;
  }
`;

const Menu = (props) => {
  const { onClick } = props;

  return (
    <Button
      type="button"
      aria-label="navigation dropdown label"
      onClick={onClick}
    >
      <MenuBar />
      <MenuBar />
      <MenuBar />
    </Button>
  );
};

Menu.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Menu;
