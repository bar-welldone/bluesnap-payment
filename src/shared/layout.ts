import { css } from 'styled-components';

export const button = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  height: 40px;
  border-radius: 8px;
  text-transform: uppercase;
  cursor: pointer;
`;
export const centerAlignedColumn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const fullWidthRow = css`
  display: flex;
  width: 100%;
`;

// export default layout;
