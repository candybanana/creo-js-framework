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

        jshint: {
            all: [
                'Gruntfile.js',
                'src/{,*/}*.js',
                '!node_modules{,*/}*.js',
                '!vendor/*',
                '!build{,*/}*.js',
                'test/{,*/}*.js'
            ]
        },

        requirejs: {
            dist: {
                options: {
                    baseUrl: 'src',
                    dir: 'build',
                    optimize: 'uglify2',
                    preserveLicenseComments: false,
                    useStrict: false,
                    paths: {
                        jquery: "empty:"
                    },
                    uglify2: {
                        output: {
                            beautify: false
                        }
                    }
                }
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
        'mocha'
    ]);

    grunt.registerTask('test', [
        'jshint',
        'mocha'
    ]);

    grunt.registerTask('build', [
        'requirejs'
    ]);

};