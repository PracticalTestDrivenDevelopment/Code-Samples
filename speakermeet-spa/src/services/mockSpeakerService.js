import * as errorTypes from '../reducers/errorTypes';

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

  getById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          reject({ type: errorTypes.SPEAKER_NOT_FOUND });
      }, 0);
    });
  }
}
