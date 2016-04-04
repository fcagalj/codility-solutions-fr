var expect = require('chai').expect;
var testName = 'CodilityAD1Z1.js';
var Task = require('../lib/' + testName);
//mocha --grep CodilityAD1Z1
describe(testName, function () {
    describe('Final results', function () {
        it('should return 4 from A = [5, 5, 1, 7, 2, 3, 5], X = 5', function () {
            var A = [5, 5, 1, 7, 2, 3, 5];
            var X = 5;
            var results = Task.solution(X, A);
            expect(results).to.equal(4);
        });
        it('should return 9 from A = [8, 7, -2, 5, 1, 7, -2, 3, 5, 3], X = 3', function () {
            var A = [8, 7, -2, 5, 1, 7, -2, -3, 3, 9];
            var X = 3;
            var results = Task.solution(X, A);
            expect(results).to.equal(9);
        });
        it('should return 9 from A = [8, 8, 8, 8, 8], X = 3', function () {
            var A = [8, 8, 8, 8, 8];
            var X = 3;
            var results = Task.solution(X, A);
            expect(results).to.be.undefined();
        });
    });
});
