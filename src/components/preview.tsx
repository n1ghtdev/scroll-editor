/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { State } from '../modules/types';
import { generateScrollbarStyles } from '../utils/generate-scrollbar-styles';

type Props = {
  scrollbarState: State;
};

const wrapper = css`
  order: 1;
  width: 100%;
  background-color: #3e4a61;
  margin: 20px 0;
  border-radius: 10px;
  height: calc(100vh - 40px);
  padding: 15px;
  overflow-y: scroll;
  color: #000;

  @media (min-width: 960px) {
    order: 0;
    width: 50%;
    margin-right: auto;
  }
`;

const placeholder = css`
  height: 1000px;
`;

const button = css`
  display: block;
  margin: 20px auto;
  border: none;
  background: #1a2639;
  color: #fff;
  padding: 15px 20px;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    opacity: 0.7;
  }
`;

const copiedTooltip = css`
  visibility: hidden;
  opacity: 0;
  transform: translateY(-25px);

  padding: 7px 0;
  max-width: 100px;
  text-align: center;
  margin: 0 auto;
  border-radius: 5px;
  background: #1a2639;
  color: #fff;
  position: relative;
  margin-bottom: 20px;
  transition: all 250ms;

  &.active {
    visibility: visible;
    opacity: 1;
    transform: translateY(0px);
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    bottom: -7.5px;
    transform: translateX(-50%) rotate(45deg);
    background: #1a2639;
    width: 15px;
    height: 15px;
  }
`;

const textarea = css`
  width: 100%;
  min-height: 120px;
  padding: 15px;

  background: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);

  border: 2px solid transparent;
  resize: none;
`;

function Preview({ scrollbarState }: Props) {
  const [styles, setStyles] = React.useState(
    generateScrollbarStyles(scrollbarState),
  );
  const [isCopied, setIsCopied] = React.useState(false);
  const copyRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    setStyles(generateScrollbarStyles(scrollbarState));
  }, [scrollbarState]);

  function handleCopy(e: React.MouseEvent<HTMLButtonElement>) {
    setIsCopied(true);
    if (copyRef.current) {
      copyRef.current.select();
    }
    document.execCommand('copy');
    (e.target as HTMLButtonElement).focus();

    setTimeout(() => {
      setIsCopied(false);
    }, 4000);
  }

  return (
    <div
      css={css`
        ${wrapper} ${styles}
      `}
    >
      <div className={isCopied ? 'active' : ''} css={copiedTooltip}>
        Copied!
      </div>
      <textarea
        value={styles?.join('')}
        ref={copyRef}
        spellCheck={false}
        css={textarea}
      ></textarea>
      <button onClick={handleCopy} css={button}>
        copy css
      </button>
      <div css={placeholder}></div>
    </div>
  );
}

export default Preview;
