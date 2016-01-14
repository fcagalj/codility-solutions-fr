var expect = require('chai').expect;
var testName = 'L4_CountingElements_MaxCounters.js';
var Task = require('../lib/' + testName);
describe(testName, function () {
    describe('Final results', function () {
        it('should return [3, 2, 2, 4, 2] from A = [3, 4, 4, 6, 1, 4, 4], N = 5 ', function () {
            var A = [3, 4, 4, 6, 1, 4, 4];
            var N = 5;
            var results = Task.solution(N, A);
            expect(results).to.eql([3, 2, 2, 4, 2]);
        });
        // it('should return  from A = [-1, -3, 3, 1] ', function(){
        //      var A = [-1, -3, 3, 1];
        //      var results = Task.solution(A);
        //      expect(results).to.equal(2);
        // });
        // it('should return  from A = [1]', function(){
        //      var A = [1];
        //      var results = Task.solution(A);
        //      expect(results).to.equal(2);
        // });
        // it('should return  from A = [-1,-2,-3]', function(){
        //      var A = [-1,-2,-3];
        //      var results = Task.solution(A);
        //      expect(results).to.be.equal(1);
        // });
        // it('should return  from A = [-1000]', function(){
        //      var A = [-1000];
        //      var results = Task.solution(A);
        //      expect(results).to.be.equal(1);
        // });
    });
});
