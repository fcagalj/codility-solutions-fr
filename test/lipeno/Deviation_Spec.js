
var expect = require('chai').expect;
var Task = require('../../lib/lipeno/Deviation.js');

//mocha --grep Deviation
//node-debug _mocha --grep Deviation
describe('Testing Deviation', function () {
    describe('Final results', function () {
        it('test case 1  ', function () {
            var A = [6, 9, 4, 7, 4, 1];
            var results = Task.solution(A, 3);
            expect(results).to.equal(6);
        });
        it('test case 2  ', function () {
            var A = [2, 3, 5, 7, 11, 13, 17, 19, 31, 71, 6, 9, 4, 7, 4, 1];
            var results = Task.solution(A, 4);
            expect(results).to.equal(67);
        });
    });
});
