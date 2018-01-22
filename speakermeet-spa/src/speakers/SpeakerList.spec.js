import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import { SpeakerList } from './SpeakerList';

describe('Speaker List', () => {
  it('exists', () => {
    expect(SpeakerList).to.exist;
  });

  describe('On Render', () => {
    describe('No Speakers Exist', () => {
      it('renders no speakers message', () => {
        // arrange
        const speakers = [];

        // arrange
        const component = setup({ speakers })

        // assert
        expect(component.find('#no-speakers').text()).to.equal('No Speakers Available.');
      });
    });
  });
});

function setup(props) {
  const componentProps = {
    speakers: props.speakers || []
  };

  return shallow(<SpeakerList {...componentProps} />);
}
