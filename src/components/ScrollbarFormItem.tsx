/** @jsx jsx */
import { Form } from "antd";
import { css, jsx } from "@emotion/core";

import AddPropertyForm from "./AddPropertyForm";
import PropertyList from "./PropertyList";
import PropertyItem from "./PropertyItem";

import {
  Property,
  OptionProperty,
  ActionPayloadWithProperty
} from "../modules/scrollOptions/types";

import {
  updatePropertyAction,
  addPropertyAction,
  removePropertyAction
} from "../modules/scrollOptions/actions";

const FormItem = ({
  children,
  label
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
  dispatch
}: {
  state: OptionProperty;
  dispatch: any;
}) => {
  const updateProperty = (id: number, value: string) =>
    dispatch(
      updatePropertyAction(state.option, {
        id,
        value
      })
    );
  const addProperty = (payload: ActionPayloadWithProperty) => {
    dispatch(addPropertyAction(state.option, payload));
  };
  const submitAddProperty = (property: string, value?: any) => {
    addProperty({
      id: generateID(state.props),
      property,
      value
    });
  };

  const generateID = (properties: Property[]) => {
    const lastProperty = properties[properties.length - 1]?.id || 0;
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
            onDelete={() =>
              dispatch(removePropertyAction(state.option, prop.id))
            }
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
