'use strict';
/*You are given N counters, initially set to 0, and you have two possible operations on them:

increase(X) − counter X is increased by 1,
max counter − all counters are set to the maximum value of any counter.
A non-empty zero-indexed array A of M integers is given. This array represents consecutive operations:

if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
if A[K] = N + 1 then operation K is max counter.
For example, given integer N = 5 and array A such that:

    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the values of the counters after each consecutive operation will be:

    (0, 0, 1, 0, 0)
    (0, 0, 1, 1, 0)
    (0, 0, 1, 2, 0)
    (2, 2, 2, 2, 2)
    (3, 2, 2, 2, 2)
    (3, 2, 2, 3, 2)
    (3, 2, 2, 4, 2)
The goal is to calculate the value of every counter after all operations.

Write a function:

function solution(N, A);

that, given an integer N and a non-empty zero-indexed array A consisting of M integers, returns a sequence of integers representing the values of the counters.

The sequence should be returned as:

a structure Results (in C), or
a vector of integers (in C++), or
a record Results (in Pascal), or
an array of integers (in any other programming language).
For example, given:

    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the function should return [3, 2, 2, 4, 2], as explained above.

Assume that:

N and M are integers within the range [1..100,000];
each element of array A is an integer within the range [1..N + 1].
Complexity:

expected worst-case time complexity is O(N+M);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.*/
exports.solution = solution;

function solution(N, A) {
    var C = [];
    var max = 0;
    var lastMax = 0;
    for (var j = 0; j < N; j++) {
        C[j] = 0;
    }
    //console.log(C);
    for (var i = 0; i < A.length; i++) {
        if (A[i] >= 1 && A[i] <= N) {
            if (lastMax > C[A[i] - 1]) {
                C[A[i] - 1] = lastMax;
            }
                C[A[i] - 1]++;
            if (C[A[i] - 1] > max) {
                max = C[A[i] - 1];
            }
        } else if (A[i] === N + 1) {
            lastMax = max;
        }
        console.log(C, A[i], max, lastMax);
    }
    for (var k = 0; k < N; k++) {
        if (C[k] < lastMax) {
            C[k] = lastMax;
        }
    }
    return C;
}

function solution2(N, A) {
    var M = A.length;
    var ret = [N];
    for (var i = 0; i < N; i++) {
        ret[i] = 0;
    }
    var max = 0;
    var min = 0;
    for (var j = 0; j < M; j++) {
        if ((A[j] >= 1) && (A[j] <= N)) {
            if (min > ret[A[j] - 1]) {
                ret[A[j] - 1] = min;
            }
            ret[A[j] - 1]++;
            if (max < ret[A[j] - 1]) {
                max = ret[A[j] - 1];
            }
        }
        if (A[j] === (N + 1)) {
            min = max;
        }
    }
    for (var k = 0; k < N; k++) {
        if (min > ret[k]) {
            ret[k] = min;
        }
    }
    return ret;
}
