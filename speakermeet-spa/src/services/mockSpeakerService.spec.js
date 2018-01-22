import { expect } from 'chai';

describe('Mock Speaker Service', () => {
  it('exits', () => {
    expect(MockSpeakerService).to.exist;
  });
});

let MockSpeakerService = {};
