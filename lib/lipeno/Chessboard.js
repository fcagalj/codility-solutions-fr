
'use strict';

exports.solution = solution;

/**
 Print to the standard output a chessboard of size N,M where N is the number of columns and M is the number of rows.
 You have to print a 0 where the board is white and a 1 otherwise.
 Index (0,0) is white and it is the top left cell in the produced output.
 */

//mocha --grep Chessboard
//node-debug _mocha --grep Chessboard

function solution(N, M) {

    for (var i = 0;i < M; i++) {
        var row = '';
        var rower = i%2===0 ? 1 : 0;
        for (var j = 0;j < N; j++) {
            row += (j%2===rower ? 1 : 0);
        }
        console.log(row);
    }
}
