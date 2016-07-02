var expect = require('chai').expect;
var testName = 'C_Turtle.js';
var Task = require('../lib/' + testName);

//mocha --grep C_Turtle
//node-debug _mocha --grep C_Turtle
describe(testName, function () {
    describe('Final results', function () {
        it('should return  ', function () {
            var A = [];
            A[0]=1; A[1]=3; A[2]=2; A[3]=5; A[4]=4; A[5]=4; A[6]=6; A[7]=3; A[8]=2;
            var results = Task.solution(A);
            expect(results).to.equal(7);
        });
        it('should return  ', function () {
            var A = [1, 3, 2, 5, 4, 4, 6, 3, 2];
            var results = Task.solution(A);
            expect(results).to.equal(6);
        });
        it('should return  ', function () {
            var A = [4, 4, 5, 7, 8, 6, 5];
            var results = Task.solution(A);
            expect(results).to.equal(6);
        });
        it('should return  ', function () {
            var A = [1, 1, 2, 1, 1];
            var results = Task.solution(A);
            expect(results).to.equal(4);
        });
    });
});
