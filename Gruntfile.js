module.exports = function (grunt) {
    
    'use strict';
    
    // show elapsed time at the end
    require('time-grunt')(grunt);

    var path =require('path'),
        fs = require('fs');
    
    // load all grunt tasks defined in devDependancies of package.json
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        
        // Pass in package.json properties
        pkg: grunt.file.readJSON('package.json'),

        mocha: {
            browser: ['test/*.html'],
            options: {
                reporter: 'Nyan',
                log: true
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
                    optimize: 'uglify2',
                    out: 'creo.js',
                    name: 'base',
                    preserveLicenseComments: false,
                    findNestedDependencies: true,
                    useStrict: false,
                    paths: {
                        jquery: "empty:",
                        domwrapper: 'domwrapper',
                        sandbox: 'sandbox'
                    },
                    uglify2: {
                        output: {
                            beautify: false
                        }
                    }
                }
            }
        },

        jsduck: {
            main: {
                // source paths with your code
                src: [
                    'src/*.js'
                ],

                // docs output dir
                dest: 'docs'
            }
        },

        bower: {
            target: {
                rjsConfig: 'test/test_runner.js'
            }
        },

        buildtests: {
            specs: ['test/specs/{,*/}*.js']
        }
    });

    grunt.registerTask(
        'buildtests', //Task Name
        'Reads all test specs and make an array for RequireJS to include them all with.', //Task Description
        function() {
            grunt.config.requires('buildtests.specs');
            
            fs.writeFile(
                'test/specs.json',
                grunt.file.expand( grunt.config(['buildtests','specs'])),
                'utf-8',
                function (err) {
                    if (err) return grunt.log.writeln(err);
                }
            );

        }
    );

    grunt.registerTask('default', [
        'bower',
        'mocha'
    ]);

    grunt.registerTask('test', [
        'buildtests',
        'jshint',
        'mocha'
    ]);

    grunt.registerTask('build', [
        'requirejs'
    ]);

};