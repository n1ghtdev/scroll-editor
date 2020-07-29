/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import ColorPaletteWindow from './color-palette-window';
import Input from './input';

type Props = {
  value: string;
  onChange: (color: string) => void;
};

const wrapperStyles = css`
  position: relative;
  display: flex;
`;
const buttonStyles = css`
  flex: 1;
  border: none;
  margin-right: 10px;
  border-radius: 5px;
`;
const inputStyles = css`
  ${Input};
  max-width: 70px;
`;

function InputColor({ value, onChange }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleColorChange = React.useCallback(
    (color: string) => onChange(color),
    [onChange],
  );

  const handleToggle = React.useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <div css={wrapperStyles}>
      <button
        css={buttonStyles}
        style={{ backgroundColor: value }}
        onClick={() => setIsOpen(!isOpen)}
      ></button>
      <input
        css={inputStyles}
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleColorChange(e.target.value)
        }
      />
      {isOpen ? (
        <ColorPaletteWindow
          onToggle={handleToggle}
          initialColor={value}
          onColorChange={handleColorChange}
        />
      ) : null}
    </div>
  );
}

export default InputColor;
