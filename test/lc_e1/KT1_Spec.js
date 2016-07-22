
var expect = require('chai').expect;
var Task = require('../../lib/lc_e1/KT1.js');

//mocha --grep KT1
//node-debug _mocha --grep KT1
describe('Testing KT1', function () {
    describe('Final results', function () {
        it('test case 1  ', function () {
            var A = [];
            var results = Task.solution(A);
            expect(results).to.equal(5);
            //expect(results).to.deep.equals([]);
        });
    });
});
