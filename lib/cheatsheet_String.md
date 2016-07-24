
# JS Cheatsheet

### String
```javascript
Properties
    String.prototype
    string.length
Methods
    String.prototype.charAt()
    String.prototype.endsWith()
    String.prototype.includes()
    String.prototype.indexOf()
    String.prototype.lastIndexOf()
    String.prototype.match()
    String.prototype.repeat()
    String.prototype.replace()
    String.prototype.search()
    String.prototype.slice()
    String.prototype.split()
    String.prototype.startsWith()
    String.prototype.strike()
    String.prototype.sub()
    String.prototype.substr()
    String.prototype.toLowerCase()
    String.prototype.toUpperCase()
    String.prototype.trim()
    String.prototype.trimLeft()
    String.prototype.trimRight()
    String.prototype[@@iterator]()
```

                                              |
### endsWith(searchString[, position]); startsWith(searchString[, position])
```javascript
var str = 
'To be, or not to be, that is the question.';

console.log(str.endsWith('question.'));//true
console.log(str.endsWith('to be'));    //false
console.log(str.endsWith('to be', 19));//true

console.log(str.startsWith('To be'));         // true
console.log(str.startsWith('not to be'));     // false
console.log(str.startsWith('not to be', 10)); // true
```

### includes(searchString[, position])
```javascript
console.log(str.includes('To be'));    //true
console.log(str.includes('question')); //true
console.log(str.includes('nonexistent'));//fal
console.log(str.includes('To be', 1)); //false
console.log(str.includes('TO BE'));    //false
```

### indexOf(searchValue[, fromIndex])
```javascript
'Blue Whale'.indexOf('Blue');    //returns  0
'Blue Whale'.indexOf('Blute');   //returns -1
'Blue Whale'.indexOf('Whale', 0);//returns  5
'Blue Whale'.indexOf('Whale', 5);//returns  5
'Blue Whale'.indexOf('', 9);     //returns  9
'Blue Whale'.indexOf('', 10);    //returns 10
'Blue Whale'.indexOf('', 11);    //returns 10
```

### lastIndexOf(searchValue[, fromIndex])
```javascript
'canal'.lastIndexOf('a');     // returns 3
'canal'.lastIndexOf('a', 2);  // returns 1
'canal'.lastIndexOf('a', 0);  // returns -1
'canal'.lastIndexOf('x');     // returns -1
'canal'.lastIndexOf('c', -5); // returns 0
'canal'.lastIndexOf('c', 0);  // returns 0
'canal'.lastIndexOf('');      // returns 5
'canal'.lastIndexOf('', 2);   // returns 2
```

### match(regexp)
```javascript
var str = 'ABCDEFGHIJKLMNOP';
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);
console.log(matches_array);
// ["A", "B", "C", "D", "E"]
```

### repeat(count)
```javascript
'abc'.repeat(-1);   // RangeError
'abc'.repeat(0);    // ''
'abc'.repeat(1);    // 'abc'
'abc'.repeat(2);    // 'abcabc'
'abc'.repeat(3.5);  // 'abcabcabc' 
                    // count will be convertd to int
'abc'.repeat(1/0);  // RangeError
```

### replace(regexp|substr, newSubStr|function)
```javascript
var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
// Twas the night before Christmas...
```

### search(regexp)
```javascript
var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
// Twas the night before Christmas...
```

### substring(indexStart[, indexEnd]); slice(beginSlice[, endSlice])
```javascript
var anyString = 'Mozilla';
// Displays 'Moz'
console.log(anyString.substring(0, 3));
console.log(anyString.substring(3, 0));
// Displays 'illa'
anyString.substring(anyString.length - 4);
```

### substr(start[, length])
```javascript
var str = 'abcdefghij';
console.log(str.substr(1, 2));  //'(1, 2): bc'
console.log(str.substr(-3, 2)); //'(-3, 2): hi'
console.log(str.substr(-3));    //'(-3): hij'
console.log(str.substr(1));     //'(1): bcdefghij'
console.log(str.substr(-20, 2));//'(-20, 2): ab'
console.log(str.substr(20, 2)); //'(20, 2): '
```