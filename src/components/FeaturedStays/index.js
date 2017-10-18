import React from 'react';

import Section from '../Welcome/Section';
import Hr from '../Welcome/Hr';
import Container from '../Container';

import FeaturedList from './FeaturedList';

class FeaturedStays extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Section>
        <Container>
          <h2>
            Featured Otelo Stays
          </h2>
          <FeaturedList />
          <Hr primary />
        </Container>
      </Section>
    );
  }
}

export default FeaturedStays;
