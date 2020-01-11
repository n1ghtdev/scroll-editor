export enum ActionTypes {
  UPDATE_PROPERTY = 'update',
  ADD_PROPERTY = 'add',
  REMOVE_PROPERTY = 'remove',
}

export interface ActionPayload {
  id: number;
  value: any;
}
export interface ActionPayloadWithProperty {
  id: number;
  property: string;
  value?: any;
}

export type Property = {
  id: number;
  value?: any;
  property?: string;
};

export type OptionProperty = {
  option: string;
  props: Property[];
};

export interface ReducerState {
  [key: string]: OptionProperty;
}
