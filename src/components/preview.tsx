/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { State } from '../modules/types';
import { generateScrollbarStyles } from '../utils/generate-scrollbar-styles';

type Props = {
  children: React.ReactNode;
  scrollbarState: State;
};

const wrapper = css`
  width: 100%;
  background-color: #eee;
  margin: 20px 0;
  border-radius: 10px;
  height: calc(100vh - 40px);
  padding: 15px;
  overflow-y: scroll;
  color: #000;

  @media (min-width: 960px) {
    width: 40%;
    margin-left: auto;
  }
`;

const placeholder = css`
  height: 1000px;
`;

function Preview({ children, scrollbarState }: Props) {
  const [styles, setStyles] = React.useState(
    generateScrollbarStyles(scrollbarState),
  );

  React.useEffect(() => {
    setStyles(generateScrollbarStyles(scrollbarState));
  }, [scrollbarState]);
  return (
    <div
      css={css`
        ${wrapper} ${styles}
      `}
    >
      {children}
      <div css={placeholder}></div>
    </div>
  );
}

export default Preview;
