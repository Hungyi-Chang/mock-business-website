/**
 * This file we define several animated div components.
 * As all these components should start animation only when they enter viewport,
 * we use the ViewportHOC to pass signals for them.
 *
 * To animate an element, just wrap it with a component here.
 *
 * @author Dapeng Zhang
 * @version 1.0.0
 */

import styled, { css } from 'styled-components';
import HOC from './ViewportHOC';
import { ScreenSize } from '../Styles';

// define keyframes
const keyframes = {
  fadeInUp: () => css`
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
  
    to {
      opacity: 1;
      transform: none;
    }
  }`,
  fadeInLeft: () => css`
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
  
    to {
      opacity: 1;
      transform: none;
    }
  }`,

  fadeIn: () => css`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
  
    to {
      opacity: 1;
    }
  }`,
};

// define animation styles
const animated = () => css`
  animation-duration: 1s;
  animation-fill-mode: forwards;`;

// define animations
const Animation = ({
  fadeInUp: () => css`
    animation-name: fadeInUp;

    ${animated}
    ${keyframes.fadeInUp}`,
  fadeInLeft: () => css`
  animation-name: fadeInLeft;

  ${animated}
  ${keyframes.fadeInLeft}`,
  fadeIn: () => css`
  animation-name: fadeIn;

  ${animated}
  ${keyframes.fadeIn}`,
});


/**
 * include an animation when the div enter viewport using HOC and props
 *
 * NOTE: only play animation when screensize is larger than middle
 */

export const FadeInUp = HOC(styled.div`
  @media only screen and (min-width: ${ScreenSize.middle}) {
    ${(props) => {
    const { enterViewport } = props;
    if (enterViewport) {
      return Animation.fadeInUp;
    }
    return 'opacity: 0';
  }}
}
`);

export const FadeInLeft = HOC(styled.div`
@media only screen and (min-width: ${ScreenSize.middle}) {
  ${(props) => {
    const { enterViewport } = props;
    if (enterViewport) {
      return Animation.fadeInLeft;
    }
    return 'opacity: 0';
  }}
}
`);

export const FadeIn = HOC(styled.div`
@media only screen and (min-width: ${ScreenSize.middle}) {
  ${(props) => {
    const { enterViewport } = props;
    if (enterViewport) {
      return Animation.fadeIn;
    }
    return 'opacity: 0';
  }}
}
`);

export default null;
