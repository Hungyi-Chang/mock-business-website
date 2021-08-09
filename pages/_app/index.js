/**
 * Here we define the structure of the website.
 * Pages are rendered as <Component .../>
 * we also provide the window.onscroll listener to provide the window.pageYOffset
 * value animations need
 *
 * NOTE: we use window.pageYOffset rather tthan document.documentElement.scrollTop
 * as it support more browsers
 *
 * @author Dapeng Zhang
 * @version 1.0.0
 */

/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import { ScrollTopContext } from '../../components/Animations/Context';
import { ScreenSize } from '../../components/Styles';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above


const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  
    @media only screen and (max-width: ${ScreenSize.large}) {
      font-size: 8px;
    }

    @media only screen and (max-width: ${ScreenSize.medium}) {
      font-size: 6px;
    }

    @media only screen and (max-width: ${ScreenSize.small}) {
      font-size: 6px;
    }
  }

  body {
    margin: 0;
  }

  *{
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }              
`;

const PageBody = styled.div`
  background-color:white;
  padding-top: 120px;
  @media screen and (max-width: 600px) {
    padding-top: 85px;
 }
`;

class App extends React.Component {
  constructor() {
    super();
    this.mount = false;
    this.state = {
      scrollTop: 0,
    };
  }

  componentDidMount() {
    this.mount = true;
    // get window.pageYOffset dynamically
    window.addEventListener('scroll', () => {
      if (this.mount) {
        this.setState({
          scrollTop: window.pageYOffset,
        });
      }
    });
  }

  componentWillUnmount() {
    this.mount = false;
  }

  render() {
    const { Component, pageProps } = this.props;
    const { scrollTop } = this.state;
    return (
      <>
        <GlobalStyle />

          <SiteHeader/>



        <PageBody id="page">
          {/* provide the current window.pageYOffset value */}
          <ScrollTopContext.Provider value={scrollTop}>
            <Component scrollTop={scrollTop} {...pageProps} />
          </ScrollTopContext.Provider>
        </PageBody>

        <SiteFooter />

      </>
    );
  }
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default App;
