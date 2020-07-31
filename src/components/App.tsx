import React from 'react';

import Layout from './layout';

import reducer, { initialState } from '../modules/reducer';
import { ScrollItem } from '../modules/types';
import Preview from './preview';
import Editor from './editor';
import EditorItem from './editor-item';
import Properties from './properties';
import { updateAction } from '../modules/actions';

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const updateProperty = React.useCallback(
    (scrollName: string, payload: any) =>
      dispatch(updateAction(scrollName, payload)),
    [],
  );

  return (
    <Layout>
      <Editor>
        {Object.values(state).map((item: ScrollItem) => (
          <EditorItem title={item.name}>
            <Properties
              properties={Object.values(item.props)}
              updateProperty={(payload: any) =>
                updateProperty(item.name, payload)
              }
              addProperty={() => {}}
              removeProperty={() => {}}
            />
          </EditorItem>
        ))}
      </Editor>
      <Preview scrollbarState={state} />
    </Layout>
  );
};

export default App;
