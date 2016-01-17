var expect = require('chai').expect;
var testName = 'L5_PrefixSums_GenomicRangeQuery.js';
var Task = require('../lib/' + testName);
// mocha --grep GenomicRangeQuery
describe(testName, function () {
    it('should return  from S = CAGCCTA ', function () {
        var S = 'CAGCCTA',
            P = [2, 5, 0],
            Q = [4, 5, 6];
        var results = Task.solution(S, P, Q);
        expect(results).to.eql([2, 4, 1]);
    });
    it('should return from S = CAGCCTA ', function () {
        var S = 'CAGCCTA',
            P = [2, 5, 7],
            Q = [4, 5, 9];
        var results = Task.solution(S, P, Q);
        expect(results).to.eql([2, 4, 0]);
    });
    it('should return from S = CAGCCTA ', function () {
        var S = 'CAGCCTA',
            P = [2, 5, -7],
            Q = [4, 5, 9];
        var results = Task.solution(S, P, Q);
        expect(results).to.eql([2, 4, 0]);
    });
});
