const expect = require('chai').expect;
const testName = 'L3_TimeComplexity_TapeEquilibrium.js';
const Task = require('../../lib/codility/' + testName);


//mocha --grep TapeEquilibrium
//node-debug _mocha --grep TapeEquilibrium

describe(testName, function () {
    describe('Final results', function () {
        it('should return 1 from A = [3, 1, 2, 4, 3] ', function () {
           const A = [3, 1, 2, 4, 3];
           const results = Task.solution(A);
           expect(results).to.equal(1);
        });
        it('should return 1 from A = [3, 1, 2, 4, 3] ', function () {
           const A = [3, 1, 2];
           const results = Task.solution(A);
           expect(results).to.equal(0);
        });
        it('should return 1 from A = [3, 1, 2, 4, 3] ', function () {
            const A = [9, 1];
            const results = Task.solution(A);
            expect(results).to.equal(8);
        });

    });
});
