var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                use: [{ loader: "awesome-typescript-loader" }],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.(jpe?g|png|gif)$/i,   //to support eg. background-image property 
                loader: "file-loader",
                query: {
                    name: '[name].[ext]',
                    outputPath: 'images/'
                    //the images will be emmited to public/assets/images/ folder 
                    //the images will be put in the DOM <style> tag as eg. background: url(assets/images/image.png); 
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,    //to support @font-face rule 
                loader: "url-loader",
                query: {
                    limit: '10000',
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                    //the fonts will be emmited to public/assets/fonts/ folder 
                    //the fonts will be put in the DOM <style> tag as eg. @font-face{ src:url(assets/fonts/font.ttf); }  
                }
            },
            {
                test: /\.less$/,
                use: [
                    { loader: "style-loader" /* creates style nodes from JS strings */ },
                    { loader: "css-loader" /* translates CSS into CommonJS */ },
                    { loader: "less-loader" /* compiles Less to CSS */ }
                ]
            },
        ]
    }
};
