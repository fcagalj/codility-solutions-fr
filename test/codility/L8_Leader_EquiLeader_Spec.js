var expect = require('chai').expect;
var testName = 'L8_Leader_EquiLeader.js';
var Task = require('../../lib/codility/' + testName);
//mocha --grep EquiLeader
describe(testName, function () {
    describe('Final results', function () {
        it('should return 2 from A = [4, 3, 4, 4, 4, 2]', function () {
            var A = [4, 3, 4, 4, 4, 2];
            var results = Task.solution(A);
            expect(results).to.equal(2);
        });
    });
});
