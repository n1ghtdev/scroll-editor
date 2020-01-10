/** @jsx jsx */
import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { css, jsx } from '@emotion/core';

type Props = {
  onSubmit: (values: any) => void;
  optionName: string;
  activeProperties: any;
};

const properties = [
  { id: 0, name: 'width' },
  { id: 1, name: 'background-color' },
  { id: 2, name: 'border-radius' },
  { id: 3, name: 'border' },
  { id: 4, name: 'box-shadow' },
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
    console.log(activeProperty);

    if (typeof activeProperty === 'number') {
      const property = properties.find(
        (prop: any) => prop.id === activeProperty,
      )?.name;

      props.onSubmit(property || properties[0]);

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
