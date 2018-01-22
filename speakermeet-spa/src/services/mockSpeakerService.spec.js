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

  describe('After Initialization', () => {
    let service = null;

    beforeEach(() => {
      service = new MockSpeakerService();
    });

    describe('Create', () => {
      it('exists', () => {
        expect(service.create).to.exist;
      });
    });

    describe('Get All', () => {
      it('exists', () => {
        // assert
        expect(service.getAll).to.exist;
      });

      describe('No Speakers Exist', () => {
        it('returns an empty array', () => {
          // act
          let promise = service.getAll();

          // assert
          return promise.then(result => {
            expect(result).to.have.lengthOf(0);
          });
        });
      });
    });

    describe('Speaker Listing', () => {
      it('returns speakers', () => {
        // arrange
        service.create({});

        // act
        let promise = service.getAll();

        // assert
        return promise.then(result => {
          expect(result).to.have.lengthOf(1);
        });
      });
    });
  });
});

class MockSpeakerService {
  constructor() {
    this._speakers = [];
  }

  create(speaker) {
    this._speakers.push(speaker);
  }

  getAll() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], this._speakers));
      }, 0);
    });
  }
}
