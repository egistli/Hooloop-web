module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      dev: {
        options: {
          compress: false,
          yuicompress: false,
          optimization: 2
        },
        files: {
          'assets/css/main.css': 'assets/less/main.less'
        }
      }
    },
    watch: {
      styles: {
        files: ['assets/less/**/*.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      },
      livereload: {
        files: ['*.html','assets/less/*.less', 'assets/css/*.css', 'assets/js/*.js'],
        options: {
          livereload: true,
          nospawn: true
        },
        tasks: []
      }
    },
    connect: {
      dev: {
        options: {
          port: 8000,
          hostname: '*',
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect:dev', 'watch']);
};
