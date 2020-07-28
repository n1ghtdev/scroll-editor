/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import Range from './range';
import InputNumber from './input-number';

type Props = {
  value: number;
  onChange: (val: number) => void;
};

const wrapper = css`
  display: flex;
  align-items: center;

  & > input {
    margin-left: 20px;
    max-width: 40px;
  }
`;

function InputRange({ value, onChange }: Props) {
  return (
    <div css={wrapper}>
      <Range min={0} max={20} value={value} onChange={onChange} />
      <InputNumber value={value} onChange={onChange} />
    </div>
  );
}

export default InputRange;
