/**
 * News about New Zealand branch Annocunced page contents
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
  Link,
} from '../../../components/Styles';

const NZBranchAnnounced = () => (
  <PageBody>
    <PageSection>
      <ColorTheme>
        <PageH2>New Branch in Palmerston North Announced</PageH2>
      </ColorTheme>
      <Content>Posted on November 15, 2017</Content>
      <PageSection>
        <Content>
          Australian tech firm BlockBit founder Reeanjou Ram says its Palmerston
          North office will create at least 25 jobs over the next year.
        </Content>

        <Content>
          An Australian-based tech company is looking to build its new
          development team in Palmerston North, and this is expected to bring at
          least 25 jobs to the city.
        </Content>

        <Content>
          BlockBit Solutions provides services across Australasia and the
          Asia-Pacific, based on blockchain technology.
        </Content>

        <Content>
          A blockchain is basically a secure, digital ledger of transactions,
          best known for underpinning electronic currencies such as Bitcoin.
        </Content>

        <Content>
          The company’s founder Reeanjou Ram said she chose Palmerston North
          because Manawatū was an emerging, but still affordable, tech hub with
          access to research and development centres.
        </Content>
        <Content>
          The new development team will be based in an office on Main St, near
          the city council building, and is set to be up and running by early
          January.
        </Content>
        <Content>
          Ram said she would be in Palmerston North to select the initial team
          of eight over the next month, and the team was expected to expand to
          at least 25 employees by the end of 2018.
        </Content>
        <Content>
          A major drawcard for setting up in Palmerston North was having
          organisations such as Food HQ and Fonterra’s research and development
          centre nearby, as well as the city’s central location for logistics,
          Ram said.
        </Content>
        <Content>
          Ram said Massey University was also a good source of IT graduates, and
          BlockBit could give them the opportunity to work with emerging
          technology without having to move.
        </Content>
        <Content>
          “These businesses and sectors could be early adopters of blockchain
          technology. It just seems the right fit and place to be.”
        </Content>
        <Link href="https://www.stuff.co.nz/business/99427266/australian-tech-firm-gets-its-development-team-off-the-starters-block-in-palmerston-north">
          Source
        </Link>
      </PageSection>
    </PageSection>
  </PageBody>
);
export default NZBranchAnnounced;
