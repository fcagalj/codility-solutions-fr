'use strict';

exports.solution = solution;
/**
 Given an array of integer elements. Your task is to write a function that finds the minimum value X that makes possible
 the following: generate a new array that is sorted in strictly ascending order by increasing or decreasing each of the
 elements of the initial array with integer values in the [0, X] range. Example: Having the initial array
 [5, 4, 3, 2, 8] the minimum value for X is 3. Decrease the first element (5) by 3, decrease the second one (4) by 1,
 increase the third one (3) by 1, increase the forth one (2) by 3 and do nothing to the last one (8). In the end we
 obtain the array [2, 3, 4, 5, 8] which is sorted in strictly ascending order.print the result X to the standard output
 (stdout) Note that your function will receive the following arguments:
 v
 which is the array of integers
 */

//mocha --grep Hill
//node-debug _mocha --grep Hill


function solution(v) {

    var maxNumbers = [];
    var sorted = v.slice().sort(function (a, b) {
        return a - b;
    });
    for (var i = 0;i < v.length; i++) {
        maxNumbers.push(Math.abs(v[i] - sorted[i]));
    }
    return Math.max.apply(this, maxNumbers);
}

//My bad soultion!!
function solution1(A) {

    var min = Math.min.apply(this, A);
    var max = Math.max.apply(this, A);
    var last = min;
    var res = [], arr = [];
    for (var i = 0; i < A.length; i++) {
        //res.push(Math.abs(A[i] - last) < Math.abs(max - A[i]) ? Math.abs(A[i] - last) : Math.abs(max - A[i]));
        //res.push(Math.abs(A[i] - last));
        if (i === A.length - 1) {
            console.log('iii', i, Math.abs(max - A[i]));
            res.push(Math.abs(max - A[i]));
            arr.push(max);
        } else {
            res.push(Math.abs(A[i] - last));
            arr.push(last);
        }
        last++;
    }
    return Math.max.apply(this, res);
}
