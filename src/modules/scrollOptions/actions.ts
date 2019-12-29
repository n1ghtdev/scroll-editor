import { ActionTypes, ReducerActions } from './types';

export const updatePropertyAction = (
  option: any,
  payload: any,
): ReducerActions => ({
  type: ActionTypes.UPDATE_PROPERTY,
  option,
  payload,
});

export const addPropertyAction = (
  option: any,
  payload: any,
): ReducerActions => ({
  type: ActionTypes.ADD_PROPERTY,
  option,
  payload,
});
