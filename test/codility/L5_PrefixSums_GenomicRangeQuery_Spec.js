var expect = require('chai').expect;
var testName = 'L5_PrefixSums_GenomicRangeQuery.js';
var Task = require('../../lib/codility/' + testName);
//mocha --grep GenomicRangeQuery
//node-debug _mocha --grep GenomicRangeQuery
describe(testName, function () {
    it('should return  from S = CAGCCTA ', function () {
        var S = 'CAGCCTA',
            P = [2, 5, 0],
            Q = [4, 5, 6];
        var results = Task.solution(S, P, Q);
        expect(results).to.eql([2, 4, 1]);
    });
    it('should return from S = CA ', function () {
        var S = 'CA',
            P = [0],
            Q = [1];
        var results = Task.solution(S, P, Q);
        expect(results).to.eql([1]);
    });
    it('should return from S = C ', function () {
        var S = 'C',
            P = [0],
            Q = [0];
        var results = Task.solution(S, P, Q);
        expect(results).to.eql([2]);
    });
});
