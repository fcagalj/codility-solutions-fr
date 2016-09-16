
var expect = require('chai').expect;
var Task = require('../../lib/live_coding_exercises/DigitSum.js');

//mocha --grep DigitSum
//node-debug _mocha --grep DigitSum
describe('Testing DigitSum', function () {
    describe('Final results', function () {
        it('test case 1  ', function () {
            var N = 10;
            var results = Task.solution(N);
            expect(results).to.equal(46);
        });
        it('test case 2  ', function () {
            var N = 11;
            var results = Task.solution(N);
            expect(results).to.equal(48);
        });
        it('test case 3  ', function () {
            var N = 90;
            var results = Task.solution(N);
            expect(results).to.equal(774);
        });
        it('test case 4  ', function () {
            var N = 110;
            var results = Task.solution(N);
            expect(results).to.equal(957);
        });
    });
});
