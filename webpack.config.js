const Webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const DotenvWebapck = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractCssChunksWebpackPlugin = require("extract-css-chunks-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminWebpackPlugin = require("imagemin-webpack");

const common =
{
    context: require("path").resolve(__dirname, "source"),
    entry: "index.jsx",
    resolve:
    {
        modules: ["node_modules", require("path").resolve(__dirname, "source")],
        extensions: [".js", ".jsx"]
    },
    output:
    {
        publicPath: "/"
    },
    module:
    {
        rules:
        [
            {
                test: /\.scss$/,
                use:
                [
                    {
                        loader: "css-loader",
                        options:
                        {
                            sourceMap: true,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options:
                        {
                            sourceMap: true,
                            plugins: [require("autoprefixer"), require("cssnano")]
                        }
                    },
                    {
                        loader: "sass-loader",
                        options:
                        {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use:
                [
                    {
                        loader: "babel-loader",
                        options:
                        {
                            presets: ["@babel/preset-env", "@babel/preset-react"]
                        }
                    },
                    {
                        loader: "eslint-loader"
                    }
                ]
            },
            {
                test: /\.((t|o)tf|eot|woff2?)$/,
                use:
                [{
                    loader: "file-loader",
                    options:
                    {
                        outputPath: "fonts",
                        name: "[name].[contenthash:8].[ext]"
                    }
                }]
            },
            {
                test: /\.(jpe?g|png|svg|gif)$/,
                use:
                [{
                    loader: "file-loader",
                    options:
                    {
                        outputPath: "graphics",
                        name: "[name].[contenthash:8].[ext]"
                    }
                }]
            },
            {
                test: /\.(mp4|mov|wmv|flv|avi)$/,
                use:
                [{
                    loader: "file-loader",
                    options:
                    {
                        outputPath: "videos",
                        name: "[name].[contenthash:8].[ext]"
                    }
                }]
            },
            {
                test: /\.pdf$/,
                use:
                [{
                    loader: "file-loader",
                    options:
                    {
                        outputPath: "documents",
                        name: "[name].[contenthash:8].[ext]"
                    }
                }]
            }
        ]
    },
    plugins:
    [
        new CleanWebpackPlugin(),
        new DotenvWebapck(),
        new HtmlWebpackPlugin(
        {
            template: "index.html",
            favicon: "favicon.ico",
            minify:
            {
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true
            }
        })
    ]
};

const development = require("webpack-merge")
({
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    devServer:
    {
        host: "0.0.0.0",
        port: 8888,
        useLocalIp: true,
        historyApiFallback: true,
        hot: true,
        open: true,
        overlay: true,
        compress: true,
        stats: "errors-warnings",
        clientLogLevel: "warn"
    },
    module:
    {
        rules:
        [{
            test: /\.scss$/,
            use: "style-loader"
        }]
    },
    plugins: [new Webpack.HotModuleReplacementPlugin()]
}, common);

const production = require("webpack-merge")
({
    mode: "production",
    performance:
    {
        hints: false
    },
    optimization:
    {
        runtimeChunk: true,
        splitChunks:
        {
            chunks: "all",
            maxInitialRequests: 20,
            maxAsyncRequests: 20,
            minSize: 0,
            cacheGroups:
            {
                vendors:
                {
                    test: /[\\/]node_modules[\\/]((?!react|redux).*)[\\/]/,
                    name: "vendors",
                    chunks: "all"
                },
                reactRedux:
                {
                    test: /[\\/]node_modules[\\/]((react|redux).*)[\\/]/,
                    name: "react-redux",
                    chunks: "all"
                }
            }
        }
    },
    devtool: "source-map",
    output:
    {
        path: require("path").resolve(__dirname, "build"),
        filename: "scripts/[name].[contenthash:8].js",
        chunkFilename: "scripts/[name].[contenthash:8].chunk.js"
    },
    module:
    {
        rules:
        [{
            test: /\.scss$/,
            use:
            [{
                loader: ExtractCssChunksWebpackPlugin.loader,
                options:
                {
                    publicPath: "../"
                }
            }]
        }]
    },
    plugins:
    [
        new ExtractCssChunksWebpackPlugin(
        {
            filename: "styles/[name].[contenthash:8].css",
            chunkFilename: "styles/[name].[contenthash:8].chunk.css"
        }),
        new CopyWebpackPlugin(
        [{
            from: "static"
        }]),
        new ImageminWebpackPlugin(
        {
            imageminOptions:
            {
                plugins:
                [
                    require("imagemin-mozjpeg")(
                    {
                        quality: 80
                    }),
                    require("imagemin-pngquant")(
                    {
                        speed: 1,
                        strip: true,
                        quality: [0.8, 1]
                    }),
                    require("imagemin-svgo")({}),
                    require("imagemin-gifsicle")(
                    {
                        interlaced: true,
                        optimizationLevel: 3
                    })
                ]
            }
        })
    ]
}, common);

module.exports =
    (process.env.NODE_ENV === "development") ?
        development :
        production;