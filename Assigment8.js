//Task 1
async function getData(URL = "https://jsonplaceholde.typicode.com", maxTries = 5) {

    for (let i = 0; i < maxTries; i++) {
        try {
            const response  =  await fetch(URL);

            if(!response.ok){
                throw new Error("Invalid URL");
            }

            const data = await response.json();


            console.log(data);
            return data;

        } catch (error) {
            if (i < maxTries - 1) {
                console.log("Attempt failed. Trying again.");
            } else {
                throw new Error("All the attempts failed. No more tries left.")
            }
        }
    }
}

//Task 2
async function getDataFromFastestSource(URLOne = "https://dummyjson.com/users", URLTwo = "https://jsonplaceholder.typicode.com/users"){
try{
const response = await Promise.race([fetch(URLOne), fetch(URLTwo)]);

const fastestData = await response.json();

console.log(fastestData);
}catch(error){
    throw new Error("Failed to get the data.");
}
}

//Task 3
async function priceMoreThanTen(URL = "https://dummyjson.com/products"){

    try{
        const response = await fetch(URL);
        if(!response.ok){
            throw new Error("Invalid URL");
        }
        const data = await response.json();
        let dataArray = data.products;

        dataArray = dataArray.reduce((result, currentProduct)=>{
            if(currentProduct.price > 10){
                result.push(currentProduct.title);
            }
            return result;
        }, [])


        console.log(dataArray);
    }catch(error){
        throw new Error("Failed to load the data.");
    }

}

//Task 4
async function getAllWebDevelopers(URL = "https://dummyjson.com/users"){
try{
const response  = await fetch(URL);
if(!response.ok){
    throw new Error("Failed to load URL.");
}
const data = await response.json();
let dataArray  = data.users;
dataArray = dataArray.reduce((result, currentUser)=>{
    if(currentUser.company.title.toLowerCase() == "web developer"){
        const curUser = {
            name: currentUser.firstName,
            surname: currentUser.lastName,
            city: currentUser.address.city,
            email: currentUser.email,
            number: currentUser.phone
        }
        result.push(curUser);
    }

    return result;
}, [])

console.log(dataArray);

}catch(error){
    throw new Error("Failed to load data.");
}
}

//Task 5
async function getAllDataTogether(URLOne = "https://dummyjson.com/recipes", URLTwo = "https://dummyjson.com/comments", URLThree = "https://dummyjson.com/todos", URLFour = "https://dummyjson.com/quotes"){

    try{
        const responses = await Promise.all([fetch(URLOne), fetch(URLTwo), fetch(URLThree), fetch(URLFour)]);
       
        const data  = await Promise.all(responses.map(response=>response.json()))

        console.log(data);
    }catch(error){
        throw new Error("Failed to load data.");
    }
}

