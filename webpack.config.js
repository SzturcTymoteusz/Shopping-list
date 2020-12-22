const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loader = require('sass-loader');

module.exports = {
    entry: './src/js/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    module:{
        rules:[
            // {
            //     loader: 'babel-loader',
            //     test: /\.js$/,
            //     exclude: /node_modules/
            // },

            {
                test: /\.sass$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },

            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                      loader: 'file-loader',
                      options: {
                        name: 'img/[name].[ext]',
                        output: 'img/',
                      },
                    },
                  ],
            },

            {
                test: /\.html$/i,
                use: ['html-loader']
            }
        ]
    },

    optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
        ],
      },
}