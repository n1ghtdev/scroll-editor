/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

type Props = {
  children: React.ReactNode;
};

const wrapper = css`
  width: 100%;
  background-color: #eee;
  margin: 20px 0;
  border-radius: 10px;
  min-height: 600px;
  padding: 15px;
  color: #000;

  @media (min-width: 960px) {
    width: 40%;
    margin-left: auto;
  }
`;

function Preview({ children }: Props) {
  return <div css={wrapper}>{children}</div>;
}

export default Preview;
