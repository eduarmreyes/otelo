import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => props.primary ? '#187aff' : '#fff'};
  color: ${(props) => props.primary ? '#fff' : 'inherit'};
  cursor: pointer;
  display: block;
  font-size: 13px;
  height: 45px;
  margin-left: 51px;
  margin-bottom: ${(props) => props.primary ? '20px' : '32px'};
  text-transform: uppercase;
  width: 155px;
`;

export default Button;
