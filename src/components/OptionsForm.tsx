/** @jsx jsx */
import React from 'react';
import { Form, Collapse, Input, Button } from 'antd';
import { css, jsx } from '@emotion/core';
import ColorPicker from './ColorPicker';
import SliderInput from './SliderInput';
import {
  updatePropertyAction,
  addPropertyAction,
} from '../modules/scrollOptions/actions';

const OptionsForm = ({ state, dispatch }: { state: any; dispatch: any }) => {
  return (
    <Form layout="vertical">
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
        <Collapse
          bordered={false}
          css={css`
            .ant-collapse-header {
              padding: 6px 16px !important;
              padding-left: 40px !important;
            }
          `}
        >
          {state.scrollbar.map((prop: any) => {
            //make util func get type of item by property
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
                    <SliderInput
                      value={prop.value}
                      onChange={(value: any) =>
                        dispatch(
                          updatePropertyAction('scrollbar', {
                            name: prop.property,
                            value,
                          }),
                        )
                      }
                    />
                  </Form.Item>
                </Collapse.Panel>
              );
            } else if (prop.property === 'color') {
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
                      color={prop.value}
                      onChange={(color: any) =>
                        dispatch(
                          updatePropertyAction('scrollbar', {
                            name: prop.property,
                            value: color.hex,
                          }),
                        )
                      }
                      name="scrollbarColor"
                    />
                  </Form.Item>
                </Collapse.Panel>
              );
            }
          })}
        </Collapse>
        <Form
          layout="inline"
          css={css`
            margin-top: 20px;
          `}
        >
          <Form.Item>
            <Input />
          </Form.Item>
          <Form.Item>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button>ADD</Button>
          </Form.Item>
        </Form>
      </Form.Item>

      <Form.Item label="Track"></Form.Item>
      <Form.Item label="Thumb"></Form.Item>
    </Form>
  );
};

export default OptionsForm;
