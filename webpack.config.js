module.exports = {
<<<<<<< HEAD
  entry: [
    '@babel/polyfill', // enables async-await
    './client/index.js',
  ],
=======
  entry: ['@babel/polyfill', './client/index.js'],
>>>>>>> 602ca1f3422564bafd40fc2657d64be73eaef355
  mode: 'development',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
