import React from 'react';
import Map from 'google-map-react';
import styled from 'styled-components';
import { Strong, reuseableStyles } from '../../../../Styles';

const Address = styled.div`
  ${reuseableStyles.contentStyle};
  font-size: 2rem;
  padding-bottom: 4rem;
  padding-left: 1rem;

  *{
    line-height: 1.3;
  }
`;

const MapWrapper = styled.div`
  width: 140rem;
  height: 38rem;
  max-width: 100%;
  margin: auto;
  border-radius: 1rem;
  overflow: hidden;
`;

const Marker = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50% 50% 50% 0;
  background:  rgba(28, 117, 191, 0.8);
  transform: rotate(-45deg);
  margin-left: -1.5rem;
  margin-top: -2rem;
  box-shadow: 0.8rem 0 2px black;

  &:after{
    content: '';
    width: 1rem;
    height: 1rem;
    background: rgba(255,255,255,0.8);
    position: absolute;
    top: 1rem;
    left: 1rem;
    border-radius: 50%;
  }
`;

export default () => (
  <>
    <Address>
      <Strong>Head Office</Strong>
      <div>Level 24, HWT Tower</div>
      <div>40 City Road,</div>
      <div>Southbank,</div>
      <div>VIC, 3006</div>
      <div>Australia</div>
    </Address>
    <MapWrapper>
      <Map
        bootstrapURLKeys={{
          key: process.env.GOOGLE_MAP_API_KEY,
          libraries: 'geometry,places',
        }}
        defaultCenter={{
          lat: -37.8210055,
          lng: 144.9667365,
        }}
        defaultZoom={14}
        options={
          // (maps) => (
          //   {
          //     mapTypeControl: true,
          //     mapTypeId: maps.MapTypeId.SATELLITE,
          //     maxZoom: 17,
          //   }
          // )
          () => (
            {
              mapTypeControl: true,
              maxZoom: 17,
            }
          )
        }
      >
        <Marker
          lat={-37.8210055}
          lng={144.9667365}
        />
      </Map>
    </MapWrapper>
  </>
);
