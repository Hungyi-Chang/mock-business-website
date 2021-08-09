/**
 * Term of Use page contents
 *
 * @author Beier Nie
 * @version 1.0.0
 */
import React from 'react';
import Head from 'next/head';
import {
    PageBody,
    PageSection2,
    PageH1,
    Content,
    Link,
    PageH2Minor,
} from '../../components/Styles';

const TermsOfUse = () => (
    <PageBody>
        <Head>
            <title>Terms of Use</title>
            <meta name="Description" content="Terms of Use" />
        </Head>
        <PageSection2>
            <PageH1>Terms of Use</PageH1>
            <PageH2Minor>Conditions of Use</PageH2Minor>
            <Content>
                We will provide their services to you, which are subject to the
                conditions stated below in this document. Every time you visit this
                website, use its services or make a purchase, you accept the following
                conditions. This is why we urge you to read them carefully.
            </Content>
            <PageH2Minor>Privacy Policy</PageH2Minor>
            <Content>
                We do not collect or distribute your personal data, except when said
                data is provided for that purpose. For full details, please read our
                {' '}
                <Link href="/privacy-policy#page">Privacy Policy</Link>
                .
            </Content>
            <PageH2Minor>Copyright</PageH2Minor>
            <Content>
                Content published on this website (images, texts, graphics, logos) is
                the property of iTrazo Tracetech and/or its content creators and
                protected by international copyright laws. The entire compilation of the
                content found on this website is the exclusive property of iTrazo Tracetech.
            </Content>
            <PageH2Minor>Applicable Law</PageH2Minor>
            <Content>
                By visiting this website, you agree that the laws of Australia, without
                regard to principles of conflict laws, will govern these terms of
                service, or any dispute of any sort that might come between iTrazo Tracetech and you, or its business partners and associates.
            </Content>
            <PageH2Minor>License and Site Access</PageH2Minor>
            <Content>
                We grant you a limited license to access and make personal use of this
                website. You are not allowed to download or modify it. This may be done
                only with written consent from us.
            </Content>
        </PageSection2>
    </PageBody>
);
export default TermsOfUse;
