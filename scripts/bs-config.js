module.exports = {
    server: {
        baseDir: 'dist',
        routes: {
            '/': 'dist/index.html',
            '/icons': 'dist/icons',
            '/js': 'dist/js',
            '/scss': 'dist/scss',
            '/pages': 'dist/pages',

        }

    },
    files: ['dist/**/*.*', 'dist/js/*.js'],
    notify: false,
    open: false,
};
