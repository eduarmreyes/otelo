import React from 'react';

import Section from '../Welcome/Section';
import Container from '../Container';

import UpcomingSection from './UpcomingSection';

class UpcomingDestinations extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Section>
        <Container>
          <h2>Up-or-Coming Destinations</h2>
          <UpcomingSection>
            <p>
              SAN JOSÉ, COSTA RICA
            </p>
            <p>
              BOGOTÁ, COLOMBIA
            </p>
            <p>
              GUACALITO, NICARAGUA
            </p>
          </UpcomingSection>
          <UpcomingSection>
            <p>
              CIUDAD DE MÉXICO, MÉXICO
            </p>
            <p>
              LIMA, PERÚ
            </p>
            <p>
              ANTIGUA, GUATEMALA
            </p>
          </UpcomingSection>
        </Container>
      </Section>
    );
  }
}

export default UpcomingDestinations;
