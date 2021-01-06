module.exports = {
  outputDir: 'docs',      // npm run buildの出力先
  publicPath: process.env.NODE_ENV === 'production'
    ? '/technicalbooks_release_schedule/'
    : '/',
  chainWebpack: config => {
    config.performance
      .hints(false)
  }
  //filenameHashing: false  // jsファイル名にハッシュをつけない
}
