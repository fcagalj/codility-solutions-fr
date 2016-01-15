var expect = require('chai').expect;
var testName = 'L9_MaximumSliceProblem_MaxDoubleSliceSum.js';
var Task = require('../lib/' + testName);
//mocha --grep MaxDoubleSliceSum
describe(testName, function () {
    describe('Final results', function () {
        it('should return  from A = []', function () {
            var A = [4, 3, 4, 4, 4, 2];
            var results = Task.solution(A);
            expect(results).to.equal(2);
        });
    });
});
