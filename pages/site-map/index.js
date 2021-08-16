/**
 * Site Map page contents
 *
 * @version 1.0.0
 */
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import {
    PageBody,
    PageH1,
    ToOccupy5,
    Link as OriginalLink,
    PageH2Minor,
    PageSection2,
    ContentCentre,
} from '../../components/Styles';

const Link = styled(OriginalLink)`
  display: block;
  width: fit-content;
  min-height: 48px;
  min-width: 48px;
  margin: auto;
`;

const SiteMap = () => (
    <PageBody>
        <Head>
            <title>Site Map</title>
            <meta name="Description" content="Site Map" />
        </Head>
        <PageSection2>
            <PageH1>Site Map</PageH1>
            <ContentCentre>
                <>
                    <ToOccupy5 inline>
                        <PageH2Minor>Home</PageH2Minor>
                        <Link href="/#page">Home Page</Link>
                    </ToOccupy5>
                    <ToOccupy5 inline>
                        <PageH2Minor>Technology</PageH2Minor>
                        <Link href="/products/itrazo#page">iTrazo</Link>
                        <Link href="/products/itrazokeys#page">iTrazokeys</Link>
                        <Link href="/products/itrazo-insights#page">iTrazo Insights</Link>
                    </ToOccupy5>
                </>
                <>
                    <ToOccupy5 inline>
                        <PageH2Minor>About Us</PageH2Minor>
                        <Link href="/about/about-us#page">About Us</Link>
                        <Link href="/about/industries#page">Industries</Link>
                        <Link href="/about/our-partners#page">Our Partners</Link>
                        <Link href="/careers#page">Careers</Link>
                    </ToOccupy5>
                    <ToOccupy5 inline>
                        <PageH2Minor>Service</PageH2Minor>
                        <Link href="/services/internet-of-things#page">
                            Internet of Things (IoT)
                        </Link>
                        <Link href="/services/digital-identity#page">Digital Identity</Link>
                    </ToOccupy5>
                </>
                <>
                    <ToOccupy5 inline>
                        <PageH2Minor>Contact</PageH2Minor>
                        <Link href="/contact/enquiry#page">Contact Us</Link>
                        <Link href="/news/news-overview#page">Latest News</Link>
                    </ToOccupy5>
                    <ToOccupy5 inline>
                        <PageH2Minor>Resources</PageH2Minor>
                        <Link href="/privacy-policy#page">Privacy Policy</Link>
                        <Link href="/terms-of-use#page">Terms Of Use</Link>
                    </ToOccupy5>
                </>
            </ContentCentre>
        </PageSection2>
    </PageBody>
);
export default SiteMap;
