var expect = require('chai').expect;
var testName = 'L5_PrefixSums_PassingCars.js';
var Task = require('../../lib/codility/' + testName);

//mocha --grep PassingCars

describe(testName, function(){
  describe('Final results', function(){
    it('should return 5 from A = [0, 1, 0, 1, 1] ', function(){
         var A = [0, 1, 0, 1, 1];
         var results = Task.solution(A);
         expect(results).to.equal(5);
    });
  });
});
