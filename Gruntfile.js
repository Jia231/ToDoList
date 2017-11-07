module.exports = function(grunt){
    grunt.initConfig({
        concat: {
          dist: {
            src: ['resource/CSS/main.css', 'resource/CSS/reset.min.css'],
            dest: 'dist/built.css',
          },
        },
        connect: {
          server: {
            options: {
              port: 8000,
              hostname: 'localhost',
              keepalive:true,
              open:true
            }
          }
        }
      });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
};