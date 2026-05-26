const arr = []

arr.push("apple");
arr.push("grape");
arr.push("peach");
arr.push("pear");
arr.push("berry");

//Task 1
function modifiedArray(arr) {
    arr.push(1);
    arr.push(2);
    arr.pop();
    return arr;
}

const numbers = [1, 2, 3, 4, 5];
console.log(modifiedArray(numbers));

//Task 2
function shiftOperations(arr) {
    arr.unshift("string one");
    arr.unshift("string two");
    arr.shift();
    return arr;
}

const strings = ["bob", "Stacy", "Ryan", "Goat", "King"];
console.log(shiftOperations(strings));

//Task 3
function lastElem(arr) {
   let len = arr.length;
   let lastElem = arr[arr.length - 1];
   const result = [];
   result.push(len);
   result.push(lastElem);
   return result;
}

//Task 4
function includesElem(arr, elem){
    return arr.includes(elem);
}


//Task 5
function indexOfElem(arr, elem){
return arr.indexOf(elem);
}

//Task 6
function doubleNumbers(arr){
    const newArr = arr.map((num)=>{
        return num * 2;
    });
    return newArr;
}

//task 7
function celsiusToFahrenheit(tempArr){
const newArr = arr.map((temp) =>{
return (temp*1.8 + 32);
});
return newArr;
}

//Task 8
function addPositions(arr){
const newArr = arr.map((string)=>{
return (arr.indexOf(string) + ". " + string);
});
return newArr;
}

//Task 9
function justTheNames(arr){
    const newArr = arr.map((obj)=>{
      return obj.name;  
    });
    return newArr;
}

//Task 10
function evenNumbers(arr){
const newArr = arr.filter((num)=>{
if(num%2==0)return num;
});
return newArr;
}

//Task 11
function longWords(arr){
    const newArr = arr.filter((word)=>{
if(word.length>5)return word;
    });
    return newArr;
}

//Task 12
function positiveNumbers(arr){
    const newArr = arr.filter((num) =>{
        if(num>0)return num;
    });
    return newArr;
}

//Task 13
function studentArr(arr){
    const passingGradeStudentsArr = arr.filter((obj)=>{
        if(obj.score>50)return obj.name;
    });
    return passingGradeStudentsArr
}

//Task 14 
function total(arr){
let sum = arr.reduce((sum, currentValue)=>{
return sum+=currentValue;
}, 0);
return sum;
}

//Task 15
function maxNum(arr){
let max = arr.reduce((max, currentNum)=>{

});

}



















