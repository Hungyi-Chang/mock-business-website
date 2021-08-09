/**
 * Privacy Policy page contents
 *
 * @author Beier Nie
 * @version 1.0.0
 */
import React from 'react';
import Head from 'next/head';
import {
    PageBody,
    PageH1,
    Content,
    Link,
    PageH2Minor,
    PageSection2
} from '../../components/Styles';

const PrivacyPolicy = () => (
    <PageBody>
        <Head>
            <title>Privacy Policy</title>
            <meta name="Description" content="Privacy Policy" />
        </Head>
        <PageSection2>
            <PageH1>Privacy Policy</PageH1>
            <PageH2Minor>Use of Personal Information</PageH2Minor>
            <Content>
                We do not collect any personal information unless you voluntarily
                provide it, e.g. by
                {' '}
                <Link href="/contact/enquiry#page">contacting us</Link>
                .
                Personal information submitted will not be transferred to any
                non-affiliated third parties unless otherwise stated at the time of
                collection. When you submit personally identifiable information it is
                used only for the purpose stated at the time of collection.
            </Content>
            <PageH2Minor>Cookies</PageH2Minor>
            <Content>We do not use cookies or other tracking technologies.</Content>
            <PageH2Minor>Log Files</PageH2Minor>
            <Content>
                Like most standard website servers, we may use website statistic
                packages such as Google Analytics to analyze trends in how our website
                is accessed and utilized. Information monitored includes internet
                protocol (IP) addresses, geographic location of visitors (country,
                city), browser type, internet service provider (ISP), referring/exit
                pages, platform type, date/time stamp, time spent on pages, and keywords
                used to find our site via search engines. This information is anonymous
                and cannot be directly linked to individual users. We may use it to
                identify high-use or low-use areas of the site, pinpoint problem areas
                of the site, analyze broad demographic trends in our visitors, and make
                decisions about how to make it easier for people to find and navigate
                our website.
            </Content>
            <PageH2Minor>Links</PageH2Minor>
            <Content>
                This website may contain links to other sites. Please be aware that we
                are not responsible for the privacy practices of such other sites. We
                encourage you to be aware when you leave our site to read the privacy
                statements of each and every Web site that collects personally
                identifiable information. This privacy statement applies solely to
                information collected by us and by this website.
            </Content>
            <PageH2Minor>Contact Information</PageH2Minor>
            <Content>
                If users have any questions or suggestions regarding our privacy policy,
                please
                {' '}
                <Link href="/contact/enquiry#page">contact us</Link>
                .
            </Content>
        </PageSection2>
    </PageBody>
);
export default PrivacyPolicy;
