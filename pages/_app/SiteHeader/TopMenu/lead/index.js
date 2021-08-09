import React from 'react';
// import './index.css'
import PropTypes from "prop-types";
import styled from "styled-components";

 const MenuLead= styled.div`
    padding: 10px;
    background-color: #000000;
    color: white;
    display: inline-block;
    float: left;
    font-size: 18px;
    @media screen and (max-width: 600px) {
        position: absolute;
        top: 10px;
        left: 10px;
        float: none;
    }
`;

const Lead =(props) => {

    const { text } = props;
        return (
            <MenuLead>
                {text}
            </MenuLead>
        )
};

Lead.propTypes = {
    text: PropTypes.string.isRequired,

};

export default Lead;
