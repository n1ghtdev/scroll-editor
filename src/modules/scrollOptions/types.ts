export const UPDATE_PROPERTY = 'update';
export const ADD_PROPERTY = 'add';

export enum ActionTypes {
  UPDATE_PROPERTY = 'update',
  ADD_PROPERTY = 'add',
}

export interface ActionPayload {
  id: number;
  value: string | number;
}
export interface ActionPayloadWithProperty {
  id: number;
  property: string;
}

export type Property = {
  id: number;
  value?: string | number;
  property?: string;
};

export type OptionProperty = {
  option: string;
  props: Property[];
};

export interface ReducerState {
  [key: string]: OptionProperty;
}
