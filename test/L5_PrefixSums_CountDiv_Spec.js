var expect = require('chai').expect;
var testName = 'L5_PrefixSums_CountDiv.js';
var Task = require('../lib/' + testName);

//mocha --grep CountDiv

describe(testName, function(){
  describe('Final results', function(){
    it('should return 3 from A = 6, B = 11, K = 2 ', function(){
         var A = 6, B = 11, K = 2;
         var results = Task.solution(A, B, K);
         expect(results).to.equal(3);
    });
  });
});
