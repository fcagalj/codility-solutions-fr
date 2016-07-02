var expect = require('chai').expect;
var testName = 'LC_practice_SumOfDigits.js';
var Task = require('../../lib/codility/' + testName);

//mocha --grep SumOfDigits
//node-debug _mocha --grep SumOfDigits
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
//Find the sum of the digits of all the numbers from 1 to N (both ends included).
//
//For N = 10 the sum is 1+2+3+4+5+6+7+8+9+(1+0) = 46
//For N = 11 the sum is 1+2+3+4+5+6+7+8+9+(1+0)+(1+1) = 48
//
//---------
//Test cases:
//
//N = 110
//sum = 957
//
//N = 90
//sum = 774