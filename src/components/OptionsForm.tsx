/** @jsx jsx */
import { Form, Collapse } from 'antd';
import { css, jsx } from '@emotion/core';

import ColorPicker from './ColorPicker';
import InputRange from './InputRange';
import OptionItem from './OptionItem';
import AddPropertyForm from './AddPropertyForm';

import {
  OptionProperty,
  ActionPayloadWithProperty,
} from '../modules/scrollOptions/types';

import {
  updatePropertyAction,
  addPropertyAction,
} from '../modules/scrollOptions/actions';

const OptionsForm = ({
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
      id: generateID(),
      ...values,
    });
  };
  // TODO: provide func arg for props instead of accessing from closure
  const generateID = () => {
    const lastProperty = state.props[state.props.length - 1].id;
    return lastProperty + 1;
  };
  return (
    <OptionItem>
      <Collapse
        bordered={false}
        css={css`
          .ant-collapse-header {
            padding: 6px 16px !important;
            padding-left: 40px !important;
          }
        `}
      >
        {state.props.map((prop: any) => {
          // TODO: make util func get type of item by property
          // or TODO: useInputComponent, same logic as in AddPropertyForm
          if (prop.property === 'width') {
            return (
              <Collapse.Panel
                header={prop.property}
                key={prop.id}
                css={css`
                  text-transform: uppercase;
                  font-size: 12px;
                `}
              >
                <Form.Item>
                  <InputRange
                    value={prop.value}
                    onChange={(value: any) => {
                      console.log(value);
                      updateProperty(prop.id, value);
                    }}
                  />
                </Form.Item>
              </Collapse.Panel>
            );
          } else if (prop.property === 'background-color') {
            return (
              <Collapse.Panel
                header={prop.property}
                key={prop.id}
                css={css`
                  text-transform: uppercase;
                  font-size: 12px;
                `}
              >
                <Form.Item>
                  <ColorPicker
                    value={prop.value}
                    onChange={(color: any) =>
                      updateProperty(prop.id, color.hex)
                    }
                  />
                </Form.Item>
              </Collapse.Panel>
            );
          }
        })}
      </Collapse>
      <AddPropertyForm
        optionName={state.option}
        activeProperties={state.props.map(prop => prop.property)}
        onSubmit={(values: any) => submitAddProperty(values)}
      />
    </OptionItem>
  );
};

export default OptionsForm;
