let path = require("path");
let webpack = require("webpack");
let htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        // path: path.resolve(__dirname, "./dist"),
        publicPath: "/dist/",
    },
    devtool: "#eval-source-map",
    plugins: [
        new htmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            hash: true,
            title: "Cờ Tướng Online",
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg|eot|ttf|woff)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            limit: 1024
                        }
                    }
                ],
            }
        ]
    },
    devServer: {
        host: "127.0.0.1",
        port: "8081",
        hot: true,
        disableHostCheck: true,
        publicPath: "/dist/",
        historyApiFallback: {
            rewrites: [
                { from: /.*?/, to: "/dist/index.html" }
            ]
        }
    },
};