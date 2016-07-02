var expect = require('chai').expect;
var testName = 'L9_MaximumSliceProblem_MaxProfit.js';
var Task = require('../../lib/codility/' + testName);

//mocha --grep MaxProfit
//node-debug _mocha --grep MaxProfit
describe(testName, function () {
    describe('Final results', function () {
        it('should return  ', function () {
            var A = [];
            A[0] = 23171;
            A[1] = 21011;
            A[2] = 21123;
            A[3] = 21366;
            A[4] = 21013;
            A[5] = 21367;
            var results = Task.solution(A);
            expect(results).to.equal(356);
        });
    });
});
