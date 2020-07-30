/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      css={css`
        max-width: 1200px;
        width: 100%;
        height: 100vh;
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

export default Layout;
