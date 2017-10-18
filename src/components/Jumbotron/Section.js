import styled from 'styled-components';

import BackgroundImage from './bg-image.png';

const Section = styled.section`
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: bottom center;
  background-size: 100% 90%;
  height: 538px;
  width: 100%;
`;

export default Section;
