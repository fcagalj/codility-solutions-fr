var expect = require('chai').expect;
var testName = 'L7_StackAndQueues_Nesting.js';
var Task = require('../../lib/codility/' + testName);
//mocha --grep StackAndQueues_Nesting
describe(testName, function () {
    describe('Final results', function () {
        it('should return 1 from S="(()(())())"', function () {
            var S = '(()(())())';
            var results = Task.solution(S);
            expect(results).to.equal(1);
        });
        it('should return 1 from S="(()()(())())"', function () {
            var S = '(()()(())())';
            var results = Task.solution(S);
            expect(results).to.equal(1);
        });
        it('should return 0 from S="(()(())(()))"', function () {
            var S = ')((()(())(()))';
            var results = Task.solution(S);
            expect(results).to.equal(0);
        });
        it('should return 0 from S="())"', function () {
            var S = '())';
            var results = Task.solution(S);
            expect(results).to.equal(0);
        });
    });
});
