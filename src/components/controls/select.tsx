/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

type Props = {
  children: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
};

type OptionProps = {
  value: string | number;
  children: React.ReactNode;
};

const select = css``;
const option = css``;

function Select({ value, onChange, children }: Props) {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    onChange(e.target.value);
  }

  return (
    <select css={select} value={value} onChange={handleChange}>
      {children}
    </select>
  );
}

function Option({ value, children }: OptionProps) {
  return (
    <option css={option} value={value}>
      {children}
    </option>
  );
}

Select.Option = Option;

export default Select;
