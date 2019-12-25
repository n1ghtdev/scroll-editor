import {
  ReducerState,
  ActionTypes,
  UPDATE_SCROLLBAR,
  UPDATE_TRACK,
  UPDATE_THUMB,
  ADD_PROPERTY,
} from './types';

const reducer = (state: ReducerState, action: ActionTypes) => {
  const { payload } = action;

  switch (action.type) {
    case UPDATE_SCROLLBAR:
      return {
        ...state,
        [payload.state]: {
          ...state[payload.state],
          scrollbar: {
            ...state[payload.state].scrollbar,
            [payload.name]: payload.value,
          },
        },
      };
    case UPDATE_TRACK:
      return {
        ...state,
        [payload.state]: {
          ...state[payload.state],
          track: {
            ...state[payload.state].track,
            [payload.name]: payload.value,
          },
        },
      };
    case UPDATE_THUMB:
      console.log(action.payload);

      return {
        ...state,
        [payload.state]: {
          ...state[payload.state],
          thumb: {
            ...state[payload.state].thumb,
            [payload.name]: payload.value,
          },
        },
      };
    case ADD_PROPERTY:
      return {
        ...state,
        [payload.name]: {
          ...[payload.name],
          ...payload.value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
