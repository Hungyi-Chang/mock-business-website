/**
 * Here we defines all the reuseable styled components
 *
 * @author Dapeng Zhang, Beier Nie
 * @version 1.0.0
 */

import styled, { css } from 'styled-components';
import UnstyledSlider from 'react-slick';

/* ------------------variables-------------------- */

export const ThemeColor = '#f1762b';

export const ScreenSize = {
  large: '1065px',
  middle: '825px',
  small: '568px',
};

export const reuseableStyles = {
  contentStyle: () => css`
    line-height: 175%;
    letter-spacing: 0.05rem;
    font: 100 1.5rem/1.5 'Open Sans', arial, sans-serif;
    @media only screen and (max-width: ${ScreenSize.small}) {
     font: 100 1.8rem/1.4 sans-serif;
    }
  `,
  h1Style: () => css`
  font: 900 3.6rem/1.4 'Open Sans', sans-serif;
  @media only screen and (max-width: ${ScreenSize.small}) {
     font: 900 3.8rem/1.4 sans-serif;
    }
  `,
  h1Style2: () => css`
 
     margin-top: -0.5rem;
    margin-bottom: -0.5rem;
    letter-spacing: 0.05em;
    font: bold 2.4rem/1.4 'Open Sans', arial, sans-serif;
      @media only screen and (max-width: ${ScreenSize.small}) {
      font: bold 2.6rem/1.4 'Open Sans', arial, sans-serif;
    }
    
  `,
  h1Style3: () => css`
   margin-top: -0.5rem;
    margin-bottom: -0.5rem;
    letter-spacing: 0.05em;
    font: 600 1.9rem/1.4 'Open Sans', arial, sans-serif;
      @media only screen and (max-width: ${ScreenSize.small}) {
      font: 600 2.2rem/1.4 'Open Sans', arial, sans-serif;
    }
  `,
  h1Style4: () => css`
    margin-bottom: -0.5rem;
    letter-spacing: 0.05em;
    font: 600 2.4rem/1.4 'Open Sans', arial, sans-serif;
      @media only screen and (max-width: ${ScreenSize.small}) {
      font: 700 2.6rem/1.4 'Open Sans', arial, sans-serif;
    }
  `,
    h1Style5: () => css`
    margin-bottom: -0.5rem;
    letter-spacing: 0.05em;
    font: 600 2.4rem/1.4 'Open Sans', arial, sans-serif;
      @media only screen and (max-width: ${ScreenSize.small}) {
      font: 700 2.6rem/1.4 'Open Sans', arial, sans-serif;
    }
    
    
    `



};

/* ----------------styled html elements---------------------- */

export const UnstyledButton = styled.button`
  display: block;
  background: none;
  border: none;
  cursor: pointer;

  &,
  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
    filter: alpha(opacity=50);
  }
`;

export const Strong = styled.strong`
  font-weight: 700;
`;

export const H1 = styled.h1`
  ${reuseableStyles.h1Style};
`;
export const H1_2 = styled.h1`
  ${reuseableStyles.h1Style2};
`;
export const H2 = styled.h2`
  ${reuseableStyles.h1Style};
`;
export const Font_1 = styled.h1`
font: 600 3.5rem/1.4 'Open Sans', arial, sans-serif;
letter-spacing: 0.2rem;
`;

/* ------------------------------------------------------- */

export const PageH1 = styled(H1)`
  width: auto;

  &::after {
    display: block;
    content: '';
    margin-top: 0.2em;
    height: 0.15em;
    width: 7.3rem;
    background-image: ${ThemeColor};
    background-image: linear-gradient(
      to right,
      ${ThemeColor} 25%,
      rgba(241, 118, 43, 0.5) 100%
    );
  }
`;
export const PageH1Minor = styled(H2)`
  width: auto;

  &::after {
    display: block;
    content: '';
    margin-top: 0.2em;
    height: 0.15em;
    width: 7.3rem;
    background-image: ${ThemeColor};
    background-image: linear-gradient(
      to right,
      ${ThemeColor} 25%,
      rgba(241, 118, 43, 0.5) 100%
    );
  }
`;

export const PageBody = styled.div`
  width: 100%;
`;

export const PageBodyRedirect = styled.div`
  font-size: 4rem;
  padding: 10rem;
`;

export const PageSection = styled.div`
  position: relative;
  min-height: 20rem;
  overflow: hidden;
  width: 100%;
  // max-width: 1400px;
  // margin: auto;
  // padding: 4rem 0;
`;
export const PageSection2 = styled.div`
  position: relative;
  min-height: 20rem;
  overflow: hidden;
  width: 90%;
  // max-width: 1400px;
  margin: 5rem auto 0;
  // padding: 4rem 0;
`;
export const PageSection3 = styled.div`
  position: relative;
  padding:0 3rem 0;
  min-height: 20rem;
  overflow: hidden;
  width: 90%;
  // max-width: 1400px;
  margin: 5rem auto 0;
  // padding: 4rem 0;
`;
export const SliderSection = styled.div`
  position: relative;
    // min-height: 20rem;
    //overflow: hidden;
    // width: 100%;
    // max-width: 1400px;
    margin: auto;
    //padding: 4rem 0;
`;

export const PageH2 = styled.h1`
  ${reuseableStyles.h1Style};
  line-height: 1.1;
`;

export const PageH2Minor = styled.h2`
  ${reuseableStyles.h1Style};
  line-height: 1.1;
`;
export const PageH2Minor2 = styled.h2`
  ${reuseableStyles.h1Style2};
  line-height: 1.1;
`;

export const PageH2Minor_left = styled.h2`
  ${reuseableStyles.h1Style};
  text-align-last: left;
  line-height: 1.1;
`;
export const PageH2Minor3 = styled.h2`
  ${reuseableStyles.h1Style3};
  margin-top:1rem;
  
  line-height: 1.1;
`;

export const PageH2Minor4 = styled.h2`
  ${reuseableStyles.h1Style4};
  line-height: 1.1;
`;
export const PageH2Minor5 = styled.h2`
${reuseableStyles.h1Style5};
  line-height: 1.1;
`;
export const PageH2Minor6 = styled.h2`
  ${reuseableStyles.h1Style2};
  font-size: 2rem;
  margin-top:1rem;
  text-align-last: left;
  line-height: 140%;
`;
export const PageH2Minor7 = styled.h2`
  ${reuseableStyles.h1Style2};

  margin-top:1rem;
  text-align-last: left;
  line-height: 140%;
   margin-top: -0.5rem;
    margin-bottom: -0.5rem;
    letter-spacing: 0.05em;
    font: 200 1.5rem/1.4 'Open Sans', arial, sans-serif;
      @media only screen and (max-width: ${ScreenSize.small}) {
      font: 200 1.8rem/1.4 'Open Sans', arial, sans-serif;
    }
`;

export const PageH3 = styled.h3`
  // margin-top: 3rem;
  color: #e33622;
  font-size: 2rem;
`;
export const PageH3black = styled.h3`
  
  color: black;
  font-size: 2rem;
`;

export const Content = styled.p`
  ${reuseableStyles.contentStyle}
`;
export const Content_left =styled.p`
${reuseableStyles.contentStyle};
 text-align-last: left;
//float: left;
// margin-left: -22rem;
`;
export const Content_left2 =styled.p`
${reuseableStyles.contentStyle};
 text-align-last: left;
 line-height: 180%;
 ${(props) => {
  const {margin} = props;
  return `
          margin: ${margin};
          
  `;
}}
    letter-spacing: 0.05rem;
    font: 100 1.5rem/1.5 'Open Sans', arial, sans-serif;
    @media only screen and (max-width: ${ScreenSize.small}) {
     font: 100 1.8rem/1.4 sans-serif;
    }
// margin-left: -22rem;
`;
export const Img =styled.img`
   ${(props) => {
  const {width, widthMiniScreen, margin, float} = props;
  return `width: ${width};
          margin: ${margin};
          float:${float};
         
  
   @media screen and (max-width: ${ScreenSize.small}) {
        width:${widthMiniScreen};
      };
  `;
}};
     object-fit: contain;
      height: auto;
`;

export const Image = styled.img`
  width: 30rem;
  height: 15rem;
  object-fit: cover;
  margin: auto;
`;
export const ImgBanner =styled.img`
  width: 100%;
  height: auto;
  margin-bottom:4rem
`;

export const Link = styled.a`
  cursor: pointer;
  color: black;
`;

export const Card = styled.div`
  //padding: 2rem;
   //border: 4px solid rgba(150, 150, 150, 0.5);
  background: white;
  margin: 0 2rem 2rem 0;
`;

/* ------------------Coloring------------------------- */

export const BackgroundColorDark = styled.div`
  background-color: #424242;
  width: 100%;
  overflow: hidden;

  h1 {
    color: white;
  }
`;

export const BackgroundColorLight = styled.div`
 
  background-color: #ffffff;
  height: 68rem;
  width: 38rem;
  border-radius:2rem;
  overflow: hidden;
  box-shadow: 5px 10px 18px grey;
  margin-bottom: 3rem;
  ${(props) => {
  const { boxShadow, height } = props;
  return `box-shadow: ${boxShadow};
          height: ${height};
  
  `;
}}
`;

export const BackgroundColorTheme = styled.div`
  background: ${ThemeColor};
  background: linear-gradient(
    135deg,
    rgba(238, 72, 35, 1) 0%,
    rgba(241, 118, 43, 1) 25%,
    rgba(241, 118, 43, 1) 50%,
    #e7c137 100%
  );
  width: 100%;
  overflow: hidden;
`;

export const ColorTheme = styled.div`
  color: ${ThemeColor};
`;

// when pass in a color property, use that property to replace white
export const ColorWhite = styled.div`
  color: white;
  ${(props) => {
    const { color } = props;
    return `color: ${color};`;
  }}
`;

/* ------------------Positioning------------------------- */

export const ContentCentre = styled.div`
  text-align: center;
`;

/* ------------------Sizing------------------------ */

// pass in the padding; use middlePadding and smallPaading to define responsive paddings
export const Padding = styled.div`
  ${(props) => {
    const { padding, middlePadding, smallPadding } = props;
    return `
      padding: ${padding};

      @media only screen and (max-width: ${ScreenSize.middle}) {
        padding: ${middlePadding};
      }

      @media only screen and (max-width: ${ScreenSize.small}){
        padding: ${smallPadding};
      }
    `;
  }};
`;

export const Margin = styled.div`
  margin: ${(props) => {
    const { margin } = props;
    return margin;
  }};
`;

export const Hidden = styled.div`
  overflow: Hidden;
`;

/* ------------------Simple Grid System------------------ */

// when pass in "inline", display as top-aligned inline block
const ToOccupy = styled.div`
  @media only screen and (max-width: ${ScreenSize.middle}) {
   width: 100%;
  }

  
`;

export const ToOccupy5 = styled(ToOccupy)`
  width: 50%;
`;

export const ToOccupy3 = styled(ToOccupy)`
  width: 30%;
`;
export const ToOccupy7 = styled(ToOccupy)`
  width: 70%;
`;

/* --------------------------Feature list styles------------------------- */

export const FeatureH2 = styled(PageH2Minor)`
  position: relative;
  margin: 0;
  padding: 0;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1rem;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 1);
  }
`;

export const FeatureH3 = styled(PageH3)`
  font-size: 2.4rem;
  @media only screen and (max-width: ${ScreenSize.small}) {
    font-size: 12px;
  }
  font-weight: 500;
  margin: 1rem 0;
  display: flex;

  span {
    margin: auto 1rem auto 0;

    svg {
      height: 4rem;
    }
  }
`;

export const FeatureContent = styled(Content)`
  padding: 0;
`;

export const FeatureUl = styled.ul`
  list-style-type: square;
  ${reuseableStyles.contentStyle}

  li p {
    line-height: 1.5;
    margin: 0.8rem 0;
  }
`;

/* --------------------------News list styles------------------------- */

export const NewsH3 = styled(PageH3)`
  font-weight: 500;
  line-height: 1.1;
  margin: 0;

  a {
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
  }
`;

export const NewsTime = styled(Content)`
  position: relative;
  margin: 0;
  padding: 0;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-bottom: 1px solid rgba(150, 150, 150, 0.3);
  }
`;

/* ----------------------------------React Slick styles------------------------------------- */

// padding here is to make sure that Prev/Next buttons are visible dispite of parent overflow=hidden
export const SliderWrapper = styled.div`
 // padding: 0 1rem;

  // @media only screen and (max-width: ${ScreenSize.large}) {
  //   padding: 0 3rem;
  // }
`;

export const Slider = styled(UnstyledSlider)`
  & > div > div > div > div > div:focus {
    outline: none;
  }
`;

export const PrevArrow = styled(UnstyledButton)`
  height: 1.5rem;
  width: 1.5rem;
  z-index: 1000;
  margin-left: 2rem;
  margin-top: -2rem;

  &::before {
    content: '';
    display: block;
    height: 1.5rem;
    width: 1.5rem;
    margin-top: -1rem;
    transform: rotateZ(45deg);

    border-left: 4px solid ${ThemeColor};
    border-bottom: 4px solid ${ThemeColor};
  }
`;

export const NextArrow = styled(UnstyledButton)`
  height: 1.5rem;
  width: 1.5rem;
  z-index: 1000;
  margin-right: 3rem;
  margin-top: -2rem;

  &::before {
    content: '';
    display: block;
    height: 1.5rem;
    width: 1.5rem;
    margin-top: -1rem;
    transform: rotateZ(225deg);

    border-left: 4px solid ${ThemeColor};
    border-bottom: 4px solid ${ThemeColor};
  }
`;
export const MenuItem = styled.div`
  &:hover {
     background-color: white;
  }
`;
export const FlexVertical = styled.div`
 width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1.5rem;
  align-items: flex-start;
  ${(props) => {
  const {margin} = props;
  return `
          margin: ${margin};
          
  `;
}}

`;
export const FlexItem = styled.div`

   ${(props) => {
  const {flex, margin, padding, display, float} = props;
  return `flex : ${flex};
          margin: ${margin};
          padding: ${padding};
          display: ${display};
          float:${float};
  
  `;
}};
`;
export const FlexBox = styled.div`
  display:flex;
  justify-content: space-around;
  padding: 2rem 8rem 0;
  @media screen and (max-width: ${ScreenSize.middle}) {
    flex-direction: column;
  }
  text-align: center;
  ${(props) => {
  const {flex, margin, padding,width} = props;
  return `flex : ${flex};
          margin: ${margin};
          padding: ${padding};
          width: ${width};
  
  `;
}};
`;

export default null;
