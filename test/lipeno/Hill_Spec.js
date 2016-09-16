
var expect = require('chai').expect;
var Task = require('../../lib/lipeno/Hill.js');

//mocha --grep Hill
//node-debug _mocha --grep Hill
describe('Testing Hill', function () {
    describe('Final results', function () {
        it('test case 1  ', function () {
            var A = [5, 4, 3, 2, 8];
            var results = Task.solution(A);
            expect(results).to.equal(3);
        });
        it('test case 2  ', function () {
            var A = [7, 3, 5, 6, 9, 4];
            var results = Task.solution(A);
            expect(results).to.equal(5);
        });
        it('test case 3  ', function () {
            var A = [3, 3, 2];
            var results = Task.solution(A);
            expect(results).to.equal(1);
        });
        it('test case 3  ', function () {
            var A = [7, 3, 5, 6, 9, 4, 12, 16, 0, 22, 17, 18, 24, 32];
            var results = Task.solution(A);
            expect(results).to.equal(16);
        });
    });
});
