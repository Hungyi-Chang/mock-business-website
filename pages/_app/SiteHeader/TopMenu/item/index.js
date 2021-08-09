import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const MenuItem = styled.div`
  &:hover {
     background-color:black;
  }
`;

const Item  = (props) => {
    const { text } = props;
        return (
            <MenuItem>
                {text}
            </MenuItem>
        )

};

Item.propTypes = {
    text: PropTypes.string.isRequired,

};

export default Item;
