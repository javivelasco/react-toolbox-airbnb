import styled from 'styled-components';

const DateInput = styled.input`
  border: 1px solid;
  border-color: ${props => props.active ? 'rebeccapurple' : '#ccc'};
  &:focus {
    outline: none;
  }
`;

export default DateInput;
