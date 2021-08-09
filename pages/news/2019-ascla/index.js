/**
 * News about 2019 ascla page contents
 *
 * @author Beier Nie
 * @version 1.0.0
 */
import React from 'react';
import {
  PageBody,
  PageSection2,
  Content,
  ToOccupy5,
  Image,
  PageH2,
  ContentCentre,
  ColorTheme,
  Padding,
} from '../../../components/Styles';

const ASCLA2019 = () => (
  <PageBody>
    <PageSection2>
      <ColorTheme>
        <PageH2>BlockBit Solutions – Named Finalist</PageH2>
      </ColorTheme>
      <PageH2>
        2019 Australian Supply Chain & Logistics Awards
      </PageH2>
      <Content>Posted on November 22, 2019</Content>
      <ToOccupy5>
        <Padding padding="4rem"><Image src="/resources/images/news/news-ALCLA2019-logo.png" /></Padding>
        <Content>
          The Supply Chain & Logistics Association of Australia today officially
          announced the finalists for the longest running and most prestigious
          awards program in the industry. Having served the industry for 58
          years, the ASCL Awards are the most recognised and prestigious awards
          for an individual or a company to receive.
        </Content>
        <ContentCentre>
          <Content>
            <b>Information Technology and Management Award</b>
          </Content>
        </ContentCentre>
        <Content>
          Information remains the most important requirement of any supply
          chain. Information technology is where the majority of supply chain
          improvements have been made. Nominees for this award demonstrate where
          the use of existing or new technology has provided significant
          improvements to management of information and/or supply chain
          processes.
        </Content>
        <ContentCentre>
          <Content>
            <b>
              BlockBit Solutions - 2019 Information Technology and Management
              Award Finalists
            </b>
          </Content>
        </ContentCentre>
      </ToOccupy5>
      <ToOccupy5>
        <Padding padding="4rem"><Image src="/resources/images/news/news-ALCLA2019.png" /></Padding>
      </ToOccupy5>
    </PageSection2>
  </PageBody>
);
export default ASCLA2019;
