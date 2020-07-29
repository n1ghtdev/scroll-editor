/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import Input from './input';

type Props = {
  value: number;
  onChange: (value: number) => void;
};

function InputNumber({ value, onChange }: Props) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(Number(e.target.value));
  }
  return (
    <input type="number" css={Input} value={value} onChange={handleChange} />
  );
}

export default InputNumber;
