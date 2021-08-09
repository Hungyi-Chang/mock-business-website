/**
 * News about win the price of 2019 ascla page contents
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
  Link,
  ColorTheme,
  Padding,
} from '../../../components/Styles';

const ASCLA2018Winner = () => (
  <PageBody>
    <PageSection2>
      <ColorTheme>
        <PageH2>
          BlockBit wins the 2018 ASCLA Information Technology and Management
          Award
        </PageH2>
      </ColorTheme>
      <Content>Posted on November 26, 2018</Content>
      <ToOccupy5>
        <Padding padding="4rem">
          <Link href="https://sclaa.com.au/awards/">
            <Image src="/resources/images/logo/2018-ASCLA-logo.jpg" />
          </Link>
        </Padding>
      </ToOccupy5>
      <PageH2>
          BlockBit Solutions wins the 2018 ASCLA (Australian Supply Chain &
          Logistics) Awards for Information Technology and Management.
      </PageH2>
      <Content>
          Information remains the most important requirement of any supply
          chain. Information technology is where the majority of supply chain
          improvements have been made. Nominees for this award demonstrate where
          the use of existing or new technology has provided significant
          improvements to their management of information and/or their supply
          chain processes.
      </Content>
      <Content>
          Product and Supply chain Traceability is a hot topic right now. Every
          industry can trace the transfer of money, goods or services. BlockBit
          has re-invented the supply chain through its emerging technology
          platform iTrazo, to capture trust. By designing a radically
          transparent and traceable supply chain, BlockBit harnesses quality
          data to create an unparalleled system that maps the product journey to
          answer what’s in it, where it comes from, and who has handled it along
          the way.
      </Content>
      <Content>
          Digital identity is another critical aspect of everyday transactions.
          With traditional systems things can go wrong i.e. data & identity
          theft and privacy invasion. BlockBit’s distributed trust model is a
          new way of managing identities, allowing users to authenticate and
          verify the use of their information in real-time and helping
          organizations expedite, cut costs for identity verification and
          customer onboarding.
      </Content>
      <Content>
          Our Traceability Platform iTrazo, leverages state of art technology
          solutions to deliver unprecedented interoperability and connectivity
          opportunities to secure access and transaction visibility all the way
          down through the supply chain.
      </Content>
      <Content>
          BlockBit Solutions are driven market disruptors, exploiting state of
          art emerging technology to unlock business potential for customers in
          a range of industries and sectors. This includes technologies such as
          Digital Identity, Blockchain (Distributed Ledger), Internet of Things
          (IoT), Data Science, Artificial Intelligence (AI), Security with
          advanced encryption and cryptographic frameworks.
      </Content>
      <Content>
          The idea of linking farmers, producers and consumers to information is
          becoming a key requirement in a consumer driven world where product
          tampering, counterfeiting and recalls are costly, and consumers want
          to know every detail about where their product has come from including
          making sure that the product is authentic, safe to consume, and
          ethically produced. This is particularly important for Australian and
          New Zealand businesses and industries looking to sell and protect
          their produce in the global market and demonstrate environmental
          compliances.
      </Content>
      <Content>
          Extensive research and consultations into current state ‘farmer to
          fork”, Patient & Animal health, Energy monitoring, Manufacturing,
          Asset tracking, Recycling Management, Citizen engagement revealed no
          comprehensive digital solutions. Majority of the current solutions
          comprise of fragmented, siloed and outdated legacy systems, cobbled
          together with little interoperability and manual processing. This
          makes it almost impossible to validate and confirm the origin and
          history of products, traceability is near impossible, data exposed to
          fraud and regulatory compliance at risk.
      </Content>
      <Content>
          Our answer is iTrazo - the game changing platform. Contact us today to
          see how your organization can leverage and grow with our award winning
          Platform! For further information visit:
        {' '}
        <Link href="/">
            www.blockbitsolutions.com
        </Link>
        {' '}
          and
        {' '}
        <Link href="https://sclaa.com.au/awards">
            https://sclaa.com.au/awards
        </Link>
        {' '}
      </Content>
      <Content>
          Thank you to SCLAA and congratulations to all finalists, FullCRM,
          Fremantle Ports, iCOS Live, PTV Group, Santos Ltd and Shippit.
      </Content>
      <Padding padding="4rem"><Image src="/resources/images/news/ascla-info-tech-mangement-award-winner-blockbit.jpg" /></Padding>
    </PageSection2>
  </PageBody>
);
export default ASCLA2018Winner;
