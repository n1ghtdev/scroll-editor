import React from 'react';
import { Form, Row, Col, Layout } from 'antd';

import Container from './Container';
import OptionsForm from './OptionsForm';
import Preview from './Preview';
import reducer from '../modules/scrollOptions/reducer';

import { ReducerState } from '../modules/scrollOptions/types';

// TODO: mv to separate file
const initialState: ReducerState = {
  scrollbar: {
    option: 'scrollbar',
    props: [
      { id: 0, property: 'width', value: 12 },
      // { id: 1, property: 'background-color', value: '#eeeeee' },
    ],
  },
  'scrollbar-track': {
    option: 'scrollbar-track',
    props: [
      { id: 0, property: 'border-radius', value: 0 },
      { id: 1, property: 'background-color', value: 'red' },
    ],
  },
  'scrollbar-thumb': {
    option: 'scrollbar-thumb',
    props: [
      { id: 0, property: 'border-radius', value: 0 },
      { id: 1, property: 'background-color', value: 'green' },
    ],
  },
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Layout>
      <Container>
        <Layout.Header>
          <Row>
            <Col>Header/Title of app</Col>
          </Row>
        </Layout.Header>
        <Layout.Content>
          <Row type="flex">
            <Col span={12}>
              <Form layout="vertical">
                <OptionsForm state={state.scrollbar} dispatch={dispatch} />
                <OptionsForm
                  state={state['scrollbar-track']}
                  dispatch={dispatch}
                />
                <OptionsForm
                  state={state['scrollbar-thumb']}
                  dispatch={dispatch}
                />
              </Form>
            </Col>
            <Col span={12}>
              <Preview options={state} />
            </Col>
          </Row>
        </Layout.Content>
        <Layout.Footer>n1ghtdev</Layout.Footer>
      </Container>
    </Layout>
  );
};

export default App;
