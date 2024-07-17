const config = {
    chainWebpack: config => {
        config.performance
            .maxEntrypointSize(900000000)
            .maxAssetSize(900000000)

        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()

        svgRule
            .test(/\.svg$/)
            .use('svg-url-loader')
            .loader('svg-url-loader')
    },
    css: {
        extract: true,
        loaderOptions: {
            scss: {
                additionalData: `@import '~@/styles/styles.scss';`
            }
        }
    }
}

module.exports = config
