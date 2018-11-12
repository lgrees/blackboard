import React from 'react';
import sketch from '../sketch';

export const ClearButton = props => {
  const { clear } = props;
  return (
    <button
      type="button"
      onClick={() => {
        clear();
        sketch.clear();
        sketch.createCanvas(400, 400);
        sketch.background(80);
      }}
    >
      Clear
    </button>
  );
};

export default ClearButton;
