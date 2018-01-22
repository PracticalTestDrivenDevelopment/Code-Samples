import { expect } from 'chai';

describe('Speaker Actions', () => {
  describe('Sync Actions', () => {
    describe('Get Speakers Success', () => {
      it('exists', () => {
        expect(getSpeakersSuccess).to.exist;
      });

      it('is created with correct data', () => {
        // arrange
        const speakers = [
          {
            id: 'test-speaker',
            firstName: 'Test',
            lastName: 'Speaker'
          }
        ];

        // act
        const result = getSpeakersSuccess(speakers);

        // assert
        expect(result.type).to.equal(GET_SPEAKERS_SUCCESS);
        expect(result.speakers).to.have.lengthOf(1);
        expect(result.speakers).to.deep.equal(speakers);
      });
    });
  });
});

const GET_SPEAKERS_SUCCESS = 'GET_SPEAKERS_SUCCESS';

function getSpeakersSuccess(speakers) {
  return { type: GET_SPEAKERS_SUCCESS, speakers: speakers };
}
