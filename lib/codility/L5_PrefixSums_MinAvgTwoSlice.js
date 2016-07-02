'use strict';
/*
 A non-empty zero-indexed array A consisting of N integers is given. A pair of integers (P, Q), such that 0 ≤ P < Q < N, is called a slice of array A (notice that the slice contains at least two elements). The average of a slice (P, Q) is the sum of A[P] + A[P + 1] + ... + A[Q] divided by the length of the slice. To be precise, the average equals (A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1).

 For example, array A such that:

 A[0] = 4
 A[1] = 2
 A[2] = 2
 A[3] = 5
 A[4] = 1
 A[5] = 5
 A[6] = 8
 contains the following example slices:

 slice (1, 2), whose average is (2 + 2) / 2 = 2;
 slice (3, 4), whose average is (5 + 1) / 2 = 3;
 slice (1, 4), whose average is (2 + 2 + 5 + 1) / 4 = 2.5.
 The goal is to find the starting position of a slice whose average is minimal.

 Write a function:

 function solution(A);

 that, given a non-empty zero-indexed array A consisting of N integers, returns the starting position of the slice with the minimal average. If there is more than one slice with a minimal average, you should return the smallest starting position of such a slice.

 For example, given array A such that:

 A[0] = 4
 A[1] = 2
 A[2] = 2
 A[3] = 5
 A[4] = 1
 A[5] = 5
 A[6] = 8
 the function should return 1, as explained above.

 Assume that:

 N is an integer within the range [2..100,000];
 each element of array A is an integer within the range [−10,000..10,000].
 Complexity:

 expected worst-case time complexity is O(N);
 expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
 Elements of input arrays can be modified.
 */
exports.solution = solution;
//mocha --grep MinAvgTwoSlice
//node-debug _mocha --grep MinAvgTwoSlice

//https://codility.com/demo/results/trainingVVP42H-B2T/
function solution(A) {
    var P = prefix(A);
    var min = P[P.length - 1] / P.length;
    console.log('MIN: ', min);
    var index = 0;
    for (var i = 1; i < A.length; i++) {
        var curr = (A[i - 1] + A[i]) / 2;
        if (curr < min) {
            min = curr;
            index = i - 1;
        }
        curr = i < A.length - 1 ? (A[i - 1] + A[i] + A[i + 1]) / 3 : curr;
        if (curr < min) {
            min = curr;
            index = i - 1;
        }
    }
    return index;
}

//https://codility.com/demo/results/trainingNV79TH-KQJ/   catepilar, 100%
function solution3(A) {
    var minSlice = (A[0] + A[1]) / 2,
        index = 0,
        begin = 0,
        end = 1,
        currAvg;
    while (end < A.length) {
        if (end - begin === 1) {
            currAvg = (A[begin] + A[end]) / 2;
            if (currAvg < minSlice) {
                minSlice = currAvg;
                index = begin;
            }
            end++;
        } else if (end - begin === 2) {
            currAvg = (A[begin] + A[begin + 1] + A[end]) / 3;
            if (currAvg < minSlice) {
                minSlice = currAvg;
                index = begin;
            }
            begin++;
        }
    }
    return index;
}
//https://codility.com/demo/results/trainingSGS3AE-282/ 80%
//https://codility.com/demo/results/trainingXJM43U-9K4/ 70%
function solution3(A) {
    var minSlice = 30001;
    var index, av1, av2, av3, min1, currIndex;
    for (var i = 1; i < A.length; i++) {
        if (i >= 2) {
            av1 = (get(A, i - 2) + get(A, i - 1)) / 2;
            av2 = (get(A, i - 2) + get(A, i - 1) + A[i]) / 3;
            av3 = (get(A, i - 1) + A[i]) / 2;
            min1 = av1 < av2 ? av1 : av2;
            currIndex = i - 2;
            if (min1 > av3) {
                min1 = av3;
                currIndex = i - 1;
            }
        } else {
            min1 = (get(A, i - 1) + get(A, i)) / 2;
            currIndex = i - 1;
        }
        if ((minSlice === min1 && !index) || minSlice > min1) {
            minSlice = min1;
            index = currIndex;
        }
    }
    return index;
}

function get(A, i) {
    return i < 0 ? 0 : A[i];
}

function solutionMissed(A) {
    var P = [];
    P[0] = 0;
    for (var i = 1; i <= A.length; i++) {
        P[i] = P[i - 1] + A[i - 1];
    }
    var minAvg = -10000, // -20000 / 2
        index;
    for (var j = 0; j < A.length; j++) {
        var leftAvg = P[j + 1] / (j + 1);
        var rightAvg = (P[A.length] - P[j + 1]) / (A.length - j - 1);
        var currMin = leftAvg < rightAvg ? leftAvg : rightAvg;
        if (currMin < minAvg) {
            minAvg = currMin;
            index = j;
        }
    }
}

function solution2(A) {
    var fr = 0,
        la = 1,
        N = A.length,
        currSum = (A[0] + A[1]),
        currSize = 2,
        currSl = (currSum / 2),
        minSl = minSl,
        minIndex = fr;
    for (la; la < N; la++) {
        if ((A[la] < currSl)) { //
            currSum += A[la];
            currSize = la - fr + 1;
            currSl = (currSum / currSize);
            minIndex = la - 1;
        }
        if ((A[la] >= currSl) && (la < N)) { //
            currSum = A[la];
            currSize = 1;
            currSl = (currSum / currSize);
        }
    }
}

function solution1(A) {
    var sumCurr = 0,
        minSlice = 10000,
        currSlice = 10000;
    var minIndex = 0;
    var j = 0,
        i = 0,
        N = A.length;
    while (j < N) {
        sumCurr += A[j];
        var currSize = (j - i + 1);
        if (currSize > 1) {
            currSlice = sumCurr / (j - i + 1);
            var k = j + 2;
            while ((A[j] < currSlice) && (j <= k)) {
                sumCurr += A[j];
                currSlice = sumCurr / (j - i + 1);
                console.log('A[' + j + ']=' + A[j] + ', slice size=' + currSize + ', currSlice=' + currSlice + ', minSlice=' + minSlice);
                minSlice = currSlice;
                minIndex = i;
                j++;
                console.log('   .minSlice=' + minSlice + ' < ' + currSlice + ' minIndex=' + minIndex);
            }
            if (A[j] < currSlice) {
                sumCurr -= A[i];
                i++;
                currSlice = sumCurr / (j - i + 1);
                minIndex = i;
                console.log('   minSlice=' + minSlice + ' < ' + currSlice + ' minIndex=' + minIndex);
            }
            if (A[j] >= currSlice) {
                sumCurr = A[j];
                i = j;
                console.log('   minSlice=' + minSlice + ' >= ' + currSlice + ' minIndex=' + minIndex);
            }
        }
        console.log(j + ' iteration, minIndex= ' + minIndex);
        j++;
    }
    return (minIndex);
}

function prefix(A) {
    var P = [];
    P[0] = 0;
    for (var i = 1; i <= A.length; i++) {
        P[i] = P[i - 1] + A[i - 1];
    }
    return P;
}