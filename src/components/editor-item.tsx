/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

type Props = {
  title: string | React.ReactNode;
  children: React.ReactNode;
};

const titleStyles = css`
  color: #46da2e;
  font-weight: 900;
  font-size: 48px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const wrapperStyles = css``;

function EditorItem({ title, children }: Props) {
  return (
    <div css={wrapperStyles}>
      <h2 css={titleStyles}>{title}</h2>
      {children}
    </div>
  );
}

export default EditorItem;
