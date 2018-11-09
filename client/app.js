import React, { Component } from 'react';
import * as knn from '@tensorflow-models/knn-classifier';
import Button from './components/Button';
import LabelSelect from './components/LabelSelect';
import ModeSelect from './components/ModeSelect';
import Result from './components/Result';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'train',
      label: '',
      result: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    const KNNClassifier = knn.create();
    console.log('classifier:', KNNClassifier);
  }

  render() {
    const { mode, label, result } = this.state;
    const handleChange = this.handleChange;

    return (
      <div>
        <Button mode={mode} />
        <ModeSelect handleChange={handleChange} />
        {this.state.mode === 'train' && (
          <LabelSelect handleChange={handleChange} />
        )}
        <Result result={result} />
      </div>
    );
  }
}

export default App;
