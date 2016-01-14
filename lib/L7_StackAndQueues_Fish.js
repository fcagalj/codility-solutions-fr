'use strict';
exports.solution = solution;
//mocha --grep StackAndQueues_Fish
//node-debug _mocha --grep Fish
function solution(A, B) {
    var counter = 0;
    for (var i = 0; i < A.length; i++) {
        var stack = [];
        if (B[i] === 1) {
            stack.push(i);
            while (B[i + 1] === 0) {
                if (stack.length === 0) {} else if (A[stack[stack.length - 1]] < A[i + 1]) {
                    stack.pop();
                    counter++;
                } else if (A[stack[stack.length - 1]] > A[i + 1]) {
                    counter++;
                }
                i++;
            }
        }
    }
    return (A.length - counter);
}

function solution4(A, B) {
    var eats = 0;
    var stack = [];
    stack.push(0);
    for (var i = 0; i < A.length; i++) {
        if (B[i] === 0) {
            //var j = i + 1;
            while (B[i + 1] === 0) {
                if (B[stack[stack.length - 1]] === 1) {
                    if (A[stack[stack.length - 1]] < A[i + 1]) {
                        stack.pop();
                        stack.push(i + 1);
                        //break;
                    } else {
                        //stack.push(j);
                    }
                    eats++;
                } else {
                    stack.push(i);
                }
                i++;
            }
        } else if (B[i] === 1) {
            stack.push(i);
        }
    }
    return A.length - eats;
}
//
// function Stack() {
//     var obj = {};
//     var stack = [];
//     obj.pop = Array.prototype.pop;
//     obj.push = Array.prototype.push;
//     obj.peek = function () {
//         return stack[stack.length - 1];
//     };
//     return obj;
// }
//same as sol2 https://codility.com/demo/results/trainingJWEZPA-WGR/
function solution3(A, B) {
    var counter = A.length;
    var lastFishIndex = 0;
    for (var i = 1; i < A.length; i++) {
        //console.log(i, lastFishIndex);
        if (B[lastFishIndex] === 1 && B[i] === 0) {
            if (A[lastFishIndex] < A[i]) {
                lastFishIndex = i;
            }
            counter = counter - 1;
        } else {
            lastFishIndex = i;
        }
    }
    return counter;
}
////bad ??50% https://codility.com/demo/results/training2HCU5Z-JCS/
function solution2(A, B) {
    var counter = A.length;
    var lastFishIndex = 0;
    for (var i = 0; i < A.length - 1; i++) {
        //console.log(i, lastFishIndex);
        if (B[lastFishIndex] === 1 && B[i + 1] === 0) {
            if (A[lastFishIndex] > A[i + 1]) {} else {
                lastFishIndex = i + 1;
            }
            counter--;
        } else {
            lastFishIndex = i + 1;
        }
    }
    return counter;
}
//splice, correct but bad performance!!
//https://codility.com/demo/results/trainingEKV6VN-8HE/
function solution1(A, B) {
    for (var i = 0; i < A.length - 1; i++) {
        if (B[i] === 1 && B[i + 1] === 0) {
            if (A[i] > A[i + 1]) {
                A.splice(i + 1, 1);
                B.splice(i + 1, 1);
            } else {
                A.splice(i, 1);
                B.splice(i, 1);
            }
            i--;
        }
    }
    return A.length;
    // var T = [0, 1, 2, 3, 4, 5];
    // for (var i = 0; i <= T.length; i++) {
    //     T.splice(i + 1, 1);
    //     console.log('%s:  ', i, T);
    // }
    // var TK = [ 0, 2, 4 ];
    // console.log(TK);
    // TK.splice(3, 1);
    // console.log('TK:', TK);
    // var K = [1];
    // console.log(K);
    // K.splice(0, 1);
    // console.log(K);
}
