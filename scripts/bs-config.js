module.exports = {
  server: {
    baseDir: 'dist',
    routes: {
      '/': 'dist/index.html',
      '/icons': 'dist/icons',
      '/flags': 'dist/flags',
      '/js': 'dist/js',
      '/scss': 'dist/scss',
      '/pages': 'dist/pages',
    },
  },
  files: ['dist/**/*.*', 'dist/js/*.js'],
  notify: false,
  open: false,
};
