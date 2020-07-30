/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

type Props = {
  title: string | React.ReactNode;
  children: React.ReactNode;
};

const titleStyles = css`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  display: block;
`;

const wrapperStyles = css`
  width: calc(50% - 20px);
  padding: 5px 10px;
  background: #000;
  border-radius: 10px;
  margin: 0 10px 20px 10px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const childrenStyles = css`
  margin: 10px 0;
`;

function Option({ title, children }: Props) {
  return (
    <div css={wrapperStyles}>
      <span css={titleStyles}>{title}</span>
      <div css={childrenStyles}>{children}</div>
    </div>
  );
}

export default Option;
