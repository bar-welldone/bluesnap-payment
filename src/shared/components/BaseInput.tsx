import * as typography from '../typography';
import { ReactNode } from 'react';
import styled from 'styled-components';
import colors from '../colors';

const Line = styled.div`
  height: 2px;
  width: 100%;
`;

const Root = styled.div<{ error?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 20px;
  ${Line} {
    margin-top: 10px;
    background-color: ${({ error }) => (error ? colors.error : colors.borderLight)};
  }
`;

const Content = styled.div`
  display: flex;
`;

const ErrorText = styled.span`
  ${typography.description}
  position: absolute;
  right: 0;
  bottom: 0;
  color: ${colors.error};
`;

export interface BaseInputProps {
  children?: ReactNode;
  errors?: any | any[];
}

const BaseInput = ({ errors, children }: Readonly<BaseInputProps>) => {
  const errorsArray = Array.isArray(errors) ? errors : [errors];

  return (
    <Root error={!!errors}>
      <Content>{children}</Content>
      <ErrorText> {errorsArray[0]?.message} </ErrorText>
      <Line />
    </Root>
  );
};
export default BaseInput;
