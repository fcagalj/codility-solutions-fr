var expect = require('chai').expect;
var testName = 'L9_MaximumSliceProblem_MaxSliceSum.js';
var Task = require('../lib/' + testName);

//mocha --grep MaxSliceSum
//node-debug _mocha --grep MaxSliceSum
describe(testName, function () {
    describe('Final results', function () {
        it('should return  ', function () {
            var A = [];
            var results = Task.solution(A);
            expect(results).to.equal(5);
        });
    });
});
