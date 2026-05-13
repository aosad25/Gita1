// let nums = [];
// for(let i=1; i<=10; i++) {
//     nums.push(i);
// }
// console.log(nums);

// let nums = [20, 15, 43, 3, 6, 67];

// let maximumNumber = 0;

// for(let i=0; i<nums.length; i++) {
//     if(nums[i] > maximumNumber){
//         maximumNumber = nums[i];
//     }
// }
// console.log(maximumNumber);


// const arr = [1, "2, false, 3, {}, [1,2], 'test, 4"];
// const numsArray = [];

// for(let i=0; i<arr.length; i++) {
// let element = arr[i]
// if(typeof(element == "number")){
//     numsArray.push(element);
// }   
// }

// const nums = [21, 12, 21, 44, 34, 12, 65, 89, 9, 24];
// const uqnique = [];

// for(let i=0; i<nums.length; i++){
// if(!uqnique.includes(nums[i])){
// uqnique.push(nums[i]);
// }
// }


// const nums = [1, 3, 5,2, 112, 22, 42,35, 89];
// const evens = [];
// const odds = [];

// for(let i=0; i<nums.length; i++){
// if(nums[i]%2==0){
//     evens.push(nums[i]);
// }else{
//    odds.push(nums[i]); 
// }
// }

// const nums = [1,2,3,4,5,6,7,8,9,10, -11, -12, -13, -14, -15];
// let countPositive = 0;
// let sumNegative = 0;
// for(let i=0; i<nums.length; i++){
// if(nums[i]>0)countPositive+=1;
// if(nums[i]<0)negativeSum -= nums[i];
// }

// const arr = [];
// arr.push(countPositive);
// arr.push(negative);


const nums = [12, 21, 12, 43, 55, 68, 92, 55, 2 ];
const unique = [];
let sum = 0;

for(let i=0; i<nums.length; i++){
if(!unique.includes(nums[i])){
    unique.push(nums[i]);
    sum+=nums[i];
}
}

console.log(unique);
console.log(sum);