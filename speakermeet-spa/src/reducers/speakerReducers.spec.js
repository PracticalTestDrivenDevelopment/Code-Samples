import { expect } from 'chai';

describe('Speaker Reducers', () => {
  describe('Speakers Reducer', () => {
    it('exists', () => {
      expect(speakersReducer).to.exist;
    });
  });
});

function speakersReducer() {}
