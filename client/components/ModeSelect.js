import React from 'react';

export const ModeSelect = props => {
  const { handleChange } = props;
  return (
    <div>
      <label htmlFor="">Classifier Mode</label>
      <select name="mode" onChange={handleChange}>
        <option value="train">Train</option>
        <option value="predict">Predict</option>
      </select>
    </div>
  );
};

export default ModeSelect;
