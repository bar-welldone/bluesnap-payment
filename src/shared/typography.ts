import { css } from 'styled-components';

import colors from './colors';

const base = css`
  font-family: Montserrat;
  font-style: normal;
`;

export const headline2 = css`
  ${base};
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  color: ${colors['textPrimaryDark']};
`;

export const button = css`
  ${base};
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  line-height: 17px;
  text-transform: uppercase;
  color: ${colors['textPrimaryDark']};
`;

export const description = css`
  ${base};
  font-weight: normal;
  font-size: 12px;
  line-height: 140%;
  color: ${colors['textSecondaryDark']};
`;

export const body = css`
  ${base}
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${colors['textPrimaryDark']};
`;
export const bodySmall = css`
  ${base}
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: ${colors['textSecondaryLight']};
`;
