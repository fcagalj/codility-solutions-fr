var expect = require('chai').expect;
var testName ='L6_Sorting_MaxProductOfThree.js';
var Task = require('../lib/' + testName);
//mocha --grep MaxProductOfThree
describe(testName, function () {
    it('should return 60 from A = [-3, 0, 2, -2, 5, 6] ', function () {
        var A = [-3, 1, 2, -2, 5, 6];
        var results = Task.solution(A);
        expect(results).to.equal(60);
    });
    it('should return 6 from A = [-3, -1, -2, -2, 0] ', function () {
        var A = [-3, -1, -2, -2, 0];
        var results = Task.solution(A);
        expect(results).to.equal(0);
    });
    it('should return -6 from A = [-3, -3, -2, -1, -10] ', function () {
        var A = [-3, -3, -2, -1, -10];
        var results = Task.solution(A);
        expect(results).to.equal(-6);
    });
});
