
var expect = require('chai').expect;
var Task = require('../../lib/cc/tabla.js');

//mocha --grep tabla
//node-debug _mocha --grep tabla
describe('Testing tabla', function () {
    describe('Final results', function () {
        it('test case 1  ', function () {
            var A = [];
            var results = Task.solution(A);
            expect(results).to.equal(5);
            //expect(results).to.deep.equals([]);
        });
    });
});
