'use strict';
exports.solution = solution;

//mocha --grep C_Turtle
//node-debug _mocha --grep C_Turtle

function solution(A) {
    var X = 0, Y = 0,
        M = [[]];


    for (var i = 0;i < A.length; i++) {
        console.log('%n. matrix: ', i, M);
        if       (i%4 === 0){//north
            var Yn = Y + A[i];
            for (var j = Y + 1;j <= Yn; j++) {
                M[j] = M[j] || [];
                if(M[j][X]){
                    return i + 1;
                } else {
                    M[j][X] = true;
                }
            }
            Y = Yn;
        } else if(i%4 === 1) {//west
            var Xn = X + A[i];
            M[Y] = M[Y] || [];
            for (var j = X + 1;j <= Xn; j++) {
                if(M[Y][j]){
                    return i + 1;
                } else {
                    M[Y][j] = true;
                }
            }
            X = Xn;

        } else if(i%4 === 2) {//south
            var Yn = Y - A[i];
            for (var j = Y - 1;j >= Yn; j--) {
                M[j] = M[j] || [];
                if(M[j][X]){
                    return i + 1;
                } else {
                    M[j][X] = true;
                }
            }
            Y = Yn;

        } else if(i%4 === 3) {//east
            var Xn = X - A[i];
            M[Y] = M[Y] || [];
            for (var j = X - 1;j >= Xn; j--) {
                if(M[Y][j]){
                    return i + 1;
                } else {
                    M[Y][j] = true;
                }
            }
            X = Xn;
        }
    }
}
