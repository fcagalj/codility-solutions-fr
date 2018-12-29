const expect = require('chai').expect;
const testName = 'L2_Arrays_CyclicRotation.js';
const Task = require('../../lib/codility/' + testName);

//mocha --grep CyclicRotation
//node-debug _mocha --grep CyclicRotation

describe(testName, function () {
    describe('Final results', function () {
        it('should return [9, 7, 6, 3, 8] from A = [3, 8, 9, 7, 6] and K = 3', function () {
            const A = [3, 8, 9, 7, 6], K = 3;
            const results = Task.solution(A, K);
            expect(results).to.deep.equals([9, 7, 6, 3, 8]);
        });
        it('should return [1, 1, 1, 1, 0] from A = [1, 1, 1, 1, 0] and K = 0', function () {
            const A = [1, 1, 1, 1, 0], K = 0;
            const results = Task.solution(A, K);
            expect(results).to.deep.equals([1, 1, 1, 1, 0]);
        });
        it('should return [9, 7, 6, 3, 8] from A = [3, 8, 9, 7, 6] and K = 6', function () {
            const A = [9, 7, 6, 3, 8], K = 5;
            const results = Task.solution(A, K);
            expect(results).to.deep.equals([9, 7, 6, 3, 8]);
        });
        it('should return [] from A = [] and K = 1', function () {
            const A = [], K = 1;
            const results = Task.solution(A, K);
            expect(results).to.deep.equals([]);
        });
    });
});
