/** @jsx jsx */
import { Form } from 'antd';
import { css, jsx } from '@emotion/core';

import AddPropertyForm from './AddPropertyForm';
import PropertyList from './PropertyList';
import PropertyItem from './PropertyItem';

import {
  Property,
  ScrollItem,
  ActionPayloadWithProperty,
} from '../modules/types';

import {
  updatePropertyAction,
  addPropertyAction,
  removePropertyAction,
} from '../modules/actions';

const FormItem = ({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) => (
  <Form.Item
    label={
      <span
        css={css`
          text-transform: uppercase;
          font-weight: 500;
        `}
      >
        {label}
      </span>
    }
    css={css`
      padding: 0 20px 10px 20px;
      margin-bottom: 10px !important;
      background-color: #e3e8f1;
      border-radius: 5px;

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
  state: ScrollItem;
  dispatch: any;
}) => {
  const updateProperty = (id: number, value: string) =>
    dispatch(
      updatePropertyAction(state.name, {
        id,
        value,
      }),
    );
  const addProperty = (payload: ActionPayloadWithProperty) => {
    dispatch(addPropertyAction(state.name, payload));
  };
  const submitAddProperty = (property: string, value?: any) => {
    addProperty({
      id: generateID(state.options),
      property,
      value,
    });
  };

  const generateID = (properties: Property[]) => {
    const lastProperty = properties[properties.length - 1]?.id || 0;
    return lastProperty + 1;
  };
  return (
    <FormItem label={state.name}>
      <PropertyList
        defaultActiveKey={state.options.map((prop: any) => prop.id)}
      >
        {state.options.map((prop: any) => (
          <PropertyItem
            key={prop.id}
            header={prop.property}
            property={prop}
            onChange={updateProperty}
            onDelete={() => dispatch(removePropertyAction(state.name, prop.id))}
          />
        ))}
      </PropertyList>
      <AddPropertyForm
        optionName={state.name}
        activeProperties={state.options.map((prop) => prop.property)}
        onSubmit={(property: string, value?: any) =>
          submitAddProperty(property, value)
        }
      />
    </FormItem>
  );
};

export default ScrollbarFormItem;
