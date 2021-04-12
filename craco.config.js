/*
 * @Descripttion: 配置文件
 * @Author: Hades
 * @Date: 2021-04-12 09:41:26
 * @LastEditTime: 2021-04-12 16:23:29
 */
const CracoLessPlugin = require('craco-less');
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const path = require('path')
const pathResolve = pathUrl => path.join(__dirname, pathUrl)

module.exports = {
  webpack: {
    plugins: [
      //new BundleAnalyzerPlugin(),
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(
            '\\.(' +
            ['js', 'css'].join('|') +
            ')$'
        ),
        threshold: 1024,
        minRatio: 0.8
      }),
    ],
    alias: {
      '@@': pathResolve('.'),
      '@': pathResolve('src'),
      '@http': pathResolve('src/http'),
      '@redux': pathResolve('src/redux'),
      '@pages': pathResolve('src/pages'),
      '@com': pathResolve('src/components')
    }
  },
  babel: {
    plugins: [
      ['import', { libraryName: 'antd', style: true }]
    ]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#FF0000' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};