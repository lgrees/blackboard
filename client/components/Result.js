import React from 'react';

export const Result = props => {
  const { result } = props;
  const comp = parseInt(result).toString(2);
  const phrases = [
    `Is this what you humans call ${result}? In my language I know it as ${comp}.`,
    `Hello human. I've seen that before. That right there is a ${result}.`,
  ];
  const ind = Math.floor(Math.random() * 2);

  return (
    <div>
      <h1>{phrases[ind]}</h1>
    </div>
  );
};

export default Result;
