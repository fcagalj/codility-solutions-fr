
'use strict';

exports.solution = solution;


//mocha --grep hola_test
//node-debug _mocha --grep ho

//Implement function verify(text) which verifies whether parentheses within text are
//correctly nested. You need to consider three kinds: (), [], <>.
//
//Examples:
//
//    verify("---(++++)----") -> 1
//verify("") -> 1
//verify("before ( middle []) after ") -> 1
//verify(") (") -> 0
//verify("} {") -> 1 //no, this is not a mistake.
//verify("<(   >)") -> 0
//verify("(  [  <>  ()  ]  <>  )") -> 1
//verify("   (      [)") -> 0

function solution(A) {
    var result = {};
    try {
        result = A.split('').reduce(function (acc, e){
            if (['(', '[', '<'].indexOf(e) > -1) {
                acc[e] = acc[e] === undefined ? 1 : acc[e] + 1;
            }
            if ([')', ']', '>'].indexOf(e) > -1) {
                switch (e) {
                    case ')':
                        e = '(';
                        break;
                    case ']':
                        e = '[';
                        break;
                    case '>':
                        e = '<';
                        break;
                }
                if (!acc[e]) throw 'error';
                acc[e] -= 1;
            }
            return acc;
        }, {});
    } catch (e) {
        return 0;
    }
    return result['('] || result['['] || result['<'] ? 0 : 1;
}

function solutionMy(A) {
    var stack = [];
    if(A[0]){
        stack.push(A[0]);
    }
    A.split('').forEach(function (a) {
        if(opening(a)){
            stack.push(a);
        } else if (match(stack.pop(), a)){

        } else {
            return 0;
        }
    });
    return stack.length === 0 ? 1 : 0;

    function opening(o) {
        switch (o) {
            case '(':
                return true;
            case '[':
                return true;
            case '<':
                return true;
        }
        return false;
    }
    function match(o, c) {
        switch (o) {
            case '(':
                return c === ')';
            case '[':
                return c === ']';
            case '<':
                return c === '>';
        }
        return false;
    }

}
