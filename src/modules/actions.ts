import { ActionTypes, ScrollProperty, PropertyKeys } from './types';

export const updateAction = (option: string, payload: ScrollProperty) =>
  ({
    type: ActionTypes.UPDATE_PROPERTY,
    option,
    payload,
  } as const);

export const addAction = (option: string, name: PropertyKeys) =>
  ({
    type: ActionTypes.ADD_PROPERTY,
    option,
    payload: {
      name,
    },
  } as const);

export type Action = ReturnType<typeof updateAction | typeof addAction>;
