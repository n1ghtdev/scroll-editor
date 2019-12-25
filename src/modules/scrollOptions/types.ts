type Scrollbar = {
  width: string | number;
  color: string;
};

type ScrollbarTrack = {
  radius: string | number;
  color: string;
};

type ScrollbarThumb = {
  radius?: string | number;
  color: string;
};

interface OptionsDefaultState {
  scrollbar: Scrollbar;
  track: ScrollbarTrack;
  thumb: ScrollbarThumb;
}

interface OptionsHoverActiveState {
  scrollbar?: Scrollbar;
  track?: ScrollbarTrack;
  thumb: ScrollbarThumb;
}

export interface ReducerState {
  default: OptionsDefaultState;
  hover: OptionsHoverActiveState;
  active: OptionsHoverActiveState;
}

export type ScrollbarState = 'default' | 'hover' | 'active';

export const UPDATE_SCROLLBAR = 'updateScrollbar';
export const UPDATE_TRACK = 'updateTrack';
export const UPDATE_THUMB = 'updateThumb';

export const ADD_PROPERTY = 'add';

export interface updateActionProps {
  name: string;
  value: any;
  state: ScrollbarState;
}

interface updateScrollbarType {
  type: typeof UPDATE_SCROLLBAR;
  payload: updateActionProps;
}

interface updateTrackType {
  type: typeof UPDATE_TRACK;
  payload: updateActionProps;
}

interface updateThumbType {
  type: typeof UPDATE_THUMB;
  payload: updateActionProps;
}

interface addActionProps {
  name: string;
  value: any;
  state: ScrollbarState;
}

interface addActionType {
  type: typeof ADD_PROPERTY;
  payload: addActionProps;
}

export type ActionTypes =
  | updateScrollbarType
  | updateTrackType
  | updateThumbType
  | addActionType;
