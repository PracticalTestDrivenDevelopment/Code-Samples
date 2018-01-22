import React, {Component} from 'react';
import { SpeakerList } from './SpeakerList';

export class SpeakersPage extends Component {
  render() {
    return <SpeakerList speakers={this.props.speakers} />;
  }
}
