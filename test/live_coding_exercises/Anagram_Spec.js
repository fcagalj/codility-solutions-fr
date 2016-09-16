
var expect = require('chai').expect;
var Task = require('../../lib/live_coding_exercises/Anagram.js');

//mocha --grep Anagram
//node-debug _mocha --grep Anagram
describe('Testing Anagram', function () {
    describe('Final results', function () {
        it('test case 1  ', function () {
            var w = 'split';
            var results = Task.solution(w);
            expect(results).to.equal(2);
        });
        it('test case 2  ', function () {
            var w = 'aaaaiillmnnoovv';
            var results = Task.solution(w);
            expect(results).to.equal(1);
        });
        it('test case 3  ', function () {
            var w = 'dfgddgfb';
            var results = Task.solution(w);
            expect(results).to.equal(0);
        });
    });
});
