//Task 1
function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

//Task 2
function reversedArray(number) {
    let num = number.toString();
    let digitArray = num.split("");
    let reverseDigitArr = [];

    for (let i = digitArray.length - 1; i >= 0; i--) {
        let digit = digitArray[i] - 0;
        reverseDigitArr.push(digit);
    }
    return reverseDigitArr;
}

//Task 3
function uniqueElements(arrOne, arrTwo) {
    let uniqueElems = [];
    for (let i = 0; i < arrOne.length; i++) {
        if (!arrTwo.includes(arrOne[i]) && !uniqueElems.includes(arrOne[i])) {
            uniqueElems.push(arrOne[i]);
        }
    }
    return uniqueElems;
}
 
//Task 4
function secondLargestNum(arr) {
    let maxNum = arr[0];
    let secondMaxNum = arr[1];
    for (let i = 1; i < arr.length; i++) {
        if (maxNum < arr[i]) {
            secondMaxNum = maxNum;
            maxNum = arr[i];
        }else if (maxNum > arr[i]) {
            if (arr[i] > secondMaxNum) {
                secondMaxNum = arr[i];
            }
        }
    }
    return secondMaxNum;
}

//Task 5
function palindromArray(strArray) {
    let palindromArr = [];

    for (let i = 0; i < strArray.length; i++) {
        let word = strArray[i];
        if (isPalindrom(word)) {
            palindromArr.push(word);
        }
    }
    return palindromArr;
}

function isPalindrom(word) {
    if (word.length == 0 || word.length == 1) return true;
    let charOne = word[0];
    let charTwo = word[word.length - 1];
    if (charOne != charTwo) return false;

    return isPalindrom(word.substr(1, word.length - 2));
}

//Task 6
function mostCommonNumber(arr) {
    let mostOccurrences = 0;
    let mostCommonElem = arr[0];
    let alreadyCounted = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        let currentNumOccurrences = 0;
        if(alreadyCounted.includes(currentNum))continue;
        alreadyCounted.push(currentNum);

        for (let k = i; k < arr.length; k++) {
            if (currentNum == arr[k]) {
                currentNumOccurrences++;
            }
        }
        if (currentNumOccurrences > mostOccurrences) {
            mostOccurrences = currentNumOccurrences;
            mostCommonElem = currentNum;
        }
    }
    return mostCommonElem;
}

