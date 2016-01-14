var expect = require('chai').expect;
var testName = 'L5_PrefixSums_MinAvgTwoSlice.js';
var Task = require('../lib/' + testName);

// mocha --grep MinAvgTwoSlice

describe(testName, function () {
    it('should return 1 from A = [4, 2, 2, 5, 1, 5, 8] ', function () {
        var A = [4, 2, 2, 5, 1, 5, 8];
        var results = Task.solution(A);
        expect(results).to.equal(1);
    });
});
