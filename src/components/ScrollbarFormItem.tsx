/** @jsx jsx */
import { Form } from 'antd';
import { css, jsx } from '@emotion/core';

import AddPropertyForm from './AddPropertyForm';
import PropertyList from './PropertyList';
import PropertyItem from './PropertyItem';

import {
  Property,
  OptionProperty,
  ActionPayloadWithProperty,
} from '../modules/scrollOptions/types';

import {
  updatePropertyAction,
  addPropertyAction,
} from '../modules/scrollOptions/actions';

const FormItem = ({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) => (
  <Form.Item
    label={label}
    css={css`
      padding: 0 20px;
      .ant-form-item {
        margin-bottom: 0 !important;
      }
    `}
  >
    {children}
  </Form.Item>
);

const ScrollbarFormItem = ({
  state,
  dispatch,
}: {
  state: OptionProperty;
  dispatch: any;
}) => {
  const updateProperty = (id: number, value: string) =>
    dispatch(
      updatePropertyAction(state.option, {
        id,
        value,
      }),
    );
  const addProperty = (payload: ActionPayloadWithProperty) => {
    dispatch(addPropertyAction(state.option, payload));
  };
  const submitAddProperty = (property: string, value?: any) => {
    addProperty({
      id: generateID(state.props),
      property,
      value,
    });
  };

  const generateID = (properties: Property[]) => {
    const lastProperty = properties[properties.length - 1].id;
    return lastProperty + 1;
  };
  return (
    <FormItem label={state.option}>
      <PropertyList defaultActiveKey={state.props.map((prop: any) => prop.id)}>
        {state.props.map((prop: any) => (
          <PropertyItem
            key={prop.id}
            header={prop.property}
            property={prop}
            onChange={updateProperty}
          />
        ))}
      </PropertyList>
      <AddPropertyForm
        optionName={state.option}
        activeProperties={state.props.map(prop => prop.property)}
        onSubmit={(property: string, value?: any) =>
          submitAddProperty(property, value)
        }
      />
    </FormItem>
  );
};

export default ScrollbarFormItem;
