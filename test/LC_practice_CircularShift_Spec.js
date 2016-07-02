var expect = require('chai').expect;
var testName = 'LC_practice_CircularShift.js';
var Task = require('../lib/' + testName);

//mocha --grep CircularShift
//node-debug _mocha --grep CircularShift
describe(testName, function () {
    describe('Final results', function () {
        it('test 1  ', function () {
            var N = 110;
            var results = Task.solution(N);
            expect(results).to.equal(957);
        });
        it('test 2  ', function () {
            var N = 90;
            var results = Task.solution(N);
            expect(results).to.equal(774);
        });
        it('test 3  ', function () {
            var N = 10;
            var results = Task.solution(N);
            expect(results).to.equal(46);
        });
        it('test 4  ', function () {
            var N = 11;
            var results = Task.solution(N);
            expect(results).to.equal(48);
        });
    });
});