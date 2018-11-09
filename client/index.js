// import { loss, optimizer, predict } from '../models/linear-regression';
import { loss, optimizer, predict } from '../models/polynomial-regression';
import p5 from 'p5';
import * as tf from '@tensorflow/tfjs';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(
  <App />,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);

let s = sk => {
  sk.setup = () => {
    sk.createCanvas(400, 400);
    sk.background(80);
  };

  sk.draw = () => {
    // sk.background(80);
    if (sk.mouseIsPressed) {
      sk.fill(1000);
      sk.stroke(1000);
      sk.ellipse(sk.mouseX, sk.mouseY, 10, 10);
    }
    // sk.mousePressed = () => {
    //   let x = sk.map(sk.mouseX, 0, 400, 0, 1);
    //   let y = sk.map(sk.mouseY, 0, 400, 1, 0);
    //   xVals.push(x);
    //   yVals.push(y);
    // };

    // sk.frameRate();
  };
};

const P5 = new p5(s);
