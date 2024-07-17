const path = require('path');

module.exports = {
    devServer: {
        port: 3001
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@common-lib': path.resolve(__dirname, '../common-lib/src')
            }
        }
    }
};
