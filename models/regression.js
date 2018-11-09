const learningRate = 0.3;
a = tf.variable(tf.scalar(random(1)));
b = tf.variable(tf.scalar(random(1)));

export const optimizer = tf.train.sgd(learningRate);

export const loss = (pred, labels) => {
  return pred
    .sub(labels)
    .square()
    .mean();
};

export const predict = x => {
  const xs = tf.tensor1d(x);
  const ys = xs.mul(a).add(b);
  return ys;
};
