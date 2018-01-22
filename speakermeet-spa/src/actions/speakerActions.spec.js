import { expect } from 'chai';

describe('Speaker Actions', () => {
  describe('Sync Actions', () => {
    describe('Get Speakers Success', () => {
      it('exists', () => {
        expect(getSpeakersSuccess).to.exist;
      });
    });
  });
});

function getSpeakersSuccess() {
}
