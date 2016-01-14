var expect = require('chai').expect;
var testName = 'L7_StackAndQueues_Fish.js';
var Task = require('../lib/' + testName);
//mocha --grep StackAndQueues_Fish
describe(testName, function () {
    describe('Final results', function () {
        it('should return 2 from A = [4, 3, 2, 1, 5], B = [0, 1, 0, 0, 0] ', function () {
            var A = [4, 3, 2, 1, 5],
                B = [0, 1, 0, 0, 0];
            var results = Task.solution(A, B);
            expect(results).to.equal(2);
        });
        it('should return  from A = [], B = [] ', function () {
            var A = [4, 3, 2, 1, 5],
                B = [0, 1, 0, 1, 0];
            var results = Task.solution(A, B);
            expect(results).to.equal(3);
        });
        it('should return  from A = [], B = [] ', function () {
            var A = [4, 3, 2, 1, 5],
                B = [1, 0, 0, 0, 0];
            var results = Task.solution(A, B);
            expect(results).to.equal(1);
        });
        it('should return  from A = [], B = [] ', function () {
            var A = [4, 3, 2, 1, 5],
                B = [1, 1, 1, 1, 1];
            var results = Task.solution(A, B);
            expect(results).to.equal(5);
        });
        it('should return  from A = [], B = [] ', function () {
            var A = [4, 3, 2, 1, 5],
                B = [0, 0, 0, 0, 0];
            var results = Task.solution(A, B);
            expect(results).to.equal(5);
        });
        it('should return  from A = [], B = [] ', function () {
            var A = [4, 3, 2, 1, 5],
                B = [1, 0, 1, 0, 1];
            var results = Task.solution(A, B);
            expect(results).to.equal(3);
        });
    });
});
