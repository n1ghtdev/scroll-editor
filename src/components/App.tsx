/** @jsx jsx */
import React from 'react';
import { Row, Col, Form } from 'antd';
import { css, jsx } from '@emotion/core';

import ColorPicker from './ColorPicker';
import InputSlider from './InputSlider';
import Container from './Container';

import reducer from '../modules/scrollOptions/reducer';
import {
  updateScrollbar,
  updateTrack,
  updateThumb,
} from '../modules/scrollOptions/actions';
import { ReducerState } from '../modules/scrollOptions/types';

const initialState: ReducerState = {
  default: {
    scrollbar: { width: 12, color: '#eeeeee' },
    track: { radius: 0, color: 'red' },
    thumb: { radius: 0, color: 'green' },
  },
  hover: { thumb: { color: 'yellow' } },
  active: { thumb: { color: 'orange' } },
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const styles = css`
    &::-webkit-scrollbar {
      width: ${state.default.scrollbar.width}px;
      background-color: ${state.default.scrollbar.color};
    }
    &::-webkit-scrollbar-track {
      background-color: ${state.default.track.color};
      border-radius: ${state.default.track.radius}px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${state.default.thumb.color};
      border-radius: ${state.default.thumb.radius}px;
      &:hover {
        background-color: ${state.hover.thumb.color};
      }
      &:active {
        background-color: ${state.active.thumb.color};
      }
    }
  `;
  return (
    <Container>
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
                  value={state.default.scrollbar.width}
                  onChange={(value: any) =>
                    dispatch(
                      updateScrollbar({
                        name: 'width',
                        value,
                        state: 'default',
                      }),
                    )
                  }
                />
              </Form.Item>
              <Form.Item
                label="Scrollbar color"
                style={{ display: 'inline-block', width: '50%' }}
              >
                <ColorPicker
                  color={state.default.scrollbar.color}
                  onChange={(color: any) =>
                    dispatch(
                      updateScrollbar({
                        name: 'color',
                        value: color.hex,
                        state: 'default',
                      }),
                    )
                  }
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
                  value={state.default.track.radius}
                  onChange={(value: any) =>
                    dispatch(
                      updateTrack({ name: 'radius', value, state: 'default' }),
                    )
                  }
                />
              </Form.Item>
              <Form.Item
                label="Track color"
                style={{ display: 'inline-block', width: '50%' }}
              >
                <ColorPicker
                  color={state.default.track.color}
                  onChange={(color: any) =>
                    dispatch(
                      updateTrack({
                        name: 'color',
                        value: color.hex,
                        state: 'default',
                      }),
                    )
                  }
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
                  value={state.default.thumb.radius}
                  onChange={(value: any) =>
                    dispatch(
                      updateThumb({ name: 'radius', value, state: 'default' }),
                    )
                  }
                />
              </Form.Item>
              <Form.Item
                label="Thumb color"
                style={{ display: 'inline-block', width: '50%' }}
              >
                <ColorPicker
                  color={state.default.thumb.color}
                  onChange={(color: any) =>
                    dispatch(
                      updateThumb({
                        name: 'color',
                        value: color.hex,
                        state: 'default',
                      }),
                    )
                  }
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
              ${styles}
            `}
          >
            <div
              css={css`
                min-height: 125%;
              `}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
