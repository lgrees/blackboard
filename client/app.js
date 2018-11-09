import React, { Component } from 'react';
import * as knn from '@tensorflow-models/knn-classifier';
import * as tf from '@tensorflow/tfjs';
import * as mobilenetModule from '@tensorflow-models/mobilenet';
import Button from './components/Button';
import LabelSelect from './components/LabelSelect';
import ModeSelect from './components/ModeSelect';
import Result from './components/Result';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'train',
      label: '',
      result: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.predictResult = this.predictResult.bind(this);
    this.addTrainingData = this.addTrainingData.bind(this);
  }

  handleChange(e) {
    console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  }

  async addTrainingData() {
    const canvas = document.getElementById('defaultCanvas0');
    const canvasTensor = tf.fromPixels(canvas);
    const logits = this.mobilenet.infer(canvasTensor, 'conv_preds');
    console.log('Class data added for label= ', parseInt(this.state.label));
    await this.KNNClassifier.addExample(logits, parseInt(this.state.label));
  }

  async predictResult() {
    const canvas = document.getElementById('defaultCanvas0');
    const canvasTensor = tf.fromPixels(canvas);
    const logits = this.mobilenet.infer(canvasTensor, 'conv_preds');
    const prediction = await this.KNNClassifier.predictClass(logits);
    console.log('prediction: ', prediction);
  }

  async componentDidMount() {
    this.KNNClassifier = knn.create();
    this.mobilenet = await mobilenetModule.load();
  }

  render() {
    const { mode, result } = this.state;
    return (
      <div>
        <Button
          mode={mode}
          predict={this.predictResult}
          train={this.addTrainingData}
        />
        <ModeSelect handleChange={this.handleChange} />
        {this.state.mode === 'train' && (
          <LabelSelect handleChange={this.handleChange} />
        )}
        <Result result={result} />
      </div>
    );
  }
}

export default App;
