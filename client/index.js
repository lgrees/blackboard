import { loss, optimizer, predict } from '../models/regression';
import p5 from 'p5';
import * as tf from '@tensorflow/tfjs';

let xVals = [];
let yVals = [];

let s = sk => {
  sk.setup = () => {
    sk.createCanvas(400, 400);
    sk.background(80);
  };

  sk.draw = () => {
    sk.background(80);

    tf.tidy(() => {
      if (xVals.length > 0) {
        const ys = tf.tensor1d(yVals);
        optimizer.minimize(() => loss(predict(xVals), ys));
      }

      //designating how points should look
      sk.stroke(255);
      sk.strokeWeight(8);

      for (let i = 0; i < xVals.length; i++) {
        let px = sk.map(xVals[i], 0, 1, 0, 400);
        let py = sk.map(yVals[i], 0, 1, 400, 0);
        sk.point(px, py);
      }

      let xs = [0, 1];
      let ys = predict(xs);
      let x1 = sk.map(xs[0], 0, 1, 0, 400);
      let x2 = sk.map(xs[1], 0, 1, 0, 400);
      let lineY = ys.dataSync();
      let y1 = sk.map(lineY[0], 0, 1, 400, 0);
      let y2 = sk.map(lineY[1], 0, 1, 400, 0);

      sk.line(x1, y1, x2, y2);
      console.log(tf.memory());
    });
  };
  sk.mousePressed = () => {
    let x = sk.map(sk.mouseX, 0, 400, 0, 1);
    let y = sk.map(sk.mouseY, 0, 400, 1, 0);
    xVals.push(x);
    yVals.push(y);
  };

  sk.frameRate();
};

const P5 = new p5(s);
