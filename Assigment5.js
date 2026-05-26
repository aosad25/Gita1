//Task 1
function deleteProp(obj, property) {
    delete obj[property];
    return obj;
};

//Task 2
const arr = [
    { name: "Ana", score: 50 },
    { name: "Nika", score: 80 },
    { name: "Luka", score: 70 }
];

function sortedByScore(arr) {
    const sortedArr = arr.sort((a, b) => b.score - a.score);

    const arrayWithRanks = sortedArr.map((person, index) => {
        const newObj = { ...person, rank: index + 1 };
        return newObj;
    });
    return arrayWithRanks;
}

//Task 3
function theLongestTitleObj(arr) {
    let longestTitleObj = arr[0];
    arr.forEach((item, index) => {
        if (item.title.length > longestTitleObj.title.length) {
            longestTitleObj = item;
        }
    })
    return longestTitleObj;
}

//Task 4
function avgAge(arr) {

    const totalAgeAndAmount = arr.reduce((result, person) => {
        if (!result[person.dept]) {
            result[person.dept] = {
                totalAge: 0,
                amountOfPeople: 0
            }
        }
        result[person.dept].totalAge += person.age;
        result[person.dept].amountOfPeople++;

        return result;
    }, {})

    const result = {};

    for (let dep in totalAgeAndAmount) {
        result[dep] = totalAgeAndAmount[dep].totalAge / totalAgeAndAmount[dep].amountOfPeople;
    }
    return result;
}

//Task 5
function countWords(arr) {
    let result = [];
    arr.forEach((com) => {
        const words = com.comment.split(" ");
        result = result.concat(words);
    })
    result = result.filter((string) => string != "");

    return result.length;
}


//Task 6
function grouped(arr) {

    const groupedArr = arr.reduce((result, currentPerson) => {

        if (!result[currentPerson.department]) {
            result[currentPerson.department] = [];
        }
        const obj = { name: currentPerson.name, department: currentPerson.department, salary: currentPerson.salary }
        result[currentPerson.department].push(obj);
        return result;
    }, {})

    for (let dep in groupedArr){
        groupedArr[dep].sort((a, b)=>b.salary - a.salary);
    }

    return groupedArr;
}

//Task 7
function price(arr){
    let price  = 0;
arr.forEach((product) =>{
price += (product.price * product.quantity * ((100 - product.discountPercent) / 100));
})
return price;
}

//Task 8
function arrToObj(arr){
const obj = arr.reduce((result, currentElem) => {
result[currentElem.id] = {id: currentElem.id, name: currentElem.name, age: currentElem.age}
return result;
}, {})

return obj;
}


