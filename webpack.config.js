const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    target: "web",
    entry: "./src/js/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "styles.css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ["@babel/plugin-transform-runtime"],
                    },
                },
            },
            {
                test: /\.(jpge|jpg|png|gif|svg)$/i,
                loader: "file-loader",
                options: {
                    name: "[name].[hash:6].[ext]",
                    outputPath: "assets",
                    publicPath: "assets",
                    emitFile: true,
                    esModule: false,
                },
            },
            {
                test: /\.(mp3|wav)$/i,
                loader: "file-loader",
                options: {
                    name: "[name].[hash:6].[ext]",
                    outputPath: "assets",
                    publicPath: "assets",
                    emitFile: true,
                    esModule: false,
                },
            },
        ],
    },
};
