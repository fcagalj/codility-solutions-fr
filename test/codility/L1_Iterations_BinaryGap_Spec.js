const expect = require('chai').expect;
const testName = 'L1_Iterations_BinaryGap.js';
const Task = require('../../lib/codility/' + testName);
describe(testName, function () {
    describe('Final results', function () {
         it('should return 4 from N = 529 ', function () {
             const results = Task.solution(529);
             expect(results).to.equal(4);
         });
         it('should return 1 from N = 20 ', function () {
             const results = Task.solution(20);
             expect(results).to.equal(1);
         });
         it('should return 0 from N = 15 ', function () {
             const results = Task.solution(15);
             expect(results).to.equal(0);
         });
         it('should return 3 from N = 561892 ', function () {
             const results = Task.solution(561892);
             expect(results).to.equal(3);
         });
         it('should return  4 from N = 74901729 ', function () {
             const results = Task.solution(74901729);
             expect(results).to.equal(4);
         });
         it('should return  4 from N = 1376796946 ', function () {
             const results = Task.solution(1376796946);
             expect(results).to.equal(5);
         });
    });
});
