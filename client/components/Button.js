import React from 'react';
import * as tf from '@tensorflow/tfjs';

const handleClick = () => {
  let canvas = document.getElementById('defaultCanvas0');
  tf.tidy(() => {
    const tensor = tf.fromPixels(canvas);
    tensor.print();
  });
};

export const Button = props => {
  const buttonText = props.mode === 'train' ? 'Train' : 'Predict';

  return <button onClick={handleClick}> {buttonText}</button>;
};

export default Button;
