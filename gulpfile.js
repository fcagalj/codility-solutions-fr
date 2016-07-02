var gulp = require('gulp'),
    rename = require('gulp-rename'),
    argv = require('yargs').argv,
    gutil = require('gulp-util'),
    mkpath = require('mkpath');

var exercisePath = 'lib',
    testPath = 'test',
    exerciseNeme = argv.name,
    exerciseFolder = argv.folder ? '/' + argv.folder : '/random_exercises';

var exercise =
`
'use strict';

exports.solution = solution;


//mocha --grep ${exerciseNeme}
//node-debug _mocha --grep ${exerciseNeme}

function solution(A) {

}
`;

var test =
`
var expect = require('chai').expect;
var Task = require('../../${exercisePath}${exerciseFolder}/${exerciseNeme}.js');

//mocha --grep ${exerciseNeme}
//node-debug _mocha --grep ${exerciseNeme}
describe('Testing ${exerciseNeme}', function () {
    describe('Final results', function () {
        it('test case 1  ', function () {
            var A = [];
            var results = Task.solution(A);
            expect(results).to.equal(5);
            //expect(results).to.deep.equals([]);
        });
    });
});
`;

//create files for new task
gulp.task('generate', function() { 

    mkpath.sync(exercisePath + exerciseFolder + '/', 0777);
    mkpath.sync(testPath + exerciseFolder + '/', 0777);

    require('fs').writeFileSync(exercisePath + exerciseFolder + '/' + exerciseNeme + '.js', exercise);
    require('fs').writeFileSync(testPath + exerciseFolder + '/' + exerciseNeme + '_Spec.js', test);

});
