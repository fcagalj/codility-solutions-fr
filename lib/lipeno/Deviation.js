
'use strict';

exports.solution = solution;

/**
 Given an array of integer elements and an integer d please consider all the sequences of d consecutive elements in the
 array. For each sequence we compute the difference between the maximum and the minimum value of the elements in that
 sequence and name it the deviation. Your task is to write a function that computes the maximum value among the
 deviations of all the sequences considered above print the value the standard output (stdout). Note that your function
 will receive the following arguments:
 v
 which is the array of integers
 d
 which is an integer value giving the length of the sequences
 */

//mocha --grep Deviation
//node-debug _mocha --grep Deviation

function solution(v, d) {

    var deviations = [];
    for (var i = 0;i < v.length; i++) {
        var endSeq = i + d; //Math.min(i + d, v.length - 1);
        if(endSeq <= v.length - 1){
            var min = v[i];
            var max = v[i];
            for (var j = i;j <= endSeq; j++) {
                min = v[j] < min ? v[j] : min;
                max = v[j] > max ? v[j] : max;
            }
            deviations.push(Math.abs(max - min));
        }
    }
    return Math.max.apply(this, deviations);
}

function fibonacci(n) {
    if(n <= 1){
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}