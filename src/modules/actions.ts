import { ActionTypes, Property } from './types';

export const updateAction = (option: string, payload: Property) =>
  ({
    type: ActionTypes.UPDATE_PROPERTY,
    option,
    payload,
  } as const);

export type Action = ReturnType<typeof updateAction>;
