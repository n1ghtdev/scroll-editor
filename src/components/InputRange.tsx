import React from "react";
import { Col, Row, Slider, InputNumber } from "antd";

interface InputRangeProps {
  value: any;
  onChange: (value: any) => void;
}

const Input = (props: InputRangeProps) => {
  return (
    <InputNumber
      min={1}
      max={25}
      formatter={(value: any) => `${value}px`}
      parser={(value: any) => value.replace("px", "")}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

const Range = (props: InputRangeProps) => {
  return (
    <Slider min={1} max={25} value={props.value} onChange={props.onChange} />
  );
};

const InputRange = (props: InputRangeProps) => {
  return (
    <Row style={{ width: "250px " }}>
      <Col span={16}>
        <Range value={props.value} onChange={props.onChange} />
      </Col>
      <Col span={8}>
        <Input value={props.value} onChange={props.onChange} />
      </Col>
    </Row>
  );
};

export default InputRange;
