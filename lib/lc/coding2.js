//Decks of cards
//
//In a casino all the playing cards got mixed up, some of them got lost. You have to
//collect as many full decks as possible.
//
//    You get N mixed up French playing cards as your input.
//
//    The cards are of the following ranks:
//    2,3,4,5,6,7,8,9,T,J,Q,K,A
//
//The four suits are:
//    Spade(♠), Club(♣), Heart(♥), and Diamond(♦)
//
//The cards are given using their rank followed by their suit:
//
//    2 of Spades: 2S
//Ace of Clubs: AC
//10 of Hearts: TH

'use strict';
var fs = require('fs');


exports.solution = solution;


//mocha --grep coding2
//node-debug _mocha --grep coding2

function solutionJure(A) {

    A = A.sort();
    var a = [A[0]];
    for (var i = 1;i < A.length; i++) {
        if(A[i - 1] !== A[i]){
            a.push(A[i]);
        }
    }

    console.log('A', A.length);
    console.log('a', a.length);
    var Sc = 0, Cc = 0, Hc = 0, Dc = 0;
    a.forEach(function(card){
        switch (card.split('')[1]) {
            case 'S':
                Sc++;
                break;
            case 'C':
                Cc++;
                break;
            case 'H':
                Hc++;
                break;
            case 'D':
                Dc++;
                break;
        }
    });

    var min = Math.min(Sc, Cc, Hc, Dc);
    console.log('min', min);

    return (min - (min%13)) / 13;

}

function solution(A) {

    var sp = '23456789TJQK'.split(''),
        zg = 'SCDH'.split('');

    var count = {};
    sp.forEach(function(spe){
        zg.forEach(function(zog){
            count[spe + zog] = 0;
        });
    });

    A.forEach(function(card){
        count[card]++;
    });

    var min = A.length;

    for (var p in count) {
        if(p && (count[p] || count[p]===0)){
            if(count[p] < min){
                min = count[p];
            }
        }
    }

    return min;
}
