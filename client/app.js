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
<<<<<<< HEAD
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
    const other = await this.KNNClassifier.predict(canvasTensor);
    console.log('prediction: ', prediction);
    console.log('other: ', other);
=======
    this.setState({ result: '' });
    const canvas = document.getElementById('defaultCanvas0');
    const ctx = canvas.getContext('2d');
    const imgData = ctx.getImageData(0, 0, 400, 400);
    const imgTensor = tf.fromPixels(imgData);
    sketch.clear();
    sketch.createCanvas(400, 400);
    sketch.background(80);
    const label = parseInt(this.state.label);
    // const label = Math.floor(Math.random() * Math.floor(2));
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
    // const knn = this.KNNClassifier.similarities(logits).asType('float32');
    // const topKIndices = topK(await knn.dataSync(), 3).indices;

    // console.log('knn: ', knn);
    // console.log('top K Indices: ', topKIndices);
    console.log('prediction: ', prediction);
>>>>>>> 602ca1f3422564bafd40fc2657d64be73eaef355
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
        {result.length > 0 && <Result result={result} />}
      </div>
    );
  }
}

export default App;
