var expect = require('chai').expect;
var testName = 'L6_Sorting_NumberOfDiscIntersections.js';
var Task = require('../lib/' + testName);

//mocha --grep NumberOfDiscIntersections
//node-debug _mocha --grep NumberOfDiscIntersections
describe(testName, function () {
    describe('Final results', function () {
        it('should return 11 from A = [1, 5, 2, 1, 4, 0] ', function () {
            var A = [1, 5, 2, 1, 4, 0];
            var results = Task.solution(A);
            expect(results).to.equal(11);
        });
    });
});
