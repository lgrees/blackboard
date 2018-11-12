import React from 'react';

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
