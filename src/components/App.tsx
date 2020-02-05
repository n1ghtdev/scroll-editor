import React from 'react';
import { Row, Col, Layout } from 'antd';

import LayoutContainer from './LayoutContainer';
import Header from './Header';
import ScrollbarForm from './ScrollbarForm';
import ScrollbarFormItem from './ScrollbarFormItem';
import Preview from './Preview';

import reducer from '../modules/reducer';
import { ReducerState } from '../modules/types';

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
      <Header title="WebKit scrollbar generator" />
      <Layout.Content style={{ paddingTop: '70px', height: '100%' }}>
        <Row type="flex" gutter={[16, 0]} style={{ height: '100%' }}>
          <Col span={12} style={{ height: '100%' }}>
            <ScrollbarForm>
              <ScrollbarFormItem state={state.scrollbar} dispatch={dispatch} />
              <ScrollbarFormItem
                state={state['scrollbar-track']}
                dispatch={dispatch}
              />
              <ScrollbarFormItem
                state={state['scrollbar-thumb']}
                dispatch={dispatch}
              />
            </ScrollbarForm>
          </Col>
          <Col span={12}>
            <Preview options={state} />
          </Col>
        </Row>
      </Layout.Content>
    </LayoutContainer>
  );
};

export default App;
