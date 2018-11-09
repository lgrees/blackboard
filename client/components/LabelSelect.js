import React from 'react';
import { div } from '@tensorflow/tfjs';

export const LabelSelect = () => {
  return (
    <div>
      <label htmlFor="">Data Label</label>
      <select>
        <option value="">--Please choose a Label--</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="0">0</option>
      </select>
    </div>
  );
};

export default LabelSelect;
