var expect = require('chai').expect;
var testName = 'L7_StackAndQueues_StoneWall.js';
var Task = require('../../lib/codility/' + testName);
//mocha --grep StackAndQueues_StoneWall
describe(testName, function () {
    describe('Final results', function () {
        it('should return 7 from H = [8, 8, 5, 7, 9, 8, 7, 4, 8]', function () {
            var H = [8, 8, 5, 7, 9, 8, 7, 4, 8];
            var results = Task.solution(H);
            expect(results).to.equal(7);
        });
        it('should return 1 from H = [1]', function () {
            var H = [1];
            var results = Task.solution(H);
            expect(results).to.equal(1);
        });
        it('should return 3 from H = [1, 1, 1]', function () {
            var H = [1, 1, 1];
            var results = Task.solution(H);
            expect(results).to.equal(1);
        });
    });
});
