var expect = require('chai').expect;
var testName = 'L4_CountingElements_MaxCounters.js';
var Task = require('../../lib/codility/' + testName);


//mocha --grep MaxCounters
//node-debug _mocha --grep MaxCounters
describe(testName, function () {
    describe('Final results', function () {
        it('should return [3, 2, 2, 4, 2] from A = [3, 4, 4, 6, 1, 4, 4], N = 5 ', function () {
            var A = [3, 4, 4, 6, 1, 4, 4];
            var N = 5;
            var results = Task.solution(N, A);
            expect(results).to.eql([3, 2, 2, 4, 2]);
        });
    });
});
