import React from 'react';

import Section from '../Welcome/Section';
import Container from '../Container';
import Hr from '../Welcome/Hr';

import NetworkSection from './Section';
import BlueSection from './BlueSection';
import P from './P';

class TheNetwork extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Section>
        <Container>
          <h2>The Network</h2>
          <NetworkSection>
            <BlueSection />
            <h3>STAY WITH OTELO</h3>
            <P>
              Check out our network of full service apartments and select the perfect concept suite to fit your needs.
            </P>
          </NetworkSection>
          <NetworkSection>
            <BlueSection />
            <h3>GUIDE SHOP</h3>
            <P>
              Discover our cities, and the people that make them vibrant. Experience first hand the things that they create and love most.
            </P>
          </NetworkSection>
          <NetworkSection>
            <BlueSection />
            <h3>BE A PART</h3>
            <P>
              Otelo is meant to be sharedin every way. Learn more about our income property, shared ownership program.
            </P>
          </NetworkSection>
          <Hr primary />
        </Container>
      </Section>
    );
  }
}

export default TheNetwork;
