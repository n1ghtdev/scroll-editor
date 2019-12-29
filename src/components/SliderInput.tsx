import React from 'react';
import { Col, Slider, InputNumber } from 'antd';

interface SliderInputProps {
  value: any;
  onChange: (value: any) => void;
}

const SliderInput = (props: SliderInputProps) => {
  return (
    <>
      <Col span={16}>
        <Slider
          min={1}
          max={25}
          value={props.value}
          onChange={props.onChange}
        />
      </Col>
      <Col span={8}>
        <InputNumber
          min={1}
          max={25}
          formatter={(value: any) => `${value}px`}
          parser={(value: any) => value.replace('px', '')}
          value={props.value}
          onChange={props.onChange}
        />
      </Col>
    </>
  );
};

export default SliderInput;
