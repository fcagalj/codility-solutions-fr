var expect = require('chai').expect;
var testName = 'L9_MaximumSliceProblem_MaxSliceSum.js';
var Task = require('../../lib/codility/' + testName);

//mocha --grep MaxSliceSum
//node-debug _mocha --grep MaxSliceSum
describe(testName, function () {
    describe('Final results', function () {
        it('should return  ', function () {
            var A = [];
            A[0] = 3;
            A[1] = 2;
            A[2] = -6;
            A[3] = 4;
            A[4] = 0;
            var results = Task.solution(A);
            expect(results).to.equal(5);
        });
    });
});
