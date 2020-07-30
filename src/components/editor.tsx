/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

type Props = {
  children: React.ReactNode;
};

const styles = css`
  width: 100%;

  @media (min-width: 960px) {
    width: 50%;
  }
`;

function Editor({ children }: Props) {
  return <div css={styles}>{children}</div>;
}

export default Editor;
