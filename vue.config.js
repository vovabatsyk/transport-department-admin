module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pwa: {
    name: 'Інспектор',
    themeColor: '#FFFFFF',
    msTileColor: '#FFFFFF',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#FFFFFF',

    manifestOptions: {
      display: 'standalone',
      background_color: '#FFFFFF'

    }
  }
}
