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

const FormItem = ({ children }: { children: React.ReactNode }) => (
  <Form.Item
    label="Scrollbar"
    css={css`
      background-color: #eee;
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
  const submitAddProperty = (values: any) => {
    addProperty({
      id: generateID(state.props),
      ...values,
    });
  };
  const generateID = (properties: Property[]) => {
    const lastProperty = properties[properties.length - 1].id;
    return lastProperty + 1;
  };
  return (
    <FormItem>
      <PropertyList>
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
        onSubmit={(values: any) => submitAddProperty(values)}
      />
    </FormItem>
  );
};

export default ScrollbarFormItem;
