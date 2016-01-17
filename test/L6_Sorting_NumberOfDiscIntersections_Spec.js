var expect = require('chai').expect;
var testName = 'L6_Sorting_NumberOfDiscIntersections.js';
var Task = require('../lib/' + testName);

//mocha --grep NumberOfDiscIntersections

describe(testName, function () {
    describe('Final results', function () {
        it('should return 0 from A = [10, 50, 5, 1] ', function () {
            var A = [10, 50, 5, 1];
            var results = Task.solution(A);
            expect(results).to.equal(0);
        });
        it('should return 1 from A = [10, 2, 5, 1, 8, 20] ', function () {
            var A = [10, 2, 5, 1, 8, 20];
            var results = Task.solution(A);
            expect(results).to.equal(1);
        });
    });
});