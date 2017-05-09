module.exports = function (grunt) {

    grunt.initConfig({

        //define what tasks consist of in this section

        //defining a task to concatenate all files from the components/scripts folder to the builds/development/js/scripts.js file. If scripts in the src folder need to be conatonated in a certain order, name each in the src array as a string one at a time in order.

        bower_concat: {
            main: {
                dest: {
                    js: 'builds/development/js/_bower.js',
                    
                }
            }
        },

        concat: {
            options: {
                separator: '\n\n//--------- A NEW SCRIPT----------\n',
                banner: '\n\n//----------------- See Gruntfile.js --------\n',
                sourceMap: true

            },
            dist: {
                src: ['components/scripts/*.js'],
                dest: 'builds/development/js/script.js'
            },
            prod: {
                src: ['components/scripts/*.js'],
                dest: 'builds/production/js/script.js'
            },
            testScripts: {
                src: ['components/scripts/*.js'],
                dest: 'builds/test/js/script.js'
            },
            testSpecs: {
                src: ['builds/test/specSrc/*.js'],
                dest: 'builds/test/spec/specs.js'
            }


        },

        copy: {
            libraries: {
                files: [
                    {
                        expand: true,
                        cwd: 'bower_components/materialize/dist/fonts/',
                        src: ['**/*'],
                        dest: 'builds/development/fonts/'
                }
            ]
            }
        },


        wiredep: {

            task: {
                // location to read from (where dep are injected) (any file with html in this case)
                src: 'builds/development/**/*.html'
            }

        },

        watch: {
            options: {
                // improves speed
                spawn: false,
                livereload: true
            },
            scripts: {
                // which files to watch (** = and folder, * - any file)
                files: ['builds/development/**/*.html', 'components/scripts/**/*.js', 'builds/test/specSrc/*.js'],

                //what tasks to run when change detected
                tasks: ['concat', 'bower_concat']

            }

        },
        connect: {


            main: {
                options: {

                    hostname: 'localhost',
                    port: 3000,
                    //will pickup index.html on port 3000
                    base: 'builds/development/',
                    livereload: true
                }
            },

            jasmineTesting: {

                options: {

                    hostname: 'localhost',
                    port: 4000,
                    // will pickup SpecRunner.html on port 4000
                    base: 'builds/test/',
                    livereload: true
                }


            }

        }





    }); // initConfig


    //grunt tasks are loaded in this section
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    //default task
    grunt.registerTask('default', ['bower_concat', 'concat', 'copy', 'wiredep', 'connect', 'watch']);

}; // wrapper function
