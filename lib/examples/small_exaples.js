//\W removes all non-alphanumeric characters:
//  \W matches any non-word character
//  \W is equivalent to [^A-Za-z0–9_]
//  \W matches anything that is not enclosed in the brackets

//check for palindrome
function palindrome(str) {
    str = str.trim().toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
    console.log(str);
    return str.split('').reverse().join('') === str;
}

//findLongestWord
function findLongestWord(str) {
    return str
            .split(' ')
            .map(w => {
                return w.length;
            })
            .reduce((p, c) => {
                    return Math.max(p, c);
            });
}

//
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

//titleCase
function titleCase(str) {
    return str
            .split(' ')
            .map(w => {
                return w.charAt(0).toUpperCase() + w.substr(1).toLowerCase();
            })
            .join(' ');
}