module.exports = {
  outputDir: 'docs',      // npm run buildの出力先
  //publicPath: process.env.BASE_URL,
  //publicPath: './',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/technicalbooks_release_schedule/'
    : '/',
  //assetsDir: process.env.NODE_ENV === 'production'
  //  ? '/technicalbooks_release_schedule/assets/'
  //  : './assets/',
  //assetsDir: '',
  //assetsDir: './assets/',
  filenameHashing: false  // jsファイル名にハッシュをつけない
}
