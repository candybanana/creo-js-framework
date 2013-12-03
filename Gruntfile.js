module.exports = function (grunt) {
    
    'use strict';
    
    // show elapsed time at the end
    require('time-grunt')(grunt);
    
    // load all grunt tasks defined in devDependancies of package.json
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        
        // Pass in package.json properties
        pkg: grunt.file.readJSON('package.json'),

        mocha: {
            browser: ['test/*.html'],
            options: {
                run: true,
                reporter: 'Nyan'
            }
        },

        bower: {
            target: {
                rjsConfig: 'test/test_runner.js'
            }
        }
    });

    grunt.registerTask('default', [
        'bower',
        'mocha',
    ]);

};