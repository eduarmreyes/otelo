import styled from 'styled-components';

const FeaturedImage = styled.div`
  background-image: url(${(props) => props.background})
  background-size: cover;
  height: 400px;
  margin-bottom: 24px;
  position: relative;
  width: 426px;
`;

export default FeaturedImage;
