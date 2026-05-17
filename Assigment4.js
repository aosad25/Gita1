//Task 1
function removeLastElem(arr) {
    const newArray = arr.map((str) => {
        return str.slice(0, str.length - 1);
    });
    return newArray;
}

//Task 2
function sumOfTwoMinElems(arr) {
    const sortedArray = arr.sort((a, b) => a - b);
    let minNumber = sortedArray[0];
    let secondMinNum = sortedArray[1];

    return minNumber + secondMinNum;
}

//Task 3
function sumOfAllElems(arr) {
    let sumOfElems = 0;

    arr.forEach((number) => {
        sumOfElems += number;
    });
    return sumOfElems;
}

//Task 4
function longStrings(arr) {
    let finalString = "";
   arr.forEach((string) => {
        if (string.length > 5) {
            finalString += string.toUpperCase() + "#";
        }
    });
    finalString  = finalString.slice(0, finalString.length - 1);

    return finalString;
}

//Task 5 
function getAverageGrades(arr){

const classStudentsAndTotalGrade = arr.reduce((classes ,studentName) =>{
    if(!classes[studentName.cls]){
    classes[studentName.cls] = {totalGrade: 0, amountOfstudents: 0};
    }
    classes[studentName.cls].totalGrade += studentName.grade;
    classes[studentName.cls].amountOfstudents += 1;
    
    return classes;
}, {} );


for(let cls in classStudentsAndTotalGrade){
classStudentsAndTotalGrade[cls] = classStudentsAndTotalGrade[cls].totalGrade / classStudentsAndTotalGrade[cls].amountOfstudents;
}

return classStudentsAndTotalGrade;
}


