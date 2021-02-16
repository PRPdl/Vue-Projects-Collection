var webpack = require('webpack');
var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');


module.exports = {

    entry: {
        main: [
             './src/main.js',
        ],

       // vue: [
        //     './src/app.js',
        // ]
    },

    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[name].[contenthash:8].js',
        publicPath: '',
        assetModuleFilename: 'images/[hash][ext][query]'
       
    },

    plugins: [
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery'
        // }),

        // new HtmlWebpackPlugin(
        //     {
        //         filename: 'jquery.html',
        //         template: 'jquery.html',
        //         favicon: 'public/favicon_v2.png',
        //         excludeChunks: ['vue']
        //     }
        // ),

        new HtmlWebpackPlugin(
            {
                filename: 'index.html',
                template: '/public/index.html',
                favicon: 'public/favicon_v2.png',
            }
        ),

        new VueLoaderPlugin(),

        new WebpackManifestPlugin(),

        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],

    module: {
        rules: [

            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { url: true }
                    },
                    'sass-loader'
                ],
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset/resource',
                },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },

            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },

            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },

    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
    },



};