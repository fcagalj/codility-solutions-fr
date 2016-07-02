var expect = require('chai').expect;
var testName ='L6_Sorting_Distinct.js';
var Task = require('../../lib/codility/' + testName);

//mocha --grep Distinct
//node-debug _mocha --grep Distinct
describe(testName, function () {
    it('should return 60 from A = [2, 1, 1, 2, 3, 1] ', function () {
        var A = [2, 1, 1, 2, 3, 1];
        var results = Task.solution(A);
        expect(results).to.equal(3);
    });
});
