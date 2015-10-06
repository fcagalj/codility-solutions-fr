var expect = require('chai').expect;
var Task = require('../lib/L3_MinAvgTwoSlice.js'); 

describe('MinAvgTwoSlice', function(){
    it('should return 1 from A = [4, 2, 2, 5, 1, 5, 8] ', function(){
         var A = [4, 2, 2, 5, 1, 5, 8];
         var results = Task.solution(A);
         expect(results).to.equal(1);
    });
});