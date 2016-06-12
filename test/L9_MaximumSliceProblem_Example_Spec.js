var expect = require('chai').expect;
var testName = 'L9_MaximumSliceProblem_Example.js';
var Task = require('../lib/' + testName);

//mocha --grep MaximumSliceProblem_Example
//node-debug _mocha --grep MaximumSliceProblem_Example
describe(testName, function () {
    describe('Final results', function () {
        it('should return  from A = []', function () {
            var A = [5, -7, 3, 5, -2, 4, -1];
            var results = Task.solution(A);
            expect(results).to.equal([3, 5, -2, 4]);
        });
    });
});
