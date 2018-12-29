const expect = require('chai').expect;
const testName = 'L3_TimeComplexity_PermMissingElem.js';
const Task = require('../../lib/codility/' + testName);


//mocha --grep PermMissingElem
//node-debug _mocha --grep PermMissingElem

describe(testName, function () {
    describe('Final results', function () {
        it('should return 4 from A = [2, 3, 1, 5] ', function () {
            const A = [2, 3, 1, 5];
            const results = Task.solution(A);
            expect(results).to.equal(4);
        });
        it('should return 4 from A = [2, 3, 1, 5] ', function () {
            const A = [2, 3, 1, 5];
            const results = Task.solution(A);
            expect(results).to.equal(4);
        });
        it('should return 1 from A = [] ', function () {
            const A = [];
            const results = Task.solution(A);
            expect(results).to.equal(1);
        });
        it('should return 3 from A = [1, 2, 4] ', function () {
            const A = [1, 2, 4];
            const results = Task.solution(A);
            expect(results).to.equal(3);
        });
        it('should return 1 from A = [2, 3] ', function () {
            const A = [2, 3];
            const results = Task.solution(A);
            expect(results).to.equal(1);
        });
        it('should return 2 from A = [1] ', function () {
            const A = [1];
            const results = Task.solution(A);
            expect(results).to.equal(2);
        });
        it('should return 2 from A = [1, 2, 3, 4, 5, 6, 8] ', function () {
            const A = [1, 2, 3, 4, 5, 6, 8];
            const results = Task.solution(A);
            expect(results).to.equal(7);
        });
        it('should return  ', function () {
            const A = [];
            for (let i = 1;i < 500; i++) {
                A.push(i);
            }
            A.push(501);
            const results = Task.solution(A);
            expect(results).to.equal(500);
        });

    });
});
