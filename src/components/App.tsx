import React from 'react';
import { Form, Row, Col, Layout, Typography } from 'antd';

import LayoutContainer from './LayoutContainer';
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
    props: [{ id: 0, property: 'background-color', value: '#D4D4D4' }],
  },
  'scrollbar-thumb': {
    option: 'scrollbar-thumb',
    props: [{ id: 0, property: 'background-color', value: '#858C85' }],
  },
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <LayoutContainer>
      <Layout.Header>
        <Row>
          <Col>
            <Typography.Title
              style={{
                color: '#fff',
                marginBottom: '0',
                marginTop: '16px',
                fontSize: '24px',
                textTransform: 'uppercase',
              }}
              level={1}
            >
              CSS WebKit Scrollbar generator
            </Typography.Title>
          </Col>
        </Row>
      </Layout.Header>
      <Layout.Content style={{ paddingTop: '20px' }}>
        <Row type="flex">
          <Col span={12}>
            <Form layout="vertical">
              <ScrollbarFormItem state={state.scrollbar} dispatch={dispatch} />
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
    </LayoutContainer>
  );
};

export default App;
