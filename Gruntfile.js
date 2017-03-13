'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    'modules/**/*',
                    '!modules/**/Server/*.js',
                    '!modules/**/Server/**/*.js',
                    'resources/assets/*.scss'
                ],
                tasks: ['browserify', 'uglify', 'sass']
            },
        },
        browserify: {
            core: {
                src: 'modules/Core/Client/App/*.js',
                dest: 'public/dist/core/core.min.js'
            },
            config: {
                src: 'modules/Core/Client/Config/*.js',
                dest: 'public/dist/config/config.min.js'
            },
            modules: {
                src: [
                    'modules/**/Client/*.module.js',
                    'modules/Shared/Client/**/*.module.js'
                ],
                dest: 'public/dist/modules.min.js'
            },
            shared: {
                src: [
                    'modules/Shared/Client/**/*.js',
                    '!modules/Shared/Client/**/*.module.js'
                ],
                dest: 'public/dist/shared/shared.min.js'
            },
            client: {
                src: [
                    'modules/**/Client/**/*.js',
                    '!modules/Core/Client/**/*.js',
                    '!modules/**/Client/**/*.test.js',
                    '!modules/Shared/Client/**/*.module.js',
                    '!modules/**/Client/*.module.js'
                ],
                dest: 'public/dist/client.min.js'
            }
        },
        uglify: {
            core: {
                options: { mangle: false, compress: true },
                src: 'public/dist/core/core.min.js',
                dest: 'public/dist/core/core.min.js'
            },
            config: {
                options: { mangle: false, compress: true },
                src: 'public/dist/config/config.min.js',
                dest: 'public/dist/config/config.min.js'
            },
            modules: {
                options: { mangle: false, compress: true },
                src: 'public/dist/modules.min.js',
                dest: 'public/dist/modules.min.js'
            },
            shared: {
                options: { mangle: false, compress: true },
                src: 'public/dist/shared/shared.min.js',
                dest: 'public/dist/shared/shared.min.js'
            },
            client: {
                options: { mangle: false, compress: true },
                src: 'public/dist/client.min.js',
                dest: 'public/dist/client.min.js'
            }
        },
        sass: {
            dist: {
                files: {
                    'public/assets/css/style.css': 'resources/assets/style.scss',
                    'public/assets/css/app.css': 'resources/assets/app.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['browserify', 'uglify', 'sass', 'watch']);
};
