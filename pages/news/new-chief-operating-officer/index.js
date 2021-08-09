/**
 * News about our new chief operating officer page contents
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
  Link,
  ColorTheme,
} from '../../../components/Styles';

const NewChiefOperatinOfficer = () => (
  <PageBody>
    <PageSection>
      <ColorTheme>
        <PageH2>
          Former Visy National Business Manager Joins BlockBit as Chief
          Operating Officer
        </PageH2>
      </ColorTheme>
      <Content>Posted on July 23, 2019</Content>
      <PageSection>
        <Content>
          BlockBit Solutions today announced that former Visy National Business
          Manager Paul Whybird has been appointed Chief Operating Officer, a new
          position within BlockBit Solutions. Paul Whybird will join CEO
          Reeanjou Ram, to jointly drive the business forward.
        </Content>

        <Content>
        &quot;Paul is a seasoned and trusted professional who consistently delivers
          results. He is uniquely qualified to drive strategic prioritisation
          and accountability within BlockBit Solutions with a focus on customer
          growth,&quot; said Reeanjou Ram, CEO, BlockBit Solutions. &quot;I have
          tremendous confidence in Paul’s ability to align BlockBit Solutions
          world-class traceability platform with cutting edge operational
          practices within the Australasian market to drive and extend the
          next-generation of supply chain developments.&quot;
        </Content>

        <Content>
          During his 12 plus-years of tenure at Visy, Paul worked with Visy’s
          blue-chip customer base, including global food & beverage and
          e-commerce giants to secure long term billion dollar plus contracts
          that delivered surety of supply and allowed key infrastructure to be
          created. Previous to Visy, Paul acquired a wealth of global experience
          working for Swedish security giant ASSA Abloy and Hong Kong
          construction company CPT. Paul is also an avid sailor and has competed
          in the last 7 Sydney to Hobart yacht races and is in training for this
          years’ 75th edition of the Ocean racing classic.
        </Content>

        <Content>
        &quot;Timing is everything and what a great time it is to join BlockBit –
          there has been some incredible work done by Reeanjou and her team in
          developing this cutting-edge traceability platform at a time when the
          market is demanding supply chain transparency. I am incredibly proud
          to help lead the company through this next phase of growth and
          innovation tied with operational excellence,&quot; said Paul.
        </Content>

        <Content>
          Effective immediately, Paul will assume responsibility for sales,
          marketing and operations and will be responsible for the alignment and
          prioritisation of the company’s investments and ensuring operational
          excellence across the company.
        </Content>

        <Content>
          For further information on the business visit:
          <Link href="https://www.blockbitsolutions.com">
            www.blockbitsolutions.com
          </Link>
        </Content>
      </PageSection>
    </PageSection>
  </PageBody>
);
export default NewChiefOperatinOfficer;
