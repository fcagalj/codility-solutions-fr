'use strict';

exports.solution = solution;

//https://codility.com/demo/results/training3HQM58-NBE/
//https://codility.com/demo/results/training5KY3Q4-D44/
//https://codility.com/demo/results/training4HMK9Z-4NS/
//BinaryGap


//mocha --grep BinaryGap
//node-debug _mocha --grep BinaryGap

function solution(N) {

    N = N.toString(2).split('');

    let max = 0;
    for (let i = 0;i < N.length; i++) {
        let br = 0;
        if(N[i] === '1'){
            while(N[i + 1] === '0' && i<N.length) {
                br++;
                i++;
                if(br>max && N[i + 1] === '1'){
                    max = br;
                }
            }
        }
    }
    return max;
}












function solution1(N) {
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
