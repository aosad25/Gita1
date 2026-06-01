//Task 1
function debounce(func, ms) {
    let timer;

    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, ms)
    }
}

function logMouseCoordinates(event) {
    let X = event.clientX;
    let Y = event.clientY;

    console.log("Coordinates of the mouse: (" + X + ", " + Y + ")");
}

const debouncedLog = debounce(logMouseCoordinates, 500);

document.addEventListener("mousemove", debouncedLog);


//Task 2
const button = document.getElementById("quoteBtn");
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");


button.addEventListener("click", async () => {

    try {
        const response = await fetch("https://dummyjson.com/quotes");
        if (!response.ok) {
            throw new Error("Invalid URL");
        }
        const data = await response.json();
        const dataArr = data.quotes;

        let randomIndex = Math.floor(Math.random() * dataArr.length);
        let randomQuote = dataArr[randomIndex];

        quoteElement.textContent = randomQuote.quote;
        authorElement.textContent = "Author: " + randomQuote.author;

    } catch (error) {
        console.log(error);
    }
})

//Task 3
async function showUsersByPage(page = 1) {
    const limitOnOnePage = 30;
    const skip = (page - 1) * limitOnOnePage;

    try {
        const response = await fetch(`https://dummyjson.com/users?limit=${limitOnOnePage}&skip=${skip}`);
        if (!response.ok) {
            throw new Error("Invalid URL");
        }
        const data = await response.json();
        const amountOfUsers = data.total;

        const amountOfPages = Math.ceil(amountOfUsers / limitOnOnePage);
         console.log(`Page ${page} of ${amountOfPages}`);
        console.log(data.users);

    } catch (error) {
        console.log(error);
    }
}

showUsersByPage(1);


//Task 4
const inputElement = document.getElementById('carIdInput');
const buttonElement = document.getElementById('searchButton');
const infoBox = document.getElementById('carInfoBox');

buttonElement.addEventListener('click', async () => {
    const carId = inputElement.value;

    if (!carId) {
        alert("Please enter a Car ID!");
        return; 
    }

    const url = `https://myfakeapi.com/api/cars/${carId}`;

    try {
        const response = await fetch(url);

      

        const data = await response.json();


        if (data.error || !data.Car) {
            alert("Car not found. Please enter a valid ID.");
            infoBox.innerHTML = ""; 
            return; 
        }

        infoBox.innerHTML = `
            <h3>Car Details:</h3>
            <p><b>Brand:</b> ${data.Car.car}</p>
            <p><b>Model:</b> ${data.Car.car_model}</p>
            <p><b>Year:</b> ${data.Car.car_model_year}</p>
            <p><b>Price:</b> ${data.Car.price}</p>
        `;

    } catch (error) {
        console.error(error);
    }
});


