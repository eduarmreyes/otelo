import React from 'react';

import Container from '../Container';

import Section from './Section';
import H2 from './H2';
import P from './P';
import Hr from './Hr';

class WelcomeSection extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Section>
        <Container>
          <H2>
            Welcome to the Nontraditional Stay
          </H2>
          <P>
            Stay at a place that connects you to the most talented creators in town, a place where the space is your guide around the city. Our full service concept suites artfully blend local culture and style with the comforts and joys of a luxury hotel experience. Own the experience of Otelo and instantly greet the best of all<br />local things!
          </P>
          <Hr primary />
        </Container>
      </Section>
    );
  }
}

export default WelcomeSection;
