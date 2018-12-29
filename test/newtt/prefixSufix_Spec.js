
const expect = require('chai').expect;
const Task = require('../../lib/newtt/prefixSufix.js');

//mocha --grep prefixSufix
//node-debug _mocha --grep prefixSufix
describe('Testing prefixSufix', function () {
    describe('Final results', function () {
        it('test case 1  ', function () {
            const A = 'aabcdaabc';
            const results = Task.solution(A);
            expect(results).to.equal(4);
        });
        it('test case 2  ', function () {
            const A = 'abcab';
            const results = Task.solution(A);
            expect(results).to.equal(2);
        });
        it('test case 3  ', function () {
            const A = 'aaaa';
            const results = Task.solution(A);
            expect(results).to.equal(2);
        });
        it('test case 4  ', function () {
            const A = 'aaaaa';
            const results = Task.solution(A);
            expect(results).to.equal(2);
        });
    });
});
