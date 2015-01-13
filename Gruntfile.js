module.exports = function(grunt) {

  grunt.initConfig({

    wiredep: {
      dev: {
        src: 'static/index.html'
      }
    },

    fileblocks: {
      dev: {
        files: [{
          src: 'static/index.html',
          blocks: {
            'app': {
              cwd: 'static',
              src: 'js/*.js'
              }
          }
        }]
      }
    },

    nodemon: {
      dev: {
        script: 'src/app.js'
      }
    },

    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep:dev'],
        options: {
          spawn: false
        }
      },

      scripts: {
        files: ['static/js/**/*.js'],
        tasks: ['fileblocks:dev'],
        options: {
          spawn: false
        }
      }
    }

  });

  require('load-grunt-tasks')(grunt);

};
