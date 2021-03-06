const webpack =　require("webpack");
module.exports = {
    entry: __dirname + '/../../src/js/top/entry.js',
    output: {
        path: __dirname + '/../../src/js/dist',
        filename: 'top.js'
    },
//    plugins: [
//        new webpack.optimize.UglifyJsPlugin()
//    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'  ,
            query: {
                presets: ['es2015']
            }
        }]
    }
};
