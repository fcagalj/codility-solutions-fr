'use strict';

//mocha --grep test_func_prog
//node-debug _mocha --grep test_func_prog
exports.solution = solution;

//
//array manipulation
//
//a = [ 2,4,5,9] , x = 3
//write a function addValue(a,x)  so that you get an array that adds X to each element of A

function solution(a) {


}

Array.prototype.addValue = function (Arr) {

//    this.map((e, ...c) => {
//
//
//        e +a;
//})
//    ;

    //Arr.reduce((a, next) => {
    //    a + next;
    //});
};

function MyNum(a) {
    //let obj = {};
    //obj.a = a;
    //return a;
    this.a = a;
    this.multiplans = [];
}

MyNum.prototype.add = function (v) {
 return this.a + v;
};

MyNum.prototype.add = function (v) {
    return this.a + v;
};

function multiply(first){
    //let obj = {};
    //obj.arr = obj.arr || [];
    //obj.arr.push(first);
    //second = second || 1;
    //return second *= obj.arr.pop();

    return first * multiply ();
}

