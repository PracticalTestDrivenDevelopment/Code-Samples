import * as types from '../reducers/actionTypes';
import { MockSpeakerService } from '../services/mockSpeakerService';

export function getSpeakersSuccess(speakers) {
  return { type: types.GET_SPEAKERS_SUCCESS, speakers: speakers };
}

export function getSpeakers() {
    return function(dispatch) {
      return new MockSpeakerService().getAll().then(speakers => {
        dispatch(getSpeakersSuccess(speakers))
      }).catch(err => {
        throw(err);
      });
    };
  }
