
var expect = require('chai').expect;
var Task = require('../../lib/lipeno/CompressString.js');

//mocha --grep CompressString
//node-debug _mocha --grep CompressString
describe('Testing CompressString', function () {
    describe('Final results', function () {
        it('test case 1  ', function () {
            var A = 'aabcccccaaa';
            var results = Task.solution(A);
            expect(results).to.equal('a2b1c5a3');
        });
    });
});
