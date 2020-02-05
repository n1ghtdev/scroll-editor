import Reducer from '../modules/reducer';
import * as Actions from '../modules/actions';

const initialState = {
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

describe('test reducer and actions', () => {
  it('should return initial value', () => {
    const reducer = Reducer(initialState, Actions);

    expect(reducer).toEqual(initialState);
  });
  it('add new property with action', () => {
    const action = {
      type: 'add',
      option: 'scrollbar',
      payload: {
        id: 123,
        property: 'background-color',
        value: '#000',
      },
    };

    const reducer = Reducer(initialState, action);
    expect(reducer.scrollbar.props).toHaveLength(2);
  });
  it('remove property with action', () => {
    const action = {
      type: 'remove',
      option: 'scrollbar',
      id: 0,
    };

    const reducer = Reducer(initialState, action);
    expect(reducer.scrollbar.props).toHaveLength(0);
  });
  it('update property with action', () => {
    const action = {
      type: 'update',
      option: 'scrollbar',
      payload: {
        id: 0,
        value: 6,
      },
    };

    const reducer = Reducer(initialState, action);
    expect(reducer.scrollbar.props[0].value).toEqual(6);
  });
});
