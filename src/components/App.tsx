import React from 'react';

import Layout from './layout';

import reducer from '../modules/reducer';
import {
  State,
  Property,
  ScrollItem,
  PropertyKeys,
  ScrollKeys,
} from '../modules/types';
import Preview from './preview';
import Editor from './editor';
import EditorItem from './editor-item';
import Options from './options';
import Option from './option';
import InputRange from './controls/input-range';
import { updateAction } from '../modules/actions';
import InputColor from './controls/input-color';
import InputBorder from './controls/input-border';

const initialState: State = {
  scrollbar: {
    name: 'scrollbar',
    props: { width: { name: 'width', value: 12 } },
  },
  'scrollbar-track': {
    name: 'scrollbar-track',
    props: {
      width: {
        name: 'width',
        value: 12,
      },
      'background-color': {
        name: 'background-color',
        value: '#D4D4D4',
      },
    },
  },
  'scrollbar-thumb': {
    name: 'scrollbar-thumb',
    props: {
      width: {
        name: 'width',
        value: 12,
      },
      'background-color': {
        name: 'background-color',
        value: '#D4D4D4',
      },
      'border-radius': {
        name: 'border-radius',
        value: 4,
      },
      border: {
        name: 'border',
        value: { width: 1, style: 'solid', color: '#fff' },
      },
    },
  },
};

type RenderOptionProps = {
  type: PropertyKeys;
  scrollName: ScrollKeys;
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  function renderOption({ type, scrollName }: RenderOptionProps) {
    switch (type) {
      case 'border':
        return (
          <Option title={type}>
            <InputBorder
              value={state[scrollName].props[type].value}
              onChange={(value: any) =>
                dispatch(
                  updateAction(scrollName, {
                    name: type,
                    value: {
                      ...state[scrollName].props[type].value,
                      ...value,
                    },
                  }),
                )
              }
            />
          </Option>
        );
      case 'background-color':
        return (
          <Option title={type}>
            <InputColor
              value={state[scrollName].props[type].value}
              onChange={(color: string) =>
                dispatch(
                  updateAction(scrollName, {
                    name: type,
                    value: color,
                  }),
                )
              }
            />
          </Option>
        );
      case 'width':
      case 'border-radius':
        return (
          <Option title={type}>
            <InputRange
              value={state[scrollName].props[type].value}
              onChange={(value: number) =>
                dispatch(
                  updateAction(scrollName, {
                    name: type,
                    value: Math.round(value),
                  }),
                )
              }
            />
          </Option>
        );
      default:
        return null;
    }
  }

  return (
    <Layout>
      <Editor>
        {Object.values(state).map((item: ScrollItem) => (
          <EditorItem title={item.name}>
            <Options>
              {Object.values(item.props).map((prop: Property) =>
                renderOption({
                  type: prop.name,
                  scrollName: item.name,
                }),
              )}
            </Options>
          </EditorItem>
        ))}
      </Editor>
      <Preview scrollbarState={state} />
    </Layout>
  );
};

export default App;
