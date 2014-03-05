module.exports = function(grunt) {

    grunt.initConfig({

        watch: {
            files: [
                'src/javascript/**/*.js', 
                'src/javascript/**/*.tmpl', 
                'src/stylesheet/**/*.css', 
                'src/stylesheet/**/*.less'
            ],
            tasks: [ 'handlebars', 'concat', 'less' ]
        },

        concat: {
            'public/bin/app.js': [
                'src/javascript/lib/jquery.js',
                'src/javascript/lib/underscore.js',
                'src/javascript/lib/backbone.js',
                'src/javascript/lib/handlebars.runtime.js',
                'src/javascript/bin/templates.js',

                'src/javascript/config/namespace.js',
                'src/javascript/config/settings.js',

                'src/javascript/main/helpers/*.js',
                'src/javascript/main/models/*.js',
                'src/javascript/main/templates/*.js',
                'src/javascript/main/views/*.js',

                'src/javascript/main/start.js'
            ]
        },

        uglify: {
            'public/bin/app.js': 'public/bin/app.js',
            'public/bin/app.css': 'public/bin/app.css'
        },

        handlebars: {
            compile: {
                files: {
                    'src/javascript/bin/templates.js': 'src/javascript/main/templates/*.tmpl'
                },
                options: {
                    namespace: 'Handlebars',
                    processName: function(filePath) {
                        return filePath.replace(/^src\/javascript\/main\/templates\//, '');
                    }
                }
            }
        },

        less: {
            production: {
                options: {
                    cleancss: true,
                    compress: false
                },
                files: {
                    'public/bin/app.css': [ 'src/stylesheet/lib/*.css', 'src/stylesheet/main/**/*.less']
                }
            }
        }
    });

    grunt.file.defaultEncoding = 'utf8';
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['watch']);

};
