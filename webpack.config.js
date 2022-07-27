const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    devtool: 'inline-source-map',
    output:{
        filename:'main.js',
        path: path.resolve(__dirname, 'dist'),
        // clean:true,
    },
    plugins: [
        new HtmlWebpackPlugin({    
          title: '11th Best To-Do List',    
        }),
    
      ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,    
            type: 'asset/resource',
          },
        ],
    
      },
}