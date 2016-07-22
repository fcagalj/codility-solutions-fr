
var expect = require('chai').expect;
var Task = require('../../lib/lc/coding1.js');

//mocha --grep coding1
//node-debug _mocha --grep coding1
describe('Testing coding1', function () {
    describe('Final results', function () {
        it('test case 1  ', function () {
            var A = [1,2,[3],[4,[5,6]],[[7]], 8];
            var results = Task.solution(A);
            console.log('Result: ', results);
            expect(results).to.deep.equals([1,2,3,4,5,6,7,8]);
        });
        it('test case 2  ', function () {
            var A = [1, 2, [3], [4, [5, 6], 5, 6], [[7], [8, [9]]], 10];
            var results = Task.solution(A);
            console.log('Result 2: ', results);
            expect(results).to.deep.equals([1,2,3,4,5,6,7,8]);
        });
        it('test case 3  ', function () {
            var A = [1, 2, [3], [4, [5, 6], 5, 6], [[7], [8, [9]]], 10, [[[11], 12]]];
            var results = Task.solution(A);
            console.log('Result 3: ', results);
            expect(results).to.deep.equals([1,2,3,4,5,6,7,8, 9]);
        });
    });
});
