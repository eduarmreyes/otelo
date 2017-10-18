import React from 'react';

import Container from '../Container';
import Hr from '../Welcome/Hr';
/* import Contact from 'containers/Contact'; */

import Footer from './Footer';
import OteloLogoWhite from './OteloLogoWhite';
import OteloWhite from './otelo-logo-white.png';
import Section from './Section';
import Navbar from './Navbar';
import Nav from './Nav';
import Ul from './Ul';
import Li from './Li';
import Link from './Link';

class FeaturedStays extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Footer>
        <Container>
          <Section>
            <OteloLogoWhite src={OteloWhite} alt="Otelo white logo" />
            <Navbar>
              <Nav>
                <Ul>
                  <Li>
                    <Link to="/about">
                      About
                    </Link>
                  </Li>
                </Ul>
              </Nav>
              <Nav>
                <Ul>
                  <Li>
                    <Link to="/rental-terms">
                      Rental Terms
                    </Link>
                  </Li>
                  <Li>
                    <Link to="/reviews">
                      Reviews
                    </Link>
                  </Li>
                </Ul>
              </Nav>
              <Nav>
                <Ul>
                  <Li>
                    <Link to="/book-a-concept">
                      Book a concept
                    </Link>
                  </Li>
                  <Li>
                    <Link to="/experiences">
                      Experiences
                    </Link>
                  </Li>
                </Ul>
              </Nav>
              <Nav>
                <Ul>
                  <Li>
                    <Link to="/the-network">
                      The Network
                    </Link>
                  </Li>
                  <Li>
                    <Link to="/contact">
                      Contact
                    </Link>
                  </Li>
                </Ul>
              </Nav>
            </Navbar>
            <Hr />
            {/*<Contact contactFormTitle="Leave us a message!" />*/}
          </Section>
        </Container>
      </Footer>
    );
  }
}

export default FeaturedStays;
