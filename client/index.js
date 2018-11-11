// import { loss, optimizer, predict } from '../models/linear-regression';
import { loss, optimizer, predict } from '../models/polynomial-regression';
import sketch from './sketch';
import * as tf from '@tensorflow/tfjs';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(<App />, document.getElementById('app'));

// let s = sk => {
//   sk.setup = () => {
//     sk.createCanvas(400, 400);
//     sk.background(80);
//   };

//   sk.draw = () => {
//     // sk.background(80);
//     if (sk.mouseIsPressed) {
//       sk.fill(1000);
//       sk.stroke(1000);
//       sk.ellipse(sk.mouseX, sk.mouseY, 10, 10);
//     }
//   };

// };

// const P5 = new p5(s);
