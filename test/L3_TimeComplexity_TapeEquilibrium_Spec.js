var expect = require('chai').expect;
var testName = 'L3_TimeComplexity_TapeEquilibrium.js';
var Task = require('../lib/' + testName);


//mocha --grep TapeEquilibrium
//node-debug _mocha --grep TapeEquilibrium

describe(testName, function () {
    describe('Final results', function () {
        //it('should return 1 from A = [3, 1, 2, 4, 3] ', function () {
        //    var A = [3, 1, 2, 4, 3];
        //    var results = Task.solution(A);
        //    expect(results).to.equal(1);
        //});
        //it('should return 1 from A = [3, 1, 2, 4, 3] ', function () {
        //    var A = [3, 1, 2];
        //    var results = Task.solution(A);
        //    expect(results).to.equal(0);
        //});
        it('should return 1 from A = [3, 1, 2, 4, 3] ', function () {
            var A = [9, 1];
            var results = Task.solution(A);
            expect(results).to.equal(8);
        });

    });
});
