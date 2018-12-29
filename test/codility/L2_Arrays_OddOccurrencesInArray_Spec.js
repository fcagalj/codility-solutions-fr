const expect = require('chai').expect;
const testName = 'L2_Arrays_OddOccurrencesInArray.js';
const Task = require('../../lib/codility/' + testName);


//mocha --grep OddOccurrencesInArray
//node-debug _mocha --grep OddOccurrencesInArray
describe(testName, function () {
    describe('Final results', function () {
        it('should return 7 from A = [9, 3, 9, 3, 9, 7, 9] ', function () {
            const A = [9, 3, 9, 3, 9, 7, 9];
            const results = Task.solution(A);
            expect(results).to.equal(7);
        });
        it('should return 9 from A = [9, 3, 7, 3, 9, 7, 9] ', function () {
            const A = [9, 3, 7, 3, 9, 7, 9];
            const results = Task.solution(A);
            expect(results).to.equal(9);
        });
        it('should return 1 from A = [9, 3, 9, 3, 9, 7, 9, 7, 1] ', function () {
            const A = [9, 3, 9, 3, 9, 7, 9, 7, 1];
            const results = Task.solution(A);
            expect(results).to.equal(1);
        });
        // it('should work isOdd', function () {
        //     expect(Task.isOdd(5)).to.equal(true);
        //     expect(Task.isOdd(1)).to.equal(true);
        //     expect(Task.isOdd(4)).to.equal(false);
        //     expect(Task.isOdd(2)).to.equal(false);
        //     expect(Task.isOdd(0)).to.equal(false);
        //     expect(Task.isOdd(-1)).to.equal(false);
        //     expect(Task.isOdd(-4)).to.equal(false);
        //     expect(Task.isOdd(-222)).to.equal(false);
        // });
    });
});
