/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { State } from '../modules/types';
import { generateScrollbarStyles } from '../utils/generate-scrollbar-styles';

type Props = {
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

const button = css`
  display: block;
  margin: 20px auto;
  border: none;
  mix-blend-mode: difference;
  padding: 15px 20px;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    opacity: 0.7;
  }
`;

function Preview({ scrollbarState }: Props) {
  const [styles, setStyles] = React.useState(
    generateScrollbarStyles(scrollbarState),
  );
  const [isCopied, setIsCopied] = React.useState(false);

  React.useEffect(() => {
    setStyles(generateScrollbarStyles(scrollbarState));
  }, [scrollbarState]);

  function handleCopy() {
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }

  return (
    <div
      css={css`
        ${wrapper} ${styles}
      `}
    >
      <button onClick={handleCopy} css={button}>
        copy css
      </button>
      <code>{styles?.join('')}</code>
      <div css={placeholder}></div>
    </div>
  );
}

export default Preview;
