
var expect = require('chai').expect;
var Task = require('../../lib/lc_e/AllPa.js');

//mocha --grep AllPalindroms
//node-debug _mocha --grep AllPalindroms
describe('Testing AllPalindroms', function () {
    describe('Final results', function () {
        it('test case 1  ', function () {
            var A = 'nitin';
            var results = Task.solution(A);
            expect(results).to.equal(9);
        });
    });
});
