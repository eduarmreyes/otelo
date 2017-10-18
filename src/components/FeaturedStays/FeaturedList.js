import React from 'react';
import styled from 'styled-components';

import FeaturedImages from './FeaturedImages';

const SectionFeaturedList = styled.div`
  margin-bottom: 24px;
`;

class FeaturedList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <SectionFeaturedList>
          <FeaturedImages />
        </SectionFeaturedList>
      </div>
    );
  }
}

export default FeaturedList;
