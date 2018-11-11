import React from 'react';

export const Result = props => {
  const { result } = props;
  return (
    <div>
      <p>Here is your result: {result}</p>
      {/* <textarea /> */}
    </div>
  );
};

export default Result;
