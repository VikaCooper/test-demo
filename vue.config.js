const { defineConfig } = require('@vue/cli-service')
const currentTime = new Date().getTime()

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: currentTime + '_static',
})
