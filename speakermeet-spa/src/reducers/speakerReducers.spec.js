import { expect } from 'chai';
import * as actions from '../actions/speakerActions';
import * as types from './actionTypes';
import { speakersReducer } from './speakerReducer';

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
