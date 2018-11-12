import React, { Component } from 'react';
import * as knn from '@tensorflow-models/knn-classifier';
import * as tf from '@tensorflow/tfjs';
import * as mobilenetModule from '@tensorflow-models/mobilenet';
import Button from './components/Button';
import LabelSelect from './components/LabelSelect';
import ModeSelect from './components/ModeSelect';
import Result from './components/Result';
import sketch from './sketch';

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
    // console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  }

  async addTrainingData() {
    this.setState({ result: '' });
    const canvas = document.getElementById('defaultCanvas0');
    const ctx = canvas.getContext('2d');
    const imgData = ctx.getImageData(0, 0, 400, 400);
    const imgTensor = tf.fromPixels(imgData);
    sketch.clear();
    sketch.createCanvas(400, 400);
    sketch.background(80);
    const label = parseInt(this.state.label);
    const logits = this.mobilenet.infer(imgTensor, 'conv_preds');
    await this.KNNClassifier.addExample(logits, label);
  }

  async predictResult() {
    this.setState({ result: '' });
    const canvas = document.getElementById('defaultCanvas0');
    const ctx = canvas.getContext('2d');
    const imgData = tf.fromPixels(ctx.getImageData(0, 0, 400, 400));
    const logits = this.mobilenet.infer(imgData, 'conv_preds');
    const prediction = await this.KNNClassifier.predictClass(logits, 3);
    this.setState({ result: prediction.classIndex.toString() });
    sketch.clear();
    sketch.createCanvas(400, 400);
    sketch.background(80);
    console.log('prediction: ', prediction);
  }

  async componentDidMount() {
    const myStorage = window.localStorage;
    myStorage.clear();
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
        {result.length > 0 && <Result result={result} />}
      </div>
    );
  }
}

export default App;
