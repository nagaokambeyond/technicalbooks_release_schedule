module.exports = {
  outputDir: 'docs',      // npm run buildの出力先
  //publicPath: './',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/technicalbooks_release_schedule/'
    : '/',
  //assetsDir: './assets/',
  filenameHashing: false  // jsファイル名にハッシュをつけない
}
