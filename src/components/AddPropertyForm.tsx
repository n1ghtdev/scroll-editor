/** @jsx jsx */
import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { css, jsx } from '@emotion/core';
import { FormTypes } from '../types';
import useInputComponent from './useInputComponent';

type Props = {
  onSubmit: (values: any) => void;
  optionName: string;
  activeProperties: any;
};

// TODO: add available properties to reducer to each option it's own properties
const properties = [
  { id: 0, property: 'width', formType: FormTypes.inputslider },
  { id: 1, property: 'background-color', formType: FormTypes.colorpicker },
  { id: 2, property: 'border-radius', formType: FormTypes.input },
  { id: 3, property: 'border', formType: FormTypes.input },
  { id: 4, property: 'box-shadow', formType: FormTypes.input },
];

const AddPropertyForm = (props: Props) => {
  const getPropertyType = (property: any) =>
    property ? property.formType : FormTypes.input;

  const [activeProperty, setActiveProperty] = React.useState();
  const [
    DynamicInputComponent,
    value,
    setValue,
    clearInput,
  ] = useInputComponent(getPropertyType(activeProperty));

  const handleSelectChange = (value: any) => {
    if (typeof value !== 'number') return;

    const property = properties.find((prop: any) => prop.id === value);

    setActiveProperty(property);
  };
  const availableProperties = properties.filter(
    (prop: any) =>
      !props.activeProperties.some(
        (activeProp: any) => activeProp === prop.property,
      ),
  );
  const sumbitWithValues = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (activeProperty) {
      props.onSubmit({
        property: activeProperty.property,
        value,
      });
      clearInput();

      setActiveProperty(
        availableProperties.find(el => el.id !== activeProperty.id),
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
          value={activeProperty?.id}
          onChange={(val: any) => handleSelectChange(val)}
        >
          {availableProperties.map(prop => (
            <Select.Option value={prop.id}>{prop.property}</Select.Option>
          ))}
        </Select>
        <DynamicInputComponent
          value={value || ''}
          onChange={setValue}
          style={{ width: '25%' }}
        />
        <Button htmlType="submit">ADD</Button>
      </Input.Group>
    </Form>
  );
};

export default AddPropertyForm;
