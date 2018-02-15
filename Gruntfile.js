module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

  	sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'main.css': 'main.sass'
  			}
  		}
  	},

  	imagemin: {
  		dynamic: {
  			files: [{
  				expand: true,
  				cwd: 'images/',
  				src: ['**/*.{png,jpg,gif}'],
  				dest: 'images/build/'
  			}]
  		}
  	},

  watch: {
      css: {
        files: ['src/css/*.scss'],
        tasks: ['sass:dev']
      },
      js: {
        files: ['src/js/*.js'],
        tasks: ['uglify:dev']
      }
    },

    browserSync: {
       bsFiles: {
            src : 'assets/css/*.css'
        },
        options: {
          server: {
             baseDir: "./"
           }
        }
      }
	

  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');


  // Default task(s).

  grunt.registerTask('default', ['sass', 'imagemin', 'browserSync']);
};