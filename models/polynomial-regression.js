import * as tf from '@tensorflow/tfjs';
// import { random } from 'p5';

const learningRate = 0.3;
let a = tf.variable(tf.scalar(Math.random()));
let b = tf.variable(tf.scalar(Math.random()));
let c = tf.variable(tf.scalar(Math.random()));

export const optimizer = tf.train.sgd(learningRate);

export const loss = (pred, labels) => {
  return pred
    .sub(labels)
    .square()
    .mean();
};

export const predict = x => {
  const xs = tf.tensor1d(x);
  // const ys = xs.mul(a).add(b);
  const ys = xs
    .square()
    .mul(a)
    .add(xs.mul(b))
    .add(c);
  return ys;
};
