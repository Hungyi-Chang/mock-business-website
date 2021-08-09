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
  PageH3,
  PageH2,
  ColorTheme,
  Link,
} from '../../../components/Styles';

const FoodConsumers = () => (
  <PageBody>
    <PageSection2>
      <ColorTheme>
        <PageH2>
          Coronavirus: Food consumers will demand more digital traceability, post-Covid-19
        </PageH2>
      </ColorTheme>
      <PageH3>Lawrence Gullery 12:56, Apr 01 2020</PageH3>
      <Content>Waikato&apos;s Julia Jones is the head of analytics for NZX, which will be running a series of webinars to help businesses through the lockdown.
</Content>
      <Content>
        Digital traceability is about to move into first place in terms of what food consumers will demand post-Covid-19.
      </Content>
      <Content>NZX&apos;s Head of Analytics, Julia Jones, said she would be shocked if changes to increase food safety weren&apos;t made as a result of the global pandemic.</Content>
      <Content>&quot;We will be tracing everything around food production, and what we do in terms of managing animals because this (coronavirus) came from animals.
</Content>
      <Content>&quot;That&apos;s just me thinking from the perspective of consumers. As markets open, they&apos;ll want to know exactly how that piece of cheese was produced, as an example.&quot;</Content>
      <Content>Source:<Link href="https://www.stuff.co.nz/"> stuff.co.nz</Link></Content>

    </PageSection2>
  </PageBody >
);
export default FoodConsumers;
