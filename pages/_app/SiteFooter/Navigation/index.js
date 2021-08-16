/**
 * Site navigation on footer
 *
 * @version 1.0.0
 */
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { ScreenSize } from '../../../../components/Styles';

const NavigationWrapper = styled.div`
  background-color: #3e4f64;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0.6rem 0;
  @media screen and (max-width: ${ScreenSize.small}) {
    flex-direction: column;
  }
`;



const Navigation = styled.nav`

  flex: 100%;
  color: white;
  display: flex;
  white-space: nowrap;
  text-align: center;
  margin: auto;

  @media screen and (max-width: ${ScreenSize.small}) {
    flex-direction: column;
    margin: auto;
  }
`;

const Item = styled.div`
  flex: 33%;
`;

const Line = styled.div`
  width: 6.5rem;
  margin: -0.5rem auto 2.3rem;
  border-bottom: 2px solid white;
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0 0.75rem;

  li {
    margin: 0.8rem 0.3rem;
  }
`;

const H3 = styled.p`
  
  font: 550 18px/1.4 "Gill Sans", sans-serif;
  margin-bottom: 0;

  @media screen and (max-width: ${ScreenSize.small}) {
    font-size: 20px;
  }
`;

const SubItem = styled.div`
  font: 400 14px/1.4 "Gill Sans", sans-serif;
 
  
  cursor: pointer;

  @media screen and (max-width: ${ScreenSize.small}) {
 
    font-size: 16px;
  }
`;

const SocialMedia = styled.div`
  margin: 2rem 2.7rem 0.5rem 4rem;

  a {
    margin-left: 0.8rem;
    margin-right: 2rem;
    color: white;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 3rem;
      height: 3rem;

      @media screen and (max-width: ${ScreenSize.small}) {
        width: 4rem;
        height: 4rem;
      }
    }

    span {
      display: inline-block;
      width: 0;
      height: 0;
      overflow: hidden;
    }
  }
`;

export default () => (

    <NavigationWrapper>
      <Navigation>
        <Item>
          <H3>ABOUT OUR COMPANY</H3>
          <Ul>
            <li>
             <Line/>
            </li>
            <li>
              <Link href="/about/about-us#page">
                <SubItem>About Us</SubItem>
              </Link>
            </li>
            <li>
              <Link href="/contact/enquiry">
                <SubItem>Contact Us</SubItem>
              </Link>
            </li>
            <li>
              <Link href="/news/news-overview#page">
                <SubItem>News</SubItem>
              </Link>
            </li>
          </Ul>
        </Item>
        <Item>
          <H3>CONNECT WITH US</H3>
          <Ul>
            <li>
              <Line/>
            </li>
            <SocialMedia>
              <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/hung-yi-chang-844770150/"
              >
                <img src='/cached/twitter.png' alt='twitter'/>
                <span>Twitter</span>
              </a>

              <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/hung-yi-chang-844770150/"
              >
                <img src='/cached/WebsiteContents_Insta.png' alt='twitter'/>
                <span>Instagram</span>
              </a>
              <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/hung-yi-chang-844770150/"
              >
                <img src='/cached/WebsiteContents_Linkedin.png' alt='twitter'/>
                <span>Linkedin</span>
              </a>
            </SocialMedia>

          </Ul>
        </Item>
        <Item>
          <H3>RESOURCES</H3>
          <Ul>
            <li>
              <Line/>
            </li>
            <li>
              <Link href="/terms-of-use#page">
                <SubItem>Terms of Use</SubItem>
              </Link>
            </li>

          </Ul>

        </Item>
      </Navigation>
    </NavigationWrapper>
);
