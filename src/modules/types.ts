export enum ActionTypes {
  UPDATE_PROPERTY = 'update',
  ADD_PROPERTY = 'add',
  REMOVE_PROPERTY = 'remove',
}

export type ActionPayload = {
  id: number;
  value: any;
};
export type ActionPayloadWithProperty = {
  id: number;
  property: string;
  value?: any;
};

export type Property = {
  id: number;
  value: any;
  property: string;
};

export type ScrollItem = {
  name: string;
  options: Property[];
};

export type ScrollKeys = 'scrollbar' | 'scrollbar-track' | 'scrollbar-thumb';

export type State = { [key in ScrollKeys]: ScrollItem };
