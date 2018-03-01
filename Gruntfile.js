module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

  	sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'*.sass': 'kredka.css'
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
        files: ['*.scss'],
        tasks: ['sass:dev']
      },
      js: {
        files: ['*.js'],
        tasks: ['uglify:dev']
      }
    },

    browserSync: {
       bsFiles: {
            src : 'kredka.css'
        },
        options: {
          watchTask: true,
          server: {
             baseDir: "./",
             index: "kredka.html"
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

  grunt.registerTask('default', ['sass', 'imagemin', 'browserSync', 'watch']);
};