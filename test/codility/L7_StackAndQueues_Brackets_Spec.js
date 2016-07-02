var expect = require('chai').expect;
var testName = 'L7_StackAndQueues_Brackets.js';
var Task = require('../../lib/codility/' + testName);
//mocha --grep Brackets
describe(testName, function () {
    describe('Final results', function () {
        it('should return 1 from A = "{[()()]}" ', function () {
            var A = '{[()()]}';
            var results = Task.solution(A);
            expect(results).to.equal(1);
        });
        it('should return 0 from A = "([)()]" ', function () {
            var A = '([)()]';
            var results = Task.solution(A);
            expect(results).to.equal(0);
        });
        it('should return 1 from empty A = "" ', function () {
            var A = '';
            var results = Task.solution(A);
            expect(results).to.equal(1);
        });
    });
});
