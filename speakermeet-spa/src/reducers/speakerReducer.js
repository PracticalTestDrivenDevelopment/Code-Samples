import * as types from './actionTypes';

export function speakersReducer(state = [], action) {
  switch (action.type) {
    case types.GET_SPEAKERS_SUCCESS:
      return action.speakers;
    default:
      return state;
  }
}
