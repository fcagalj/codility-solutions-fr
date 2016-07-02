'use strict';
//exports.solution = solution;
//mocha --grep StackAndQueues_StoneWall
//node-debug _mocha --grep StoneWall

//https://codility.com/demo/results/trainingZHHQXC-V5B/
exports.solution = function solution(H) {
    var q = [],
        c = 1;
    q.push(H[0]);
    for (var i = 0; i < H.length - 1; i++) {
        if (H[i + 1] > H[i]) {
            c++;
            q.push(H[i + 1]);
        } else if (H[i + 1] < H[i]) {
            while (q.length && q[q.length - 1] > H[i + 1]) {
                q.pop();
            }
            if (!q.length || (q.length && q[q.length - 1] !== H[i + 1])) {
                q.push(H[i + 1]);
                c++;
            }
        }
    }
    return c;
}


//https://codility.com/demo/results/trainingP4SCBZ-2EN/
function solution1(H) {
    var stack = [];
    var counter = 1;
    stack.push(H[0]);
    for (var i = 0; i < H.length; i++) {
        // while (H[i] === stack[stack.length - 1] ) {
        //   i = (i < H.length - 1) ? i + 1 : i; //just to check weather it last
        // }
        if (stack[stack.length - 1] === H[i]) {

        } else if (stack[stack.length - 1] < H[i]) {
            stack.push(H[i]);
            counter++;
        } else if (stack[stack.length - 1] > H[i]) {
            // var j = stack.length;
            counter++;
            while (stack.length > 0 && stack[stack.length - 1] > H[i]) {
                stack.pop();
                //counter++;
            }
            if (stack[stack.length - 1] === H[i]) {
                counter--;
            }
            stack.push(H[i]);
        }
    }
    return counter;
}
