import React from 'react';
import Container from '../Container';

import Section from './Section';
import Ul from './Ul';
import Li from './Li';
import Span from './Span';
import SpanRight from './SpanRight';
import A from './A';
import Button from './Button';
import FaChevronRightStyled from './FaChevronRightStyled';

class Jumbotron extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Section>
        <Container>
          <Ul>
            <Li>
              <A href="#">
                <Span> Location <SpanRight><FaChevronRightStyled /></SpanRight></Span>
              </A>
            </Li>
            <Li>
              <A href="#">
                <Span> Check-in <FaChevronRightStyled /> Check-out</Span>
              </A>
            </Li>
            <Li>
              <A href="#">
                <Span>Guests <SpanRight><FaChevronRightStyled /></SpanRight></Span>
              </A>
            </Li>
          </Ul>
          <Button>Search</Button>
        </Container>
      </Section>
    );
  }
}

export default Jumbotron;
