var expect = require('chai').expect;
var testName = 'L2_Arrays_CyclicRotation.js';
var Task = require('../lib/' + testName);

//mocha --grep CyclicRotation
//node-debug _mocha --grep CyclicRotation

describe(testName, function () {
    describe('Final results', function () {
        it('should return [9, 7, 6, 3, 8] from A = [3, 8, 9, 7, 6] and K = 3', function () {
            var A = [3, 8, 9, 7, 6], K = 3;
            var results = Task.solution(A, K);
            expect(results).to.deep.equals([9, 7, 6, 3, 8]);
        });
        it('should return [1, 1, 1, 1, 0] from A = [1, 1, 1, 1, 0] and K = 0', function () {
            var A = [1, 1, 1, 1, 0], K = 0;
            var results = Task.solution(A, K);
            expect(results).to.deep.equals([1, 1, 1, 1, 0]);
        });
        it('should return [9, 7, 6, 3, 8] from A = [3, 8, 9, 7, 6] and K = 6', function () {
            var A = [9, 7, 6, 3, 8], K = 5;
            var results = Task.solution(A, K);
            expect(results).to.deep.equals([9, 7, 6, 3, 8]);
        });
    });
});
