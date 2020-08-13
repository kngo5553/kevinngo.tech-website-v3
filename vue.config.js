module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/kevinngo.tech-website-v3/'
    : '/',
  "transpileDependencies": [
    "vuetify"
  ]
}