import React from 'react';

import Layout from './layout';

import reducer from '../modules/reducer';
import { State, Property, ScrollItem } from '../modules/types';
import Preview from './preview';
import Editor from './editor';
import EditorItem from './editor-item';
import Options from './options';
import Option from './option';
import Range from './controls/range';
import InputRange from './controls/input-range';
import { updatePropertyAction } from '../modules/actions';

const initialState: State = {
  scrollbar: {
    name: 'scrollbar',
    options: [{ id: 0, property: 'width', value: 12 }],
  },
  'scrollbar-track': {
    name: 'scrollbar-track',
    options: [{ id: 0, property: 'background-color', value: '#D4D4D4' }],
  },
  'scrollbar-thumb': {
    name: 'scrollbar-thumb',
    options: [{ id: 0, property: 'background-color', value: '#858C85' }],
  },
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  console.log(state);

  return (
    <Layout>
      <Editor>
        <EditorItem title="::scrollbar">
          <Options>
            <Option title="width">
              <InputRange
                value={state['scrollbar'].options[0].value}
                onChange={(value: number) => {
                  console.log(state['scrollbar'].options[0]);

                  dispatch(
                    updatePropertyAction('scrollbar', {
                      id: 0,
                      value: Math.round(value),
                    }),
                  );
                }}
              />
            </Option>
          </Options>
        </EditorItem>
      </Editor>
      <Preview>test</Preview>
    </Layout>
  );
};

export default App;
