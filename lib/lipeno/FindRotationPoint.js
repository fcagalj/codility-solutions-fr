
'use strict';

exports.solution = solution;

/**
 I opened up a dictionary to a page in the middle and started flipping through,
 looking for words I didn't know. I decided to start placing them at increasing
 indices in a huge array I created in memory. When I reached the end of the dictionary,
 I started from the beginning and did the same thing until I reached the page I had started at.
 Now I have an array of words that are mostly alphabetical, except they start somewhere in
 the middle of the alphabet, reach the end, and then start from the beginning of the alphabet.
 In other words, this is an alphabetically ordered array that has been "rotated."
 Write a function for finding the "rotation point," which is where I started working from
 the beginning of the dictionary. This array is huge (there are lots of words I don't know)
 so we want to be efficient here.
 */

//mocha --grep FindRotationPoint
//node-debug _mocha --grep FindRotationPoint

function solution(A) {

    A.forEach(function(a){

    });
    for (var i = 0;i < A.length - 1; i++) {
        if(A[i] > A[i + 1]){
            return i + 1;
        }
    }
}
