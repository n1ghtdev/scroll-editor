import React from 'react';
import { InputNumber } from 'antd';
import ColorPicker from './ColorPicker';

const BorderInput = () => {
  return (
    <div>
      <InputNumber
        min={0}
        formatter={(value: any) => `${value}px`}
        parser={(value: any) => value.replace('px', '')}
      />
      <InputNumber
        min={0}
        formatter={(value: any) => `${value}px`}
        parser={(value: any) => value.replace('px', '')}
      />
      <InputNumber
        min={0}
        formatter={(value: any) => `${value}px`}
        parser={(value: any) => value.replace('px', '')}
      />
      {/* <ColorPicker /> */}
    </div>
  );
};

export default BorderInput;
