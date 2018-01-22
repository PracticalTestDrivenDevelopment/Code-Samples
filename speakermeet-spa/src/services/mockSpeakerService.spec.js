import { expect } from 'chai';

describe('Mock Speaker Service', () => {
  it('exits', () => {
    expect(MockSpeakerService).to.exist;
  });

  it('can be constructed', () => {
    // arrange
    let service = new MockSpeakerService();

    // assert
    expect(service).to.be.an.instanceof(MockSpeakerService);
  });

  describe('Get All', () => {
    it('exists', () => {
      // arrange
      let service = new MockSpeakerService();

      // assert
      expect(service.getAll).to.exist;
    });

    describe('No Speakers Exist', () => {
      it('returns an empty array', () => {
        // arrange
        let service = new MockSpeakerService();

        // act
        let promise = service.getAll();

        // assert
        return promise.then(result => {
          expect(result).to.have.lengthOf(0);
        });
      });
    });
  });
});

class MockSpeakerService {
  getAll() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], this._speakers));
      }, 0);
    });
  }
}
