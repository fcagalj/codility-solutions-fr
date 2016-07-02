var expect = require('chai').expect;
var testName = 'L8_Leader_Dominator.js';
var Task = require('../../lib/codility/' + testName);

//mocha --grep Dominator
//node-debug _mocha --grep Dominator
describe(testName, function () {
    describe('Final results', function () {
        it('should return 7 from H = [3, 4, 3, 2, 3, -1, 3, 3]', function () {
            var A = [3, 4, 3, 2, 3, -1, 3, 3];
            var results = Task.solution(A);
            expect(results).to.equal(7);
        });
        it('should return 4 from H = [0,0,1,1,1]', function () {
            var A = [0,0,1,1,1];
            var results = Task.solution(A);
            expect(results).to.equal(4);
        });
        it('should return -1 from H = [0,0,1,1]', function () {
            var A = [0,0,1,1];
            var results = Task.solution(A);
            expect(results).to.equal(-1);
        });
        it('should return 1 from H = [0,0,1]', function () {
            var A = [0,0,1];
            var results = Task.solution(A);
            expect(results).to.equal(1);
        });
    });
});
