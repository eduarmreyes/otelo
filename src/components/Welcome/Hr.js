import styled from 'styled-components';

const Hr = styled.hr`
  background-color: ${(props) => props.primary ? '#187aff' : '#fff'};
  border: 0.938px solid;
  border-color: ${(props) => props.primary ? '#187aff' : '#fff'};
`;

export default Hr;
