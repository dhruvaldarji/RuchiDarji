// Generated on 2016-05-08 using generator-angular 0.15.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Automatically load required Grunt tasks
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin',
        ngtemplates: 'grunt-angular-templates',
        cdnify: 'grunt-google-cdn'
    });

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'app',
        dist: 'dist'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        appConfig: appConfig,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            js: {
                files: ['<%= appConfig.app %>/scripts/{,*/}*.js'],
                tasks: ['newer:jscs:all'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            jsTest: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['newer:jscs:test', 'karma']
            },
            compass: {
                files: ['<%= appConfig.app %>/styles/**/*.{css,sass,scss}'],
                tasks: ['compass:server', 'postcss:server']
            },
            templates: {
                files: ['<%= appConfig.app %>/views/**/*.{pug, html}'],
                tasks: ['pug'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= appConfig.app %>/views/**/*.{html, pug}',
                    '.tmp/styles/{,*/}*.css',
                    '<%= appConfig.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: '0.0.0.0',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function(connect) {
                        return [
                            connect.static('.tmp'),
                            connect().use(
                                '/app/bower_components',
                                connect.static('./app/bower_components')
                            ),
                            connect().use(
                                '/app/styles',
                                connect.static('./app/styles')
                            ),
                            connect.static(appConfig.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    port: 9001,
                    middleware: function(connect) {
                        return [
                            connect.static('.tmp'),
                            connect.static('test'),
                            connect().use(
                                '/app/bower_components',
                                connect.static('./app/bower_components')
                            ),
                            connect.static(appConfig.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= appConfig.dist %>'
                }
            }
        },

        // Make sure there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'Gruntfile.js',
                    '<%= appConfig.app %>/scripts/{,*/}*.js'
                ]
            },
            test: {
                options: {
                    jshintrc: 'test/.jshintrc'
                },
                src: ['test/spec/{,*/}*.js']
            }
        },

        // Make sure code styles are up to par
        jscs: {
            options: {
                config: '.jscsrc',
                verbose: true
            },
            all: {
                src: [
                    'Gruntfile.js',
                    '<%= appConfig.app %>/scripts/{,*/}*.js'
                ]
            },
            test: {
                src: ['test/spec/{,*/}*.js']
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= appConfig.dist %>/{,*/}*',
                        '!<%= appConfig.dist %>/.git{,*/}*'
                    ]
                }]
            },
            server: '.tmp'
        },

        // Add vendor prefixed styles
        postcss: {
            options: {
                processors: [
                    require('autoprefixer-core')({
                        browsers: ['last 1 version']
                    })
                ]
            },
            server: {
                options: {
                    map: true
                },
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        // Automatically inject Bower components into the app
        wiredep: {
            app: {
                src: ['<%= appConfig.app %>/index.html'],
                ignorePath: /\.\.\//
            },
            test: {
                devDependencies: true,
                src: '<%= karma.unit.configFile %>',
                ignorePath: /\.\.\//,
                fileTypes: {
                    js: {
                        block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
                        detect: {
                            js: /'(.*\.js)'/gi
                        },
                        replace: {
                            js: '\'{{filePath}}\','
                        }
                    }
                }
            },
            sass: {
                src: ['<%= appConfig.app %>/styles/{,*/}*.{scss,sass}'],
                ignorePath: /(\.\.\/){1,2}\/app\/bower_components\//
            }
        },

        // Compiles Sass to CSS and generates necessary files if requested
        compass: {
            options: {
                sassDir: '<%= appConfig.app %>/styles',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= appConfig.app %>/images',
                javascriptsDir: '<%= appConfig.app %>/scripts',
                fontsDir: '<%= appConfig.app %>/styles/fonts',
                importPath: './app/bower_components',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/styles/fonts',
                relativeAssets: false,
                assetCacheBuster: false,
                raw: 'Sass::Script::Number.precision = 10\n'
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= appConfig.dist %>/images/generated'
                }
            },
            server: {
                options: {
                    sourcemap: true
                }
            }
        },

        // Renames files for browser caching purposes
        filerev: {
            dist: {
                src: [
                    '<%= appConfig.dist %>/scripts/{,*/}*.js',
                    '<%= appConfig.dist %>/styles/{,*/}*.css',
                    '<%= appConfig.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                    '<%= appConfig.dist %>/styles/fonts/*'
                ]
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= appConfig.app %>/index.html',
            options: {
                dest: '<%= appConfig.dist %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglifyjs'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        // Performs rewrites based on filerev and the useminPrepare configuration
        usemin: {
            html: ['<%= appConfig.dist %>/{,*/}*.html'],
            css: ['<%= appConfig.dist %>/styles/{,*/}*.css'],
            js: ['<%= appConfig.dist %>/scripts/{,*/}*.js'],
            options: {
                assetsDirs: [
                    '<%= appConfig.dist %>',
                    '<%= appConfig.dist %>/images',
                    '<%= appConfig.dist %>/styles'
                ],
                patterns: {
                    js: [
                        [/(images\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g, 'Replacing references to images']
                    ]
                }
            }
        },

        // The following *-min tasks will produce minified files in the dist folder
        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        // cssmin: {
        //   dist: {
        //     files: {
        //       '<%= appConfig.dist %>/styles/main.css': [
        //         '.tmp/styles/{,*/}*.css'
        //       ]
        //     }
        //   }
        // },
        // uglify: {
        //   dist: {
        //     files: {
        //       '<%= appConfig.dist %>/scripts/scripts.js': [
        //         '<%= appConfig.dist %>/scripts/scripts.js'
        //       ]
        //     }
        //   }
        // },
        // concat: {
        //   dist: {}
        // },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= appConfig.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%= appConfig.dist %>/images'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= appConfig.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= appConfig.dist %>/images'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= appConfig.dist %>',
                    src: ['*.html'],
                    dest: '<%= appConfig.dist %>'
                }]
            }
        },

        ngtemplates: {
            dist: {
                options: {
                    module: 'app',
                    htmlmin: '<%= htmlmin.dist.options %>',
                    usemin: 'scripts/scripts.js'
                },
                cwd: '.tmp/',
                src: 'views/**/*.html',
                dest: '.tmp/templateCache.js'
            }
        },

        // ng-annotate tries to make the code safe for minification automatically
        // by using the Angular long form for dependency injection.
        ngAnnotate: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat/scripts',
                    src: '*.js',
                    dest: '.tmp/concat/scripts'
                }]
            }
        },

        // Replace Google CDN references
        cdnify: {
            dist: {
                html: ['<%= appConfig.dist %>/*.html']
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= appConfig.app %>',
                    dest: '<%= appConfig.dist %>',
                    src: [
                        '*.{ico,png,txt,config}',
                        '*.html',
                        'images/{,*/}*.{webp}',
                        'fonts/{,*/}*.*'
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= appConfig.dist %>/images',
                    src: ['generated/*']
                }, {
                    expand: true,
                    cwd: '<%= appConfig.app %>/bower_components/Ionicons',
                    src: 'fonts/*',
                    dest: '<%= appConfig.dist %>'
                }]
            },
            styles: {
                expand: true,
                cwd: '<%= appConfig.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            },
            process: {
                expand: true,
                cwd: '<%= appConfig.app %>/views/',
                dest: '.tmp/views/',
                src: '**/*.html'
            }
        },

        // Compiles Sass to CSS and generates necessary files if requested
        sass: {
            options: {
                style: 'compressed'
            },
            dist: {
                files: [{
                    '<%= appConfig.app %>/styles/main.css': ['<%= appConfig.app %>/styles/main.scss']
                }]
            },
            server: {
                files: [{
                    '.tmp/styles/main.css': ['<%= appConfig.app %>/styles/main.scss']
                }]
            }
        },

        pug: {
            compile: {
                options: {
                    pretty: true,
                    data: {
                        debug: false
                    }
                },
                cwd: '<%= appConfig.app %>/',
                expand: true,
                src: ['views/**/*.pug'],
                dest: '.tmp',
                ext: '.html'
            },
            dist: {
                options: {
                    pretty: true,
                    data: {
                        debug: false
                    }
                },
                cwd: '<%= appConfig.app %>/',
                expand: true,
                src: ['views/**/*.pug'],
                dest: '.tmp',
                ext: '.html'
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: [
                'compass:server'
            ],
            test: [
                'compass'
            ],
            dist: [
                'compass:dist',
                'imagemin',
                'svgmin'
            ]
        },

        // Test settings
        karma: {
            unit: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-pug');

    grunt.registerTask('serve', 'Compile then start a connect web server', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'wiredep',
            'pug',
            'concurrent:server',
            'postcss:server',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function(target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve:' + target]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'wiredep',
        'concurrent:test',
        'postcss',
        'connect:test',
        'karma'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'copy:process',
        'pug',
        'wiredep',
        'sass',
        'useminPrepare',
        'concurrent:dist',
        'ngtemplates',
        'concat',
        'ngAnnotate',
        'copy:dist',
        'cssmin',
        'uglify',
        'filerev',
        'usemin',
        'htmlmin'
    ]);

    grunt.registerTask('default', [
        // 'newer:jshint',
        'newer:jscs',
        'test',
        'build'
    ]);
};
