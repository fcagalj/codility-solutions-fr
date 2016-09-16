
var expect = require('chai').expect;
var Task = require('../../lib/lipeno/FindRotationPoint.js');

//mocha --grep FindRotationPoint
//node-debug _mocha --grep FindRotationPoint
describe('Testing FindRotationPoint', function () {
    describe('Final results', function () {
        it('test case 1  ', function () {
            var A = ['garden', 'heroes', 'reign', 'severance', 'ant', 'boiling', 'burned', 'going', 'herbal'];
            var results = Task.solution(A);
            expect(results).to.equal(4);
            //expect(results).to.deep.equals([]);
        });
        it('test case 1  ', function () {
            var A = ['ddeeee', 'eeee', 'garden', 'heroes', 'reign', 'severance', 'ant', 'boiling', 'burned', 'going', 'herbal','ccc', 'ddd'];
            var results = Task.solution(A);
            expect(results).to.equal(6);
            //expect(results).to.deep.equals([]);
        });
    });
});
