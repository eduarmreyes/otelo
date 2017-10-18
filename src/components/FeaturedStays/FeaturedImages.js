import React from 'react';
import styled from 'styled-components';

import FeaturedImage from './FeaturedImage';
import Button from './Button';
import Span from './Span';

import FeaturedImage1 from './featured-1.png';
import FeaturedImage2 from './featured-2.png';

const FeaturedImageWrapper = styled.div`
  display: inline-block;

  &:nth-child(1) {
    margin-right: 40px;
  }
`;

const ButtonWrapper = styled.div`
  bottom: 0;
  position: absolute;
`;

class FeaturedImages extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FeaturedImageWrapper>
          <FeaturedImage background={FeaturedImage1}>
            <ButtonWrapper>
              <Button primary>
                Request Rental
              </Button>
              <Button>
                Full Description
              </Button>
            </ButtonWrapper>
          </FeaturedImage>
          <div>
            <Span>
              <strong>Itabo Suite,</strong> Escazú Costa Rica
            </Span>
            <br />
            <Span>
              From $150 / Night
            </Span>
          </div>
        </FeaturedImageWrapper>
        <FeaturedImageWrapper>
          <FeaturedImage background={FeaturedImage2}>
            <ButtonWrapper>
              <Button primary>
                Request Rental
              </Button>
              <Button>
                Full Description
              </Button>
            </ButtonWrapper>
          </FeaturedImage>
          <div>
            <Span>
              <strong>Urban Steel,</strong> Barrio Dent, Costa Rica
            </Span>
            <br />
            <Span>
              From $130 / Night
            </Span>
          </div>
        </FeaturedImageWrapper>
      </div>
    );
  }
}

export default FeaturedImages;
