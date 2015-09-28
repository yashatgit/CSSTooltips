var webpack = require('webpack'),
    nodeModulesPath = '/node_modules/';

module.exports = {
    entry: "./src/js/app.js",
    output: {
        filename: "js/bundle.js",
        path: './site'
    },
    //devtool: 'source-map',
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css!', exclude: nodeModulesPath},
            {test: /\.less$/, loader: 'style!css!less!', exclude: nodeModulesPath},
            {test: /\.png$/, loader: 'url', exclude: nodeModulesPath},
            {test: /\.html$/, loader: 'html', exclude: nodeModulesPath},
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader',
                exclude: nodeModulesPath
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "_": "lodash",
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
    //watch: true
};