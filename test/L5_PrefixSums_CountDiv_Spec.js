var expect = require('chai').expect;
var testName = 'L5_PrefixSums_CountDiv.js';
var Task = require('../lib/' + testName);

//mocha --grep CountDiv

describe(testName, function(){
/*  describe('sortUniquePositive', function(){
    it('should return  from A = [1,3,6,4,1,2] ', function(){
         var A = [1,3,6,4,1,2];
         var results = Task.sortUniquePositive(A);
         expect(results).to.eql([1,2,3,4,6]);
    });
    it('should return  from A = [-1, -3, 3, 1] ', function(){
         var A = [-1, -3, 3, 1];
         var results = Task.sortUniquePositive(A);
         expect(results).to.eql([1,3]);
    });
    it('should return  from A = [1]', function(){
         var A = [1];
         var results = Task.sortUniquePositive(A);
         expect(results).to.eql([1]);
    });
    it('should return  from A = [-1,-2,-3, 0, 0]', function(){
         var A = [-1,-2,-3, 0, 0];
         var results = Task.sortUniquePositive(A);
         expect(results).to.be.eql([]);
    });
    it('should return  from A = [-1,-2,-3]', function(){
         var A = [-1,-2,-3];
         var results = Task.sortUniquePositive(A);
         expect(results).to.be.eql([]);
    });
    it('should return  from A = [-1000]', function(){
         var A = [-1000];
         var results = Task.sortUniquePositive(A);
         expect(results).to.be.eql([]);
    });
  });*/
  describe('Final results', function(){
    it('should return  from A = [1,3,6,4,1,2] ', function(){
         var A = [1,3,6,4,1,2];
         var results = Task.solution(A);
         expect(results).to.equal(5);
    });
    it('should return  from A = [-1, -3, 3, 1] ', function(){
         var A = [-1, -3, 3, 1];
         var results = Task.solution(A);
         expect(results).to.equal(2);
    });
    it('should return  from A = [1]', function(){
         var A = [1];
         var results = Task.solution(A);
         expect(results).to.equal(2);
    });
    it('should return  from A = [-1,-2,-3]', function(){
         var A = [-1,-2,-3];
         var results = Task.solution(A);
         expect(results).to.be.equal(1);
    });
    it('should return  from A = [-1000]', function(){
         var A = [-1000];
         var results = Task.solution(A);
         expect(results).to.be.equal(1);
    });
  });
});
