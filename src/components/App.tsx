import React from 'react';
import { Form, Row, Col, Layout } from 'antd';

import Container from './Container';
import ScrollbarFormItem from './ScrollbarFormItem';
import Preview from './Preview';
import reducer from '../modules/scrollOptions/reducer';

import { ReducerState } from '../modules/scrollOptions/types';

const initialState: ReducerState = {
  scrollbar: {
    option: 'scrollbar',
    props: [{ id: 0, property: 'width', value: 12 }],
  },
  'scrollbar-track': {
    option: 'scrollbar-track',
    props: [{ id: 0, property: 'background-color', value: 'red' }],
  },
  'scrollbar-thumb': {
    option: 'scrollbar-thumb',
    props: [{ id: 0, property: 'background-color', value: 'green' }],
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
                <ScrollbarFormItem
                  state={state.scrollbar}
                  dispatch={dispatch}
                />
                <ScrollbarFormItem
                  state={state['scrollbar-track']}
                  dispatch={dispatch}
                />
                <ScrollbarFormItem
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
