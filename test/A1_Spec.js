var expect = require('chai').expect;
var testName = 'A1.js';
var Task = require('../lib/' + testName);

//mocha --grep A1
//node-debug _mocha --grep A1
describe(testName, function () {
    describe('Final results', function () {
        it('should return  ', function () {
            var A = [];
            A[0] = 1;
            A[1] = 5;
            A[2] = 3;
            A[3] = 3;
            A[4] = 7;
            var results = Task.solution(A);
            expect(results).to.equal(true);
        });
        it('should return  ', function () {
            var A = [];
            A[0] = 1;
            A[1] = 3;
            A[2] = 5;
            A[3] = 3;
            A[4] = 4;
            var results = Task.solution(A);
            expect(results).to.equal(false);
        });
        it('should return  ', function () {
            var A = [];
            A[0] = 1;
            var results = Task.solution(A);
            expect(results).to.equal(true);
        });
        it('should return  ', function () {
            var A = [];
            A[0] = 1;
            A[1] = 5;
            A[2] = 3;
            var results = Task.solution(A);
            expect(results).to.equal(true);
        });
        it('should return  ', function () {
            var A = [1,2,3,4,5,6,7,8,9,10,11,2,45,56,67,78,89,90,123,124,1245566778];
            var results = Task.solution(A);
            expect(results).to.equal(false);
        });
        it('should return  ', function () {
            var A = [1,2,3,4,5,6,7,8,9,10,11,2,45,56,67,78,89,90,2,123,124,1245566778];
            var results = Task.solution(A);
            expect(results).to.equal(false);
        });
    });
});
