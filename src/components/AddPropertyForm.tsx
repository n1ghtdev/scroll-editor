/** @jsx jsx */
import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { css, jsx } from '@emotion/core';

type Props = {
  onSubmit: (property: string, value?: any) => void;
  optionName: string;
  activeProperties: any;
};

const properties = [
  { id: 0, name: 'width', value: 1 },
  { id: 1, name: 'background-color', value: '#000' },
  {
    id: 2,
    name: 'border-radius',
    value: 1,
  },
  {
    id: 3,
    name: 'border',
    value: { width: 1, color: '#000' },
  },
  {
    id: 4,
    name: 'box-shadow',
    value: { x: 1, y: 1, blur: 0, spread: 2, color: 'blue', inset: false },
  },
];

const AddPropertyForm = (props: Props) => {
  const [activeProperty, setActiveProperty] = React.useState();

  const availableProperties = properties.filter(
    (prop: any) =>
      !props.activeProperties.some(
        (activeProp: any) => activeProp === prop.name,
      ),
  );

  const sumbitWithValues = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (typeof activeProperty === 'number') {
      const property = properties.find(
        (prop: any) => prop.id === activeProperty,
      );

      const name = property?.name;
      const value = property?.value;

      if (!name) return;

      props.onSubmit(name, value);

      setActiveProperty(
        availableProperties.find(el => el.id !== activeProperty)?.id || null,
      );
    }
  };

  return (
    <Form
      onSubmit={sumbitWithValues}
      layout="inline"
      css={css`
        margin-top: 20px;
      `}
    >
      <Input.Group compact>
        <Select
          placeholder="Choose property"
          style={{ width: '30%' }}
          value={activeProperty}
          onChange={(val: any) => setActiveProperty(val)}
        >
          {availableProperties.map(prop => (
            <Select.Option key={prop.id} value={prop.id}>
              {prop.name}
            </Select.Option>
          ))}
        </Select>
        <Button htmlType="submit">ADD</Button>
      </Input.Group>
    </Form>
  );
};

export default AddPropertyForm;
