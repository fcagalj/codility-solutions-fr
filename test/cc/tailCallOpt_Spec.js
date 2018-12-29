
const expect = require('chai').expect;
const Task = require('../../lib/cc/tailCallOpt.js');

//mocha --grep tailCallOpt
//node-debug _mocha --grep tailCallOpt
describe('Testing tailCallOpt', function () {
    describe('Final results', function () {
        it('test case 1  ', function () {
            let A = [];
            const results = Task.solution(A);
            expect(results).to.equal(5);
            //expect(results).to.deep.equals([]);
        });
    });
});
