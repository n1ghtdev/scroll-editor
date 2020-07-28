/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

type Props = {
  children: React.ReactNode;
};

const styles = css`
  width: 50%;
`;

function Preview({ children }: Props) {
  return <div css={styles}>{children}</div>;
}

export default Preview;
