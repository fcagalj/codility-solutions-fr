
var expect = require('chai').expect;
var Task = require('../../lib/live_coding_exercises/Domino.js');

//mocha --grep Domino
//node-debug _mocha --grep Domino
describe('Testing Domino', function () {
    describe('Final results', function () {
        it('test case 1  ', function () {
            var d = '/Users/fcagalj/SOFT_DEV/JavaScript/codility-solutions-fr/lib/live_coding_exercises/dominoCase1.txt';
            var results = Task.solution(d);
            expect(results).to.deep.equals([1, 1, 3]);
        });
        it('test case 1  ', function () {
            var d = '/Users/fcagalj/SOFT_DEV/JavaScript/codility-solutions-fr/lib/live_coding_exercises/dominoCase2.txt';
            var results = Task.solution(d);
            expect(results).to.deep.equals([1, 4, 7]);
        });
    });
});
