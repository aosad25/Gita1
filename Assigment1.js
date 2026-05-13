//Task 1
function celsiusToFahrenheit(celsius) {
    return (celsius * 1.8 + 32);
}

//Task 2
function reverse(str) {
    let reversed = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

//Task 3
function countWords(sentence) {
    let words = sentence.split(" ");
    return words.length;
}

//Task 4
function countVowels(word) {
    let vowelCount = 0;
    for (let i = 0; i < word.length; i++) {
        let char = word[i].toLowerCase();
        if (char === 'a' || char === 'e' || char === 'o' ||
            char === 'i' || char === 'u') {
            vowelCount++;
        }
    }
    return vowelCount;
}

//Task 5
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

//Task 6
function sumOfEvenNumbers(num) {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

//Task 7
function grade(studentScore) {
    switch (true) {
        case (studentScore >= 91):
            return 'A';

        case (studentScore < 91 && studentScore >= 81):
            return 'B';

        case (studentScore < 81 && studentScore >= 71):
            return 'C';

        case (studentScore < 71 && studentScore >= 61):
            return 'D';

        case (studentScore < 61 && studentScore >= 51):
            return 'E';
        case (studentScore < 51):
            return 'F';
    }
}

//Task 8
function validPassword(password) {
    if (password.length < 9) return false;
    if (!containsNumber(password)) return false;
    if (!containsCapitalLetter(password)) return false;
    return true;
}

function isADigit(char) {
    for (let i = 0; i < 10; i++) {
        if (char == i) return true;
    }
    return false;
}
function containsNumber(password) {
    for (let i = 0; i < password.length; i++) {
        let ch = password[i];
        if (isADigit(ch)) return true;
    }
    return false;
}

function isACapitalLetter(char) {
    return (char >= 'A' && char <= 'Z');
}

function containsCapitalLetter(password) {
    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (isACapitalLetter(char)) return true;
    }
    return false;
}




