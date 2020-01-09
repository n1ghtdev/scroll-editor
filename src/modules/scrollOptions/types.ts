export const UPDATE_PROPERTY = 'update';
export const ADD_PROPERTY = 'add';

export enum ActionTypes {
  UPDATE_PROPERTY = 'update',
  ADD_PROPERTY = 'add',
}
export enum PropertyInputType {
  width = 'slider_input',
  color = 'color_picker',
  boxShadow = '',
  border = 'border',
}

export interface ActionPayload {
  id: number;
  value: string | number;
}
export interface ActionPayloadWithProperty extends ActionPayload {
  id: number;
  value: string | number;
  property: string;
}

export type OptionProperty = {
  option: string;
  props: Array<{
    id: number;
    value: string | number;
    property?: string;
  }>;
};

export interface ReducerState {
  [key: string]: OptionProperty;
}
