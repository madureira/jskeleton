module.exports = function(grunt) {

    grunt.initConfig({

        watch: {
            files: [
                'src/javascript/**/*.js', 
                '!src/javascript/bin/**/*.js',
                'src/javascript/**/*.tmpl', 
                'src/stylesheet/**/*.css', 
                'src/stylesheet/**/*.less'
            ],
            tasks: [ 'handlebars', 'concat', 'less' ]
        },

        concat: {
            'public/bin/app.js': [
                'src/javascript/vendor/jquery.js',
                'src/javascript/vendor/handlebars.runtime.js',
                'src/javascript/vendor/bootstrap.min.js',
                'src/javascript/bin/templates.js',

                'src/javascript/config/namespace.js',
                'src/javascript/config/settings.js',

                'src/javascript/main/helpers/*.js',
                'src/javascript/main/models/*.js',
                'src/javascript/main/templates/*.js',
                'src/javascript/main/views/*.js',

                'src/javascript/main/start.js'
            ],
            'public/bin/specs.js': [
                'src/javascript/test/lib/jasmine/jasmine.js',
                'src/javascript/test/lib/jasmine/jasmine-html.js',
                'src/javascript/test/lib/jasmine/console.js',
                'src/javascript/test/lib/jasmine/boot.js',
                'src/javascript/test/specs/**/*.js'
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
                    'public/bin/app.css': [
                        'src/stylesheet/vendor/normalize.css',
                        'src/stylesheet/vendor/bootstrap.min.css',
                        'src/stylesheet/vendor/bootstrap-theme.min.css',
                        'src/stylesheet/main/theme.less',
                        'src/stylesheet/main/**/*.less'
                    ],
                    'public/bin/specs.css': [
                        'src/javascript/test/lib/jasmine/jasmine.css'
                    ]
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
