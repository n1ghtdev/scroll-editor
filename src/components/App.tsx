import React from 'react';

import Layout from './layout';

import reducer, { initialState } from '../modules/reducer';
import { ScrollItem, PropertyKeys } from '../modules/types';
import Preview from './preview';
import Editor from './editor';
import EditorItem from './editor-item';
import Properties from './properties';
import { updateAction, addAction } from '../modules/actions';

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const updateProperty = React.useCallback(
    (scrollName: string, payload: any) =>
      dispatch(updateAction(scrollName, payload)),
    [],
  );

  const addProperty = React.useCallback(
    (scrollName: string, name: PropertyKeys) =>
      dispatch(addAction(scrollName, name)),
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
              addProperty={(name: PropertyKeys) => addProperty(item.name, name)}
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
