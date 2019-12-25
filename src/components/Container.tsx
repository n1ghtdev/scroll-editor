/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      css={css`
        max-width: 1200px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-left: 15px;
        padding-right: 15px;
      `}
    >
      {children}
    </div>
  );
};

export default Container;
