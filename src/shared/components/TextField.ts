import styled from 'styled-components';
import colors from '../colors';

const TextField = styled.input`
  ${({ theme }) => theme.typography.body};
  flex: 1;
  border: none;
  background: none;
  margin-left: 8px;
  color: ${colors.textPrimaryLight};
`;

export default TextField;
