import produce from 'immer';

import { ActionTypes, State, ScrollKeys } from './types';
import { Action } from './actions';

export const initialState: State = {
  scrollbar: {
    name: 'scrollbar',
    props: { width: { name: 'width', value: 12, active: true } },
  },
  'scrollbar-track': {
    name: 'scrollbar-track',
    props: {
      width: {
        name: 'width',
        value: 12,
        active: true,
      },
      'background-color': {
        name: 'background-color',
        value: '#382e8e',
        active: true,
      },
    },
  },
  'scrollbar-thumb': {
    name: 'scrollbar-thumb',
    props: {
      width: {
        name: 'width',
        value: 12,
        active: true,
      },
      'background-color': {
        name: 'background-color',
        value: '#4834ec',
        active: true,
      },
      'border-radius': {
        name: 'border-radius',
        value: 4,
        active: false,
      },
      border: {
        name: 'border',
        value: { width: 1, style: 'solid', color: '#fff', active: false },
      },
    },
  },
};

const reducer = (state: State, action: Action): State => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.UPDATE_PROPERTY: {
        const toUpdateProperty =
          draft[action.option as ScrollKeys].props[action.payload.name];
        if (!!toUpdateProperty) toUpdateProperty.value = action.payload.value;
        break;
      }
      case ActionTypes.ADD_PROPERTY: {
        const toUpdateProperty =
          draft[action.option as ScrollKeys].props[action.payload.name];
        if (!!toUpdateProperty) toUpdateProperty.active = true;
        break;
      }
      default:
        return state;
    }
  });
};

export default reducer;
