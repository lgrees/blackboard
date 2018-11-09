import React from 'react';

export const ModeSelect = () => {
  return (
    <div>
      <label htmlFor="">Classifier Mode</label>
      <select>
        <option value="train">Train</option>
        <option value="predict">Predict</option>
      </select>
    </div>
  );
};

export default ModeSelect;
