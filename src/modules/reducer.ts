import { ActionTypes, State, ScrollKeys } from './types';
import { Action } from './actions';

import produce from 'immer';

const reducer = (state: State, action: Action): State => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.UPDATE_PROPERTY:
        const toUpdateProperty =
          draft[action.option as ScrollKeys].props[action.payload.name];
        if (!!toUpdateProperty) toUpdateProperty.value = action.payload.value;
        break;
      default:
        return state;
    }
  });
};

export default reducer;
