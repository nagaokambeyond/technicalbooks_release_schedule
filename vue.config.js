module.exports = {
  outputDir: 'docs',      // npm run buildの出力先
  publicPath: process.env.NODE_ENV === 'production'
    ? "/technicalbooks_release_schedule/"
    : "./",
  assetsDir: './',
  filenameHashing: false  // jsファイル名にハッシュをつけない
}
