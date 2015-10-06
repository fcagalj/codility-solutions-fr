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

function solution(A) {

    var sumCurr=0, minSlice=10000, currSlice=10000;
    var minIndex;
    var j=0, i=0, N=A.length; 

    while(j<N){
        sumCurr += A[j];
        var currSize = (j - i + 1);
        if(currSize > 1){
            currSlice = sumCurr / (j - i + 1);
            console.log('A[' + j + ']=' + A[j] + ', slice size=' + currSize + ', slice Average=' + currSlice + ', currentMin= '+ minSlice);
            if(A[j]<currSlice){
                minSlice = currSlice;
                minIndex = i;
                console.log('   A[' + j + ']=' + A[j] + ' <' + currSlice + ' current minimum index = ' + minIndex);                
            }else if(A[j]>=currSlice){
                console.log('   A[' + j + ']=' + A[j] + ' >=' + currSlice+ ' current minimum index = ' + minIndex);
                sumCurr=A[j];
                i=j;
            }
            if(!minIndex){
                minIndex=i;
            }            
        }
        console.log(j + ' iteration, minIndex= '+minIndex);
        j++;
    }
    return minIndex;
}