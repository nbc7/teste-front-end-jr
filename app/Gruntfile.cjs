module.exports = function (grunt) {
  grunt.initConfig({
    cwebp: {
      dynamic: {
        options: {
          q: 75,
        },
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'src',
          },
        ],
      },
    },
  });

  grunt.loadNpmTasks('grunt-cwebp');
  grunt.registerTask('default', ['cwebp']);
};
