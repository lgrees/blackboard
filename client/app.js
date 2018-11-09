import React, { Component } from 'react';
import * as knn from '@tensorflow-models/knn-classifier';
import Button from './components/Button';
import LabelSelect from './components/LabelSelect';
import ModeSelect from './components/ModeSelect';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'train',
      label: '',
    };
  }

  componentDidMount() {
    const KNNClassifier = knn.create();
    console.log('classifier:', KNNClassifier);
  }

  render() {
    return (
      <div>
        <Button mode={this.state.mode} />
        <ModeSelect />
        {this.state.mode === 'train' && <LabelSelect />}
      </div>
    );
  }
}

export default App;
