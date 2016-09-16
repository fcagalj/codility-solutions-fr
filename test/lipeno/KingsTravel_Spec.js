
var expect = require('chai').expect;
var Task = require('../../lib/lipeno/KingsTravel.js');

/**
 */
//mocha --grep KingsTravel
//node-debug _mocha --grep KingsTravel
describe('Testing KingsTravel', function () {
    describe('Final results', function () {
        it('test case 1  ', function () {
            var A = [];
            var results = Task.solution(A);
            expect(results).to.equal(5);
            //expect(results).to.deep.equals([]);
        });
    });
});
