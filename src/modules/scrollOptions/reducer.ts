import { ActionTypes, ReducerActions, ReducerState } from './types';
import produce from 'immer';

const reducer = (state: ReducerState, action: ReducerActions): ReducerState => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.UPDATE_PROPERTY:
        const toUpdateProperty = draft[action.option].find(
          prop => prop.id === action.payload.id,
        );
        if (!!toUpdateProperty) toUpdateProperty.value = action.payload.value;
        break;
      case ActionTypes.ADD_PROPERTY:
        draft[action.option].push(action.payload);
        break;
    }
  });
};

export default reducer;
