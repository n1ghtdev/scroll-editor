import { ActionTypes, ActionPayload, ActionPayloadWithProperty } from './types';

export const updatePropertyAction = (option: string, payload: ActionPayload) =>
  ({
    type: ActionTypes.UPDATE_PROPERTY,
    option,
    payload,
  } as const);

export const addPropertyAction = (
  option: string,
  payload: ActionPayloadWithProperty,
) =>
  ({
    type: ActionTypes.ADD_PROPERTY,
    option,
    payload,
  } as const);

export type Action = ReturnType<
  typeof updatePropertyAction | typeof addPropertyAction
>;
