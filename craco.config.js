module.exports = {
    // mode: 'development',
    devServer: {
        port: 5000,
        proxy: {
            '/api': {
                target: 'http://0.0.0.0:9090',
                pathRewrite: {'^/api' : ''},
            },
        },
    },
};