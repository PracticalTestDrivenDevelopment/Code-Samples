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
  });
});

class MockSpeakerService {
  getAll() {}
}
