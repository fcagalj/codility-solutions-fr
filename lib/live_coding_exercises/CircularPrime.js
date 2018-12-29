
'use strict';
/*************************************************************************************************

 CircularPrime
 A number is called a circular prime if all of its rotations (rotations of their digits) are primes themselves.
 For example the prime number 197 has two rotations: 971, and 719. Both of them are prime, so all of them are circular primes.
 There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.
 How many circular primes are there below N if 1 <= N <= 1000000?

 */
exports.solution = solution;
exports._isPrime = _isPrimeNum;
exports._rotateArray = _rotateArray;

//mocha --grep CircularPrime
//node-debug _mocha --grep CircularPrime

function solution(N) {

  let uniqueMap = {};
  for (let i = 2;i <= N; i++) {
    uniqueMap[i] = uniqueMap[i] || _isPrimeNum(i);
    let rotations = _getRotations(i);
    rotations.map(rotation => {
      uniqueMap[i] &= _isPrimeNum(rotation);
    });
  }
  let primes = Object.keys(uniqueMap).filter(rotation => {return uniqueMap[rotation]});
  return primes.length;
}

function _isPrimeNum(num) {
  let isPrime = true;
  for (let i = 2;i < num; i++) {
    if(num % i === 0){
      isPrime = false;
    }
  }
  return isPrime;
}

function _getRotations(n) {
  let rotations = [];
  console.log('For number ', n);
  let arr = n.toString().split('');
  for (let i = 0;i < arr.length; i++) {
    rotations.push(parseInt(arr.slice().join('')));
    arr.unshift(arr.pop());
  }
  console.log('returning rotations: ', rotations);
  return rotations;
}

function _rotate(arr) {
  arr.unshift(arr.pop());
  return arr;
}

function solution45345(N) {
    var res = 0;
    for (var i = 2;i <= N; i++) {
        var nums = (i + '').split('');
        var countNum = 0;
        for (var j = 1;j <= nums.length; j++) {
            nums.unshift(nums.pop());
            if(isPrime(parseInt(nums.join('')))){
                countNum++;
            }
        }
        if(countNum === nums.length){
            res ++;
        }
        countNum = 0;
    }
    return res;
}
//is a natural number greater than 1 that has no positive divisors other than 1 and itself.
function isPrime(n) {
    for (var i = 2;i < n; i++) {
        if(n % i === 0){
            return false;
        }
    }
    return n > 1;
}

function solution1(N) {

    var res = 0;
    for (var i = 1;i <= N; i++) {
        var count = 0;
        var b = (i + '').split('');
        for (var j = 0;j < b.length; j++) {
            if(_isPrime(parseInt(b.join('')))){
                count++;
            }
            b = _rotateArray(b);

            if(count === b.length){
                res++;
                count = 0;
            }
        }
    }
    return res;

}


function _isPrime1(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

function _rotateArray(arr) {
    var last = arr.pop();
    arr.unshift(last);
    return arr;
}
