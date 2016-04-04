'use strict'
exports.solution = solution;

//https://codility.com/demo/results/training3HQM58-NBE/
//https://codility.com/demo/results/training5KY3Q4-D44/

//BinaryGap

function solution(N) {
    // write your code in JavaScript (Node.js 4.0.0)
    N = N.toString(2).split(''); //to array
    var max = 0;
    var counter = 0;
    var start = false;
    var stop = false;
    console.log(N);
    for (var i = 0; i < N.length; i++) {
        if (N[i] === '0' && start) {
            counter++;
            //console.log('0    %s: N=%s, counter=%s, max=%s', i, N[i], counter, max);
        }
        if (N[i] === '1') {
            start = true;
            //console.log('1    %s: N=%s, counter=%s, max=%s', i, N[i], counter, max);
            if (counter > max) {
                max = counter;
            }
            counter = 0;
        }
    }
    return max;
}
