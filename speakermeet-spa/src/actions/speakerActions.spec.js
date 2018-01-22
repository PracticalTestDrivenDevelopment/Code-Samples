import { expect } from 'chai';
import { GET_SPEAKERS_SUCCESS } from '../reducers/actionTypes';
import { getSpeakersSuccess } from './speakerActions';

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
