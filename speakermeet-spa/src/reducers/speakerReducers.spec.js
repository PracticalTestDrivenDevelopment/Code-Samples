import { expect } from 'chai';
import * as actions from '../actions/speakerActions';
import * as types from './actionTypes';

describe('Speaker Reducers', () => {
  describe('Speakers Reducer', () => {
    it('exists', () => {
      expect(speakersReducer).to.exist;
    });

    it('Loads Speakers', () => {
      // arrange
      const initialState = [];

      const speaker = {
        id: 'test-speaker',
        firstName: 'Test',
        lastName: 'Speaker'
      };
      const action = actions.getSpeakersSuccess([speaker]);

      // act
      const newState = speakersReducer(initialState, action);

      // assert
      expect(newState).to.have.lengthOf(1);
      expect(newState[0]).to.deep.equal(speaker);
    });
  });
});

function speakersReducer(state = [], action) {
  switch (action.type) {
    case types.GET_SPEAKERS_SUCCESS:
      return action.speakers;
    default:
      return state;
  }
}
