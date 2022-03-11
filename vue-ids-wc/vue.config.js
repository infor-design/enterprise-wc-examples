/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
chainWebpack: config => {
  config.module
    .rule('vue')
    .use('vue-loader')
    .tap(options => {
      options.compilerOptions = {
        ...options.compilerOptions,
        isCustomElement: tag => tag.startsWith('ids-')
      }
      return options
    })
},
};