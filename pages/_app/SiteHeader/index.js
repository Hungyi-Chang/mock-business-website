/**
 * Site Header.
 * On mobile view navigation will show as dropdown
 * @author Dapeng Zhang
 * @version 1.0.0
 */
import React,{useState} from 'react';
import styled from 'styled-components';
import { FaAlignRight } from 'react-icons/fa'
import Brand from './Brand'



const HeaderPanel = styled.div`
  position: fixed;
  top: 0; /* Stick it to the top */
  //max-height: 70px;
  height: 145px;
  width: 100%;
  z-index:150; 
  display: grid;
  grid-template-areas: "logo nav";
  /* Cosmetics */
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
 @media screen and (min-width: 1200px) {
    padding-left: 2rem;
    
 }
 @media screen and (max-width: 600px) {
    height:15rem;
 }

`;

// eslint-disable-next-line no-unexpected-multiline
const Ul = styled.ul`
  height: ${props => { if (props.toggle===false){return 0;}}};
  opacity: 0.91;
  list-style-type: none;
  background-color:#E0E0E0;
  position: absolute;
  top:-2.3rem;
  width: 100%;
  margin-bottom: 6.5rem;
  font: bold 14px/1.4 'Open Sans', arial, sans-serif;
  align-items: center;
  justify-items: center;
  a {
   color: #3e4f64;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  display: inline-block;
  padding: 15px 40px;
  position: relative;
  left: 15rem;
}
a:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 4.8px;
  left: 50%;
  position: absolute;
  background: #e33622;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
a:hover:after { 
  width: 100%; 
  left: 0; 
}
@media screen and (max-width: 1600px) {
    a {
   color: #3e4f64;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  display: inline-block;
  padding: 15px 28px;
  position: relative;
  left: 2rem;
}
 }

@media screen and (min-width: 1200px) {
    button {
        display: none;
    }
    height: auto;
    display: flex;
    background-color: white;
    position: static;
    opacity: 1;
 }
`;
const Li = styled.li`
@media screen and (min-width: 1200px) {
    padding: 10px 0;
    overflow: visible;
    height: auto;
 }
 padding: 10px 0;
 overflow: ${props => { if (props.toggle===false){return 'hidden';}}};
 height: ${props => { if (props.toggle===false){return 0;}}};
`;
const Button = styled.button`
    font-size: 30px;
    position: absolute;
    top: 5.4rem;
    right: 1.5rem;
    color: black;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    float: right;
     @media screen and (max-width: 600px) {
    top: 3.9rem;
    right: -0.2rem;
 }
`;


const H2 = styled.h2`

margin-top:2.3rem;
@media screen and (min-width: 1200px) {
margin-left:0rem;
margin-top: 1.5em;

span {
        display: inline-block;
        vertical-align: baseline;
        zoom: 1;
        *display: inline;
        *vertical-align: auto;
        position: relative;
        padding: 0 20px;

        &:before, &:after {
            content: '';
            display: block;
            position: absolute;
            top: 4.3em;
            min-width:1800px ;
            border-top: 0.6rem solid #babcbe;
        }

        &:before { right: 100%; }
        &:after { left: 100%; }
    }
}
  
`;



export default () => {
const [toggle, setToggle] = useState(false);




  return (
    <HeaderPanel>
        <H2>
        <span>

            <Brand/>
       </span>
         </H2>
            <Ul toggle={toggle}>
                <Button onClick={()=>{setToggle(!toggle)}}>
                    <FaAlignRight />
                </Button>
                <Li toggle={toggle}><a href="/">HOME</a></Li>
                <Li toggle={toggle}><a href="/about">ABOUT</a></Li>
                <Li toggle={toggle}><a href="/platform">PLATFORM</a></Li>
                <Li toggle={toggle}><a href="/process">PROCESS</a></Li>
                <Li toggle={toggle}><a href="/partner">PARTNER</a></Li>
               <Li toggle={toggle}><a href="/news/news-overview">NEWS</a></Li>
                <Li toggle={toggle}><a href="/contact/enquiry">CONTACT</a></Li>
            </Ul>
    </HeaderPanel>
  );
};
