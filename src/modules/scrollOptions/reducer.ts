import { ActionTypes, ReducerState } from './types';
import { Action } from './actions';

import produce from 'immer';

const reducer = (state: ReducerState, action: Action): ReducerState => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.UPDATE_PROPERTY:
        const toUpdateProperty = draft[action.option].props.find(
          prop => prop.id === action.payload.id,
        );
        if (!!toUpdateProperty) toUpdateProperty.value = action.payload.value;
        break;
      case ActionTypes.ADD_PROPERTY:
        // TODO: prevent from adding duplicates
        console.log(action);

        draft[action.option].props.push({
          ...action.payload,
          value: undefined,
        });
        break;
      // TODO: add remove
    }
  });
};

export default reducer;
