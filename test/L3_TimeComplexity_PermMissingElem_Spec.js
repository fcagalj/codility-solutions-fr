var expect = require('chai').expect;
var testName = 'L3_TimeComplexity_PermMissingElem.js';
var Task = require('../lib/' + testName);


//mocha --grep PermMissingElem
//node-debug _mocha --grep PermMissingElem

describe(testName, function () {
    describe('Final results', function () {
        it('should return 4 from A = [2, 3, 1, 5] ', function () {
            var A = [2, 3, 1, 5];
            var results = Task.solution(A);
            expect(results).to.equal(4);
        });
        it('should return 4 from A = [2, 3, 1, 5] ', function () {
            var A = [2, 3, 1, 5];
            var results = Task.solution(A);
            expect(results).to.equal(4);
        });
        it('should return 1 from A = [] ', function () {
            var A = [];
            var results = Task.solution(A);
            expect(results).to.equal(1);
        });
        it('should return 3 from A = [1, 2, 4] ', function () {
            var A = [1, 2, 4];
            var results = Task.solution(A);
            expect(results).to.equal(3);
        });
        it('should return 3 from A = [2, 3] ', function () {
            var A = [2, 3];
            var results = Task.solution(A);
            expect(results).to.equal(1);
        });
        it('should return 2 from A = [1] ', function () {
            var A = [1];
            var results = Task.solution(A);
            expect(results).to.equal(2);
        });
        it('should return 2 from A = [1, 2, 3, 4, 5, 6, 8] ', function () {
            var A = [1, 2, 3, 4, 5, 6, 8];
            var results = Task.solution(A);
            expect(results).to.equal(7);
        });
        it('should return  ', function () {
            var A = [];
            for (var i = 1;i < 500; i++) {
                A.push(i);
            }
            A.push(501);
            var results = Task.solution(A);
            expect(results).to.equal(500);
        });

    });
});
