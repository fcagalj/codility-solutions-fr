
var expect = require('chai').expect;
var Task = require('../../lib/zooplus/zooplusCD3.js');

//mocha --grep zooplusCD3
//node-debug _mocha --grep zooplusCD3
describe('Testing zooplusCD3', function () {
    describe('Final results', function () {
        it('test case 1  ', function () {
            var A = [];
            var results = Task.solution(A);
            expect(results).to.equal(5);
            //expect(results).to.deep.equals([]);
        });
    });
});
