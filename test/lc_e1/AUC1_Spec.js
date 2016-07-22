
var expect = require('chai').expect;
var Task = require('../../lib/lc_e1/AUC1.js');

//mocha --grep AUC1
//node-debug _mocha --grep AUC1
describe('Testing AUC1', function () {
    describe('Final results', function () {
        it('test case 1  ', function () {
            var A = 'abcd';
            var results = Task.solution(A);
            expect(results).to.equal(true);
        });
        it('test case 2  ', function () {
            var A = 'abcdd';
            var results = Task.solution(A);
            expect(results).to.equal(false);
        });
    });
});
