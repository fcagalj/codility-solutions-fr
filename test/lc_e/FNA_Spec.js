
var expect = require('chai').expect;
var Task = require('../../lib/lc_e/FNA.js');

//mocha --grep FlatNestedArrays
//node-debug _mocha --grep FlatNestedArrays
describe('Testing FlatNestedArrays', function () {
    describe('Final results', function () {
        it('test case my  ', function () {
            var a = [1,2,3], b = [4,5,6], c = [7,8,9], d = [10,11,12], e = [13, 14, 15], f = [16, 17, 18], g = [19,20,21];
            var A = [a,[b, c, [d], [e]], [f, [g]]];
            var result = Task._flatenArray(A);
            expect(result.length).to.equal(21);
            //expect(results).to.deep.equals([]);
        });
        it('test case 1  ', function () {
            var a = [1,2,3], b = [4,5,6], c = [7,8,9], d = [10,11,12], e = [13, 14, 15], f = [16, 17, 18], g = [19,20,21];
            var A = [a,[b, c, [d], [e]], [f, [g]]];
            var result = Task.solution(A);
            expect(result.length).to.equal(21);
            //expect(results).to.deep.equals([]);
        });
    });
});
