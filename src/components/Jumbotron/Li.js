import styled from 'styled-components';

const Li = styled.li`
  background-color: #fff;
  border-top: solid 1px;
  border-left: solid 1px;
  border-right: solid 1px;
  list-style: none;
  padding: 1rem;
  max-width: 220px;
  max-height: 138px;

  &:last-child {
    border-bottom: solid 1px;
  }
`;

export default Li;
