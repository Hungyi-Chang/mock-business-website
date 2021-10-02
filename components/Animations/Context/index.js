/**
 * The context value is the current window.pageYOffset
 * This value is required by animations to start animation when element enters viewport
 * The purpose of using this context is to limit the number of eventlisteners to be only one
 * The provide is in /Page/_app with the value bound with a single window.onscroll event listener
 * The consumer is in /components/Animations
 *
 * @version: 1.0.0
 */
import React from 'react';

export const ScrollTopContext = React.createContext(0);

export default null;
