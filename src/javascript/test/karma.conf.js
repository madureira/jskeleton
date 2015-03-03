module.exports = function(config) {
    config.set({
        basePath: '../../../',
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        port: 9876,
        colors: true,
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
        ],
        singleRun: true,
        files: [
            'build/vendors.min.js',
            'build/app.templates.min.js',
            'build/app.min.js',
            'src/javascript/test/**/*.test.js'
        ]
    });
};
