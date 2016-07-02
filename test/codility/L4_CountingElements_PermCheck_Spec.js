var expect = require('chai').expect;
var testName = 'L4_CountingElements_PermCheck.js';
var Task = require('../../lib/codility/' + testName);

//mocha --grep PermCheck
describe(testName, function () {
    it('should prove A = [4,1,3,2] is permutation', function () {
        var A = [4, 1, 3, 2];
        var results = Task.solution(A);
        expect(results).to.equal(1);
    });
    it('should prove A = [4,1,3] is not permutation', function () {
        var A = [4, 1, 3];
        var results = Task.solution(A);
        expect(results).to.equal(0);
    });
    it('should prove A = [1] is permutation', function () {
        var A = [1];
        var results = Task.solution(A);
        expect(results).to.equal(1);
    });
    it('should prove A = [0] is not permutation', function () {
        var A = [0];
        var results = Task.solution(A);
        expect(results).to.equal(0);
    });
    it('should prove A = [10000] is not permutation', function () {
        var A = [10000];
        var results = Task.solution(A);
        expect(results).to.equal(0);
    });
});
