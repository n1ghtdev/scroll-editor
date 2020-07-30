/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

type Props = {
  children: React.ReactNode;
};

const styles = css`
  display: flex;
  margin: 0 -10px;
  flex-wrap: wrap;
`;

function Options({ children }: Props) {
  return <div css={styles}>{children}</div>;
}

export default Options;
