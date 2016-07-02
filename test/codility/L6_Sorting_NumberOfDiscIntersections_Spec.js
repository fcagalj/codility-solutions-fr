var expect = require('chai').expect;
var testName = 'L6_Sorting_NumberOfDiscIntersections.js';
var Task = require('../../lib/codility/' + testName);

//mocha --grep NumberOfDiscIntersections
//node-debug _mocha --grep NumberOfDiscIntersections
describe(testName, function () {
    describe('Final results', function () {
        it('should return 11 from A = [1, 5, 2, 1, 4, 0] ', function () {
            var A = [1, 5, 2, 1, 4, 0];
            var results = Task.solution(A);
            expect(results).to.equal(11);
        });
        it('should return 0 from A = [] ', function () {
            var A = [];
            var results = Task.solution(A);
            expect(results).to.equal(0);
        });
        it('should return 0 from A = [1] ', function () {
            var A = [1];
            var results = Task.solution(A);
            expect(results).to.equal(0);
        });
        it('should return 2 from A = [1, 1] ', function () {
            var A = [1, 1];
            var results = Task.solution(A);
            expect(results).to.equal(1);
        });
        it('should return 3 from A = [1, 1, 1] ', function () {
            var A = [1, 1, 1];
            var results = Task.solution(A);
            expect(results).to.equal(3);
        });
    });
});
