import {
  updateActionProps,
  ActionTypes,
  UPDATE_SCROLLBAR,
  UPDATE_TRACK,
  UPDATE_THUMB,
} from './types';

export const updateScrollbar = (payload: updateActionProps): ActionTypes => ({
  type: UPDATE_SCROLLBAR,
  payload,
});

export const updateTrack = (payload: updateActionProps): ActionTypes => ({
  type: UPDATE_TRACK,
  payload,
});

export const updateThumb = (payload: updateActionProps): ActionTypes => ({
  type: UPDATE_THUMB,
  payload,
});
