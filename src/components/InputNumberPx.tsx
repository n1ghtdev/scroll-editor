import React from 'react';
import { InputNumber } from 'antd';
const InputNumberPx = ({
  value,
  onChange,
  min,
  width,
}: {
  value: any;
  onChange: (value: any) => void;
  min?: number;
  width?: string;
}) => (
  <InputNumber
    min={min}
    style={{ width: width || '15%' }}
    formatter={(value: any) => `${value}px`}
    parser={(value: any) => value.replace('px', '')}
    value={value}
    onChange={onChange}
  />
);

export default InputNumberPx;
