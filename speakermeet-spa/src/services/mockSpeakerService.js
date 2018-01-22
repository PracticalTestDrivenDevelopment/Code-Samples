export class MockSpeakerService {
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
