import React from 'react';
import { expect } from 'chai';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SpeakersPage } from './SpeakersPage';

describe('Speakers Page', () => {
  it('exists', () => {
    expect(SpeakersPage).to.exist;
  });

  describe('Render', () => {
    beforeEach(() => {
      Enzyme.configure({ adapter: new Adapter() });
    });

    it('renders', () => {
      // arrange
      const props = {
        speakers: [
          {
            id: 'test-speaker',
            firstName: 'Test',
            lastName: 'Speaker'
          }
        ]
      };

      // act
      const component = shallow(<SpeakersPage {...props} />);

      // assert
      expect(component.find('SpeakerList')).to.exist;
      expect(component.find('SpeakerList').props().speakers).to.deep.equal(props.speakers);
    });
  });
});
