//Task 1
/*
პირველ რიგში დაილოგება ჯერ 1 და მერე 5,
შემდეგ დაილოგება 4, რადგან promise-ს უფრო მეტი 
პრიორიტეტი ენიჭება ვიდრე setTimeout-ს.
ბოლოს დაილოგება ჯერ 3 და მერე 2.
თანმიმდევრობა: 1, 5, 4, 3, 2.
*/

//Task 2
/*
პირველ რიგში დაილოგება ჯერ ერთი და მერე 5
შემდეგ დაილოგება 3, რადგან promise-ს უფრო მეტი პრიორიტეტი
აქვს ვიდრე setTimeout-ს. შემდეგში დაილოგება ის setTimeout რომლის გამოძახებაც
უფრო ადრე მოხდა. ანუ ჯერ დაილოგება ორი და მხოლოდ მას შემდეგ დაილოგება 4.
თანმიმდევრობა: 1, 5, 3, 2, 4.
*/

//Task 3
function sleep(ms) {
    const promise = new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
    return promise;
}

//Task 4
function guessOnRandom(num) {

const interval = setInterval(()=>{
    const randomNum = Math.floor((Math.random()* 20) + 1);
    console.log(randomNum);

    if(randomNum == num){
        clearInterval(interval);
    }
}, 1000)
}

//Task 5
function logNum(number, ms){
    number  = Math.floor(number);
   
    const interval = setInterval(() => {
    console.log(number);
    if(number === 0){
        clearInterval(interval);
        return;
    }

    if(number>0){
        number--;
    }else{
        number++
    }
    }, ms);
}