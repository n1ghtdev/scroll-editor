/** @jsx jsx */
import React from 'react';
import { Row, Col, Form } from 'antd';
import { css, jsx } from '@emotion/core';

import Container from './Container';
import OptionsForm from './OptionsForm';
import Preview from './Preview';

import reducer from '../modules/scrollOptions/reducer';

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
          <OptionsForm state={state} dispatch={dispatch} />
        </Col>
        <Col span={12}>
          <Preview previewStyles={styles} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
