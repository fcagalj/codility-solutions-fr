var expect = require('chai').expect;
var testName = 'L5_PrefixSums_Example_Mushrooms.js';
var Task = require('../../lib/codility/' + testName);
// mocha --grep Mushrooms
describe(testName, function () {
    it('should return  from A = [2, 3, 7, 5, 1, 3, 9] ', function () {
        var A = [2, 3, 7, 5, 1, 3, 9],
            k = 4,
            m = 6;
        var results = Task.solution(A, k, m);
        expect(results).to.equal(25);
    });
});
