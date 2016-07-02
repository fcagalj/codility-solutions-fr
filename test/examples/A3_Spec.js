var expect = require('chai').expect;
var testName = 'A3.js';
var Task = require('../../lib/examples/' + testName);

//mocha --grep A3
//node-debug _mocha --grep A3
describe(testName, function () {
    describe('Final results', function () {
        it('should return 9 ', function () {
            var A = [1, 0, 0, 1, 1];
            var results = Task.solution(A);
            expect(results).to.deep.equals([1, 1, 0, 1]);
        });
        it('should return 23 ', function () {
            var A = [1, 0, 0, 1, 1, 1];
            var results = Task.solution(A);
            expect(results).to.deep.equals([1, 1, 0, 1, 0, 1, 1]);
        });
    });
});
