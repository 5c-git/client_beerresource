const path = require(`path`);
const fs = require(`fs`);
const webpack = require(`webpack`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const CopyWebpackPlugin = require(`copy-webpack-plugin`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const PATHS = {
  source: path.join(__dirname, `./src`),
  build: path.join(__dirname, `./build`),
  assets: `assets/`,
  libsJQ: `libsJQ/`,
};

const PAGES_DIR = `${PATHS.source}/pages/`;
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter((fileName) => fileName.endsWith(".pug"));

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    urlapp: `${PATHS.source}/urlapp.js`,
    bundle: `${PATHS.source}`,
    common: `${PATHS.source}/common.js`,
    // specificPage: `${PATHS.source}/specificPage.js`,
  },
  output: {
    filename: `js/[name].js`,
    path: PATHS.build,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: `vendors`,
          test: /node_modules/,
          chunks: `all`,
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader: `babel-loader`,
        options: {
          presets: ["@babel/preset-react"],
        },
        exclude: `/node_modules/`,
      },

      {
        test: /\.css$/,
        use: [
          `style-loader`,
          MiniCssExtractPlugin.loader,
          {
            loader: `css-loader`,
            options: { sourceMap: true, url: false },
          }, {
            loader: `postcss-loader`,
            options: { sourceMap: true, config: { path: `postcss.config.js` } },
          }
        ]
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          `style-loader`,
          MiniCssExtractPlugin.loader,
          {
            loader: `css-loader`,
            options: { sourceMap: true, url: false },
          },
          {
            loader: `postcss-loader`,
            options: { sourceMap: true, config: { path: `postcss.config.js` } },
          },
          {
            loader: `sass-loader`,
            options: { sourceMap: true },
          },
        ],
      },

      {
        test: /\.pug$/,
        loader: `pug-loader`,
        options: {
          pretty: true,
        },
      },

      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },

      {
        test: /\.(svg)$/i,
        loader: "svg-sprite-loader",
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: `css/[name].css`,
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.source}/assets/images`, to: `${PATHS.assets}/images` },
      {
        from: `${PATHS.source}/assets/favicons`,
        to: `${PATHS.assets}/favicons`,
      },
      { from: `${PATHS.source}/assets/fonts`, to: `${PATHS.assets}/fonts` },
      {
        from: `${PATHS.source}/assets/documents`,
        to: `${PATHS.assets}/documents`,
      },
      { from: `${PATHS.source}/libsJQ`, to: `${PATHS.libsJQ}` },
    ]),
    ...PAGES.map(
      (page) =>
        new HtmlWebpackPlugin({
          hash: false,
          // inject: false,
          template: `${PAGES_DIR}/${page}`,
          filename: `./${page.replace(/\.pug/, `.html`)}`,
        })
    ),
    new SpriteLoaderPlugin(),
    // new FaviconsWebpackPlugin({
    //   logo: './src/assets/favicon.svg',
    //   publicPath: '',
    // }),
  ],

  stats: {
    warnings: false,
    children: false,
    modules: false,
    entrypoints: false,
    chunks: false,
    assets: false,
    builtAt: false,
    version: false,
  },
};
