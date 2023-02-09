/// <binding ProjectOpened='Watch - Development' />
"use strict";
var path = require('path');
const wwwroot = path.resolve(__dirname, 'wwwroot');
var WebpackNotifierPlugin = require('webpack-notifier');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

module.exports = {
    devtool: "source-map",
    mode: "production",
    target: "web",
    entry: {
        //vendors: ["babel-polyfill", "jquery", "bootstrap", "vue", "bootstrap-vue"],
        vendors: ["babel-polyfill", "jquery", "bootstrap", "vue"],
        main: ["./Scripts/Common/Main.ts", path.join(__dirname, 'Styles', 'sass', 'main.scss')]
    },
    output: {
        path: wwwroot,
        publicPath: "/",
        filename: "scripts/[name].js",
        chunkFilename: 'scripts/[name].bundle.js'
    },
    stats: {
        colors: true
        //modules: true,
        //reasons: true,
        //errorDetails: true
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                    // other vue-loader options go here
                }
            },
            // Typescript linting
            {
                test: /\.ts$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: 'tslint-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            // Typescript code
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            // Expose jquery outside of modules: https://stackoverflow.com/questions/29080148/expose-jquery-to-real-window-object-with-webpack
            // V2 Syntax here: https://github.com/webpack-contrib/expose-loader#readme
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                }, {
                    loader: 'expose-loader',
                    options: '$'
                }]
            },
            // Web fonts
            {
                test: /\.(woff|woff2|ttf|svg|eot)$/,
                use: "url-loader"
            },
            // Regular css files
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader?importLoaders=1'
                })
            },
            // SASS files
            {
                test: /\.(sass|scss$)/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: "css-loader", options: {
                            sourceMap: false
                        }
                    }, {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: (loader) => [
                                require("precss"),
                                require("autoprefixer")
                            ]
                        }
                    }, {
                        loader: "sass-loader", options: {
                            sourceMap: false
                        }
                    }]
                })
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new ExtractTextPlugin({
            filename: 'styles/[name].css'
            //allChunks: true
        }),
        new CleanWebpackPlugin(
            [
                './wwwroot/styles',
                './wwwroot/scripts'
            ]
        ),
        // Causes a toast notification for webpack builds.
        // Required for Boostrap.
        // https://getbootstrap.com/docs/4.0/getting-started/webpack/
        new webpack.ProvidePlugin({
            Popper: ['popper.js', 'default']
        }),
        new WebpackNotifierPlugin({
            title: 'Webpack (Exemplar.com)'
            //skipFirstNotification: true,
            //alwaysNotify: true
        }),
        new WindiCSSWebpackPlugin(),
         //Uncomment this to get a visualization of the packages to open in the browser.
        //, new BundleAnalyzerPlugin({
        //    analyzerMode: 'static'
       // })
    ],
    resolve: {
        extensions: ['.ts', '.js', '.scss'],
        modules: [
            path.resolve('./'),
            path.resolve('./node_modules')
        ],
        alias: {
            // https://webpack.js.org/configuration/resolve/#resolve-alias
            // Note: These must match up with paths in tsconfig.
            "kendo": "kendo-ui-webpack",
            '@ExemplarCommon': path.resolve(__dirname, 'Scripts/Common/'),
            '@ExemplarComponents': path.resolve(__dirname, 'Scripts/Components/'),
            '@ExemplarDataAccess': path.resolve(__dirname, 'Scripts/DataAccess/'),
            '@ExemplarEnums': path.resolve(__dirname, 'Scripts/Enums/'),
            '@ExemplarInterfaces': path.resolve(__dirname, 'Scripts/Interfaces/'),
            '@ExemplarRoutes': path.resolve(__dirname, 'Scripts/Routes/'),
            '@ExemplarServices': path.resolve(__dirname, 'Scripts/Services/'),
            '@ExemplarScripts': path.resolve(__dirname, 'Scripts/'),
            '@ExemplarViewModels': path.resolve(__dirname, 'Scripts/ViewModels/'),
            'Vue$': 'vue/dist/vue.esm.js',
            'vue$': 'vue/dist/vue.esm.js'   // Note: If you want dynamic template compilation, it didn't work without the lower-case version, so not sure if we even need the upper one or not.
        }
    }
};
