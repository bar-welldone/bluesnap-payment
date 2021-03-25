import React, { ComponentType } from 'react'
import BaseInput from '../../shared/components/BaseInput';
import styled from 'styled-components';
import colors from '../../shared/colors';

const Icon = styled.svg`
  path {
    fill: ${colors.blueLight};
  }
`;

const InputContent = styled.div`
  display: flex;
  align-items: center;
  .form-control {
    margin-left: 12px;
  }
`;

interface Props {
  dataBluesnap: string
  icon: ComponentType<any>
  id?: string
}

export default function HostedField({dataBluesnap, id, icon}: Readonly<Props>) {
  return (
    <BaseInput>
      <InputContent>
        <Icon as={icon} />
        <div className="form-control" id={id} data-bluesnap={dataBluesnap}></div>
      </InputContent>
    </BaseInput>
  )
}
