
var expect = require('chai').expect;
var Task = require('../../lib/lipeno/DecimalPlacesInNumber.js');

//mocha --grep DecimalPlacesInNumber
//node-debug _mocha --grep DecimalPlacesInNumber
describe('Testing DecimalPlacesInNumber', function () {
    describe('Final results', function () {
        it('test case 1  ', function () {
            var A = 123654.22;
            var results = Task.solution(A);
            expect(results).to.equal('123,654.22');
        });
    });
});
