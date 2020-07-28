/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

type Props = {
  value: number;
  onChange: (value: number) => void;
};

const input = css``;

function InputNumber({ value, onChange }: Props) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(Number(e.target.value));
  }
  return <input type="number" value={value} onChange={handleChange} />;
}

export default InputNumber;
