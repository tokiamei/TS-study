const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// baseCssLoader
const baseCssLoader = ["style-loader", "css-loader"]
module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
      path: resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      environment: {
        arrowFunction: false
      }
    },
    module: {
        rules: [
            {
                test: /\.ts$/i,
                use: [
                    {
                        // 指定加载器
                        loader: "babel-loader",
                        // 设置 babel
                        options: {
                            // 设置预定义环境
                            presets: [
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    {
                                        targets: {
                                            "chrome": "58",
                                            "ie": "11"
                                        },
                                        // 指定 corejs 的版本
                                        "corejs": "3",
                                        // 使用 corejs 的方法
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                exclude: /node-modules/
            },
            {
              test: /\.less$/i, 
              use: [
                ...baseCssLoader,
                // 引入 postcss
                {
                  loader: "postcss-loader",
                  options: {
                    postcssOptions: {
                      plugins: [
                        [
                          "postcss-preset-env",
                          {
                            browsers: 'last 2 versions'
                          }
                        ]
                      ]
                    }
                  }
                },
                 "less-loader"
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '混沌魔君索伦森学 TS🐲',
            template: './src/index.html',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin()
    ],
    // 设置引用模块
    resolve: {
        extensions: ['.ts', '.js', '.html']
    }
}