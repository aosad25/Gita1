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


// Task 1
console.log(deleteProp({ name: "Ana", age: 25 }, "age"));
console.log(deleteProp({ a: 1, b: 2, c: 3 }, "b"));

// Task 2
console.log(sortedByScore([
    { name: "Ana", score: 50 },
    { name: "Nika", score: 80 },
    { name: "Luka", score: 70 }
]));

// Task 3
console.log(theLongestTitleObj([
    { title: "Up", year: 2009 },
    { title: "The Lord of the Rings", year: 2001 },
    { title: "Avatar", year: 2009 }
]));

// Task 4
console.log(avgAge([
    { name: "Ana", dept: "HR", age: 25 },
    { name: "Nika", dept: "IT", age: 30 },
    { name: "Luka", dept: "IT", age: 22 }
]));

// Task 5
console.log(countWords([
    { id: 1, comment: "Hello world" },
    { id: 2, comment: "This is great!" },
    { id: 3, comment: "" }
]));

// Task 6
console.log(grouped([
    { name: "Ana", department: "HR", salary: 2000 },
    { name: "Nika", department: "IT", salary: 5000 },
    { name: "Luka", department: "IT", salary: 3500 },
    { name: "Mariam", department: "HR", salary: 3000 }
]));

// Task 7
console.log(price([
    { title: "Laptop", price: 2000, quantity: 1, discountPercent: 10 },
    { title: "Mouse", price: 50, quantity: 2, discountPercent: 0 },
    { title: "Keyboard", price: 100, quantity: 1, discountPercent: 20 }
]));

// Task 8
console.log(arrToObj([
    { id: 1, name: "Ana", age: 25 },
    { id: 2, name: "Nika", age: 30 },
    { id: 3, name: "Luka", age: 22 }
]));

