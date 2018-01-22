import * as types from '../reducers/actionTypes';

export function getSpeakersSuccess(speakers) {
  return { type: types.GET_SPEAKERS_SUCCESS, speakers: speakers };
}
