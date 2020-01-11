/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Layout } from 'antd';

const LayoutContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      css={css`
        background-color: #eef2f8;
      `}
    >
      <Layout
        css={css`
          max-width: 1400px;
          width: 100%;
          background-color: transparent;
          height: 100vh;
          margin-left: auto;
          margin-right: auto;
          padding-left: 15px;
          padding-right: 15px;
        `}
      >
        {children}
      </Layout>
    </div>
  );
};

export default LayoutContainer;
