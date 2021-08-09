/**
 * News about New Zealand branch established page contents
 *
 * @author Beier Nie
 * @version 1.0.0
 */
import React from 'react';
import {
  PageBody,
  PageSection,
  Content,
  PageH2,
  ColorTheme,
} from '../../../components/Styles';

const NZBranchEstablished = () => (
  <PageBody>
    <PageSection>
      <ColorTheme>
        <PageH2>
          BlockBit Technology Solutions – New Zealand
        </PageH2>
      </ColorTheme>
      <Content>Posted on December 8, 2017</Content>
      <PageSection>
        <Content>
          BlockBit Solutions is pleased to announce the establishment of its New
          Zealand business in Palmerston North. The business will focus on
          Blockchain product development, education and consulting for customers
          across New Zealand, Australia and APAC region.
        </Content>

        <Content>
          BlockBit has established strategic alliance with CEDA (Central
          Economic Development Agency), ALGIM (Association of Local Government
          Information Management), Massey University and Palmerston North City
          Council to drive Blockchain awareness and promote growth of technology
          businesses in the region and create opportunities for technology
          specialists and IT graduates with a passion for emerging technology.
        </Content>

        <Content>
          Palmerston North City is consistently ranked among the most affordable
          cities in New Zealand to live in, and between itself and the
          surrounding towns, makes the Manawatu Region a warm and welcoming
          place to do business, live, work and study.
        </Content>

        <Content>
          BlockBit is open to partnering with and collaborating with other
          technology businesses in NZ to develop state of art emerging
          technology solutions for the private and public sector.
        </Content>

        <Content>
          We will be expanding our team in Palmerston North and hiring
          Blockchain Solution Architects, Designers, Analysts and Developers
          over the coming weeks.
        </Content>
      </PageSection>
    </PageSection>
  </PageBody>
);
export default NZBranchEstablished;
