import styled from 'styled-components';
import * as typography from '../typography'
import * as layout from '../layout'

export const Button = styled.button`
  ${typography.button};
  ${layout.button};
  padding: 8px;
  text-transform: uppercase;
`;
