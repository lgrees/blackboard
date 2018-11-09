import React from 'react';
import * as tf from '@tensorflow/tfjs';
import * as p5 from 'p5';

const handleClick = () => {
  let canvas = document.getElementById('defaultCanvas0');
  tf.tidy(() => {
    const tensor = tf.fromPixels(canvas);
    tensor.print();
  });
};

export const Button = props => {
  const buttonText = props.mode === 'train' ? 'Train' : 'Predict';
  const { predict, train } = props;
  return (
    <button
      type="button"
      onClick={() => {
        if (props.mode === 'train') train();
        else predict();
      }}
    >
      {buttonText}
    </button>
  );
};

export default Button;
