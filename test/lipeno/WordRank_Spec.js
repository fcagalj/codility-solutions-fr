
var expect = require('chai').expect;
var Task = require('../../lib/lipeno/WordRank.js');

//mocha --grep WordRank
//node-debug _mocha --grep WordRank
describe('Testing WordRank', function () {
    describe('Final results', function () {
        it('test case 1  ', function () {
            var A = 'WORD';
            var results = Task.solution(A);
            expect(results).to.equal(22);
        });
        it('test case 2  ', function () {
            var A = 'WORD';
            var results = Task.solution(A);
            expect(results).to.equal(22);
        });
        it('test case 3  ', function () {
            var A = 'TURING';
            var results = Task.solution(A);
            expect(results).to.equal(598);
        });
    });
});
