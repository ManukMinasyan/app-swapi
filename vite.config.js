module.exports = {
    port: 8080,
    proxy: {
        '/api': {
            target: 'http://swapi.dev/',
            changeOrigin: true,
            redirect: false
        }
    },
}
