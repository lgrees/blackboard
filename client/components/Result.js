import React from 'react';

export const Result = props => {
  const { result } = props;
  return (
    <div>
      <p>Here is your result: </p>
      <textarea>{result}</textarea>
    </div>
  );
};

export default Result;
