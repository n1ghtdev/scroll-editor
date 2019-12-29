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
interface BaseAction {
  type: ActionTypes;
  option: 'scrollbar' | 'track' | 'thumb';
}
interface ActionPayload {
  id: number;
  value: string | number;
}
interface ActionPayloadWithProperty extends ActionPayload {
  id: number;
  value: string | number;
  property: string;
}
export interface UpdateAction extends BaseAction {
  type: ActionTypes.UPDATE_PROPERTY;
  payload: ActionPayload;
}
export interface AddAction extends BaseAction {
  type: ActionTypes.ADD_PROPERTY;
  payload: ActionPayloadWithProperty;
}

export type ReducerActions = UpdateAction | AddAction;

export type ScrollOptions = {
  id: number;
  value: string | number;
  property?: string;
};

export interface ReducerState {
  scrollbar: ScrollOptions[];
  track: ScrollOptions[];
  thumb: ScrollOptions[];
}
