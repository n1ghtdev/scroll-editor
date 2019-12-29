/** @jsx jsx */
import React from 'react';
import { Row, Col } from 'antd';
import { css, jsx } from '@emotion/core';

import Container from './Container';
import OptionsForm from './OptionsForm';
import Preview from './Preview';

import reducer from '../modules/scrollOptions/reducer';

import { ReducerState } from '../modules/scrollOptions/types';

const initialState: ReducerState = {
  scrollbar: [
    { id: 0, property: 'width', value: 12 },
    { id: 1, property: 'color', value: '#eeeeee' },
  ],
  track: [
    { id: 0, property: 'radius', value: 0 },
    { id: 1, property: 'color', value: 'red' },
  ],
  thumb: [
    { id: 0, property: 'radius', value: 0 },
    { id: 1, property: 'color', value: 'red' },
  ],
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const styles = css`
    &::-webkit-scrollbar {
      width: 0px;
      background-color: #000;
    }
    &::-webkit-scrollbar-track {
      background-color: #000;
      border-radius: 0px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #000;
      border-radius: 0px;
      &:hover {
        background-color: #000;
      }
      &:active {
        background-color: #000;
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
