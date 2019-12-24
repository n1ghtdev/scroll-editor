/** @jsx jsx */
import React from 'react';
import { Row, Col, Form } from 'antd';
import { css, jsx } from '@emotion/core';
import ColorPicker from './ColorPicker';
import InputSlider from './InputSlider';

const App = () => {
  // add state to each (:hover, :active)
  const [scrollOptions, setScrollOptions] = React.useState({
    scrollbarWidth: 14,
    scrollbarColor: 'green',
    trackColor: 'red',
    trackRadius: 0,
    thumbColor: 'blue',
    thumbRadius: 0,
  });

  const onColorChange = (color: any, state: string) => {
    setScrollOptions(opts => ({ ...opts, [state]: color.hex }));
  };
  return (
    <div
      css={css`
        max-width: 1200px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-left: 15px;
        padding-right: 15px;
      `}
    >
      <Row>
        <Col>Header/Title of app</Col>
      </Row>
      <Row type="flex">
        <Col span={12}>
          <Form layout="vertical">
            <Form.Item label="Scrollbar">
              <Form.Item
                label="Scrollbar width"
                style={{ display: 'inline-block', width: '50%' }}
              >
                <InputSlider
                  value={scrollOptions.scrollbarWidth}
                  onChange={(value: any) =>
                    setScrollOptions(opts => ({
                      ...opts,
                      scrollbarWidth: value,
                    }))
                  }
                />
              </Form.Item>
              <Form.Item
                label="Scrollbar color"
                style={{ display: 'inline-block', width: '50%' }}
              >
                <ColorPicker
                  color={scrollOptions.scrollbarColor}
                  onChange={onColorChange}
                  name="scrollbarColor"
                />
              </Form.Item>
            </Form.Item>
            <Form.Item label="Scrollbar-track">
              <Form.Item
                label="Track radius"
                style={{ display: 'inline-block', width: '50%' }}
              >
                <InputSlider
                  value={scrollOptions.trackRadius}
                  onChange={(value: any) =>
                    setScrollOptions(opts => ({
                      ...opts,
                      trackRadius: value,
                    }))
                  }
                />
              </Form.Item>
              <Form.Item
                label="Track color"
                style={{ display: 'inline-block', width: '50%' }}
              >
                <ColorPicker
                  color={scrollOptions.trackColor}
                  onChange={onColorChange}
                  name="trackColor"
                />
              </Form.Item>
            </Form.Item>
            <Form.Item label="Scrollbar-thumb">
              <Form.Item
                label="Thumb radius"
                style={{ display: 'inline-block', width: '50%' }}
              >
                <InputSlider
                  value={scrollOptions.thumbRadius}
                  onChange={(value: any) =>
                    setScrollOptions(opts => ({
                      ...opts,
                      thumbRadius: value,
                    }))
                  }
                />
              </Form.Item>
              <Form.Item
                label="Thumb color"
                style={{ display: 'inline-block', width: '50%' }}
              >
                <ColorPicker
                  color={scrollOptions.thumbColor}
                  onChange={onColorChange}
                  name="thumbColor"
                />
              </Form.Item>
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}>
          Scroll preview/code
          <div
            css={css`
              height: 100%;
              width: 100%;
              background-color: #f5f5f5;
              overflow-y: scroll;
              &::-webkit-scrollbar-track {
                background-color: ${scrollOptions.trackColor};
                border-radius: ${scrollOptions.trackRadius}px;
              }
              &::-webkit-scrollbar {
                width: ${scrollOptions.scrollbarWidth}px;
                background-color: ${scrollOptions.scrollbarColor};
              }
              &::-webkit-scrollbar-thumb {
                background-color: ${scrollOptions.thumbColor};
                border-radius: ${scrollOptions.thumbRadius}px;
              }
            `}
          >
            <div
              css={css`
                min-height: 125%;
              `}
            ></div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default App;
