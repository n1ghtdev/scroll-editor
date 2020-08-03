/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import InputNumber from './input-number';
import Select from './select';
import ColorPaletteWindow from './color-palette-window';

type Props = {
  value: any;
  onChange: (value: any) => void;
};

const borderStyleOptions = [
  'solid',
  'dashed',
  'dotted',
  'groove',
  'ridge',
  'hidden',
  'none',
];

const wrapperStyles = css`
  position: relative;
  display: flex;

  & > input {
    flex: 1;
    max-width: 70px;
  }
  & > select {
    flex: 2;
    border-radius: 5px;
    border: none;
    background-color: #fff;
    margin: 0 10px;
    padding: 0 5px;
  }
  & > button {
    flex: 1;
    border: none;
    margin-right: 10px;
    border-radius: 5px;
  }
`;

function InputBorder({ value, onChange }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleColorChange = (color: string) => onChange({ color });

  function handleWidthChange(width: number) {
    onChange({ width });
  }

  function handleStyleChange(style: string) {
    onChange({ style });
  }

  const handleClose = React.useCallback(() => setIsOpen(false), []);

  return (
    <div css={wrapperStyles}>
      <InputNumber value={value.width} onChange={handleWidthChange} />
      <Select value={value.style} onChange={handleStyleChange}>
        {borderStyleOptions.map((style: string) => (
          <Select.Option value={style}>{style}</Select.Option>
        ))}
      </Select>
      <button
        style={{ backgroundColor: value.color }}
        onClick={() => setIsOpen(!isOpen)}
      ></button>
      {isOpen ? (
        <ColorPaletteWindow
          onClose={handleClose}
          onColorChange={handleColorChange}
          initialColor={value.color}
        />
      ) : null}
    </div>
  );
}

export default InputBorder;
