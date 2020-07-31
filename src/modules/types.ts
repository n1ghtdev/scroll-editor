export enum ActionTypes {
  UPDATE_PROPERTY = 'update',
  ADD_PROPERTY = 'add',
  REMOVE_PROPERTY = 'remove',
}

export type ScrollProperty = {
  value: any;
  name: PropertyKeys;
  active: boolean;
};

export type PropertyKeys =
  | 'width'
  | 'border'
  | 'border-radius'
  | 'background-color'
  | 'box-shadow';

export type Properties = { [key in PropertyKeys]: ScrollProperty };

export type ScrollItem = {
  name: ScrollKeys;
  props: { [key: string]: any };
};

export type ScrollKeys = 'scrollbar' | 'scrollbar-track' | 'scrollbar-thumb';

export type State = { [key in ScrollKeys]: ScrollItem };
