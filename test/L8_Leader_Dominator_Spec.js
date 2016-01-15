var expect = require('chai').expect;
var testName = 'L8_Leader_Dominator.js';
var Task = require('../lib/' + testName);
//mocha --grep Dominator
describe(testName, function () {
    describe('Final results', function () {
        it('should return 7 from H = [3, 4, 3, 2, 3, -1, 3, 3]', function () {
            var A = [3, 4, 3, 2, 3, -1, 3, 3];
            var results = Task.solution(A);
            expect(results).to.equal(7);
        });
    });
});
