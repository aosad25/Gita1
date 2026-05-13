//Task 1
function getAbbr(str) {
    let words = str.split(" ");
    let abbr = "";
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (i < words.length - 1) {
            abbr += word[0] + ".";
            continue;
        }
        abbr += word[0];
    }
    return abbr;
}

//Task 2
function getSumOfDigits(number) {
    let numberToString = "" + number;
    let digits = numberToString.split("");
    let sumOfDigits = 0;

    for (let index = 0; index < digits.length; index++) {
        let digit = digits[index] - 0;
        sumOfDigits += digit
    }
    return sumOfDigits;
}

//Task 3
function removeDuplicates(str) {
    let result = "";
    let usedCharacters = new Set();
    for (let i = 0; i < str.length; i++) {
        if (!usedCharacters.has(str[i])) {
            usedCharacters.add(str[i]);
            result += str[i];
        }
    }
    return result;
}

//Task 4
function removeSpaces(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            result += str[i];
        }
    }
    return result;
}

//Task 5
function reverseEachWord(str) {
    let words = str.split(" ");
    let result = "";
    for (let index = 0; index < words.length; index++) {
        result += reverseWord(words[index]);
        if(index < words.length-1)result += " ";
    }
    return result;
}

function reverseWord(word) {
    let result = "";
    for (let i = word.length - 1; i >= 0; i++) {
        result += word[i];
    }
    return result;
}