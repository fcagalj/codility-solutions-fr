var expect = require('chai').expect;
var testName = 'L9_MaximumSliceProblem_MaxDoubleSliceSum.js';
var Task = require('../../lib/codility/' + testName);

//mocha --grep MaxDoubleSliceSum
//node-debug _mocha --grep MaxDoubleSliceSum
describe(testName, function () {
    describe('Final results', function () {
        it('should return  from A = []', function () {
            var A = [3, 2, 6, -1, 4, 5, -1, 2];
            var results = Task.solution(A);
            expect(results).to.equal(17);
        });
    });
});
