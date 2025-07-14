// function myFunction() {
//     console.log("Welcome, Manish Kumar Meher");
//     console.log("We are learning JS");
// }

// myFunction()

// function myFunction2(msg) {
//     console.log(msg);
// }
// myFunction2("I love JS");

// function sum(a, b) {
//     console.log(a + b);
// }

// function sum(x, y) {
//     s = x + y;
//     return s;
// }
// let val = sum(4, 7);
// console.log(val);

// function sum(a, b) {
//     return a + b;
// }

// const arrowSum = (a, b) => {
//     console.log(a + b);
// }

// const arrowMul = (a, b) => {
//     console.log(a * b);
// }

// const printHello = () => {
//     console.log("hello");
// }

//QS.1 
// function countVowels (str) { 
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++
//         }
//     }
//     return count;
// }

// let val = countVowels ("manishkumarmeher");
// console.log(val);

//QS.2 
// const countVow = (str) => {
//         let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++
//         }
//     }
//     console.log(count);
// }

// function abc(a, b) {
//     console.log("hello")
// }

// function myFunc(abc) {
//     return abc;
// }

// let val = myFunc(abc);
// console.log(val);

// arr = ["odisha", "mumbai", "delhi", "puna"];

// arr.forEach(function printVal(val){
//     console.log(val);
// })

// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);
// })

//QS.1
// let nums = [1, 2, ,3 ,4];

// nums.forEach((num)=> {
//     console.log(num * num); 
// })

// let arr = [56, 78, 94, 33];

// let newArr = arr.map((val) => {
//     return val*val;
// })

// console.log(newArr);

// let arr = [1, 2, 3, 4,];
// let arr2 = [56, 74, 9, 56, 92];

// let evenArr = arr.filter((val)=> {
//     return val % 2 === 0;
// })
// console.log(evenArr);

// const outPut = arr2.reduce((prev, curr)=> {
//     return prev < curr ? prev : curr;
// })
// console.log(outPut);

//QS.1 
// let arr = [87, 78, 44, 93, 86, 95, 99, 97];

// let stuMarks = arr.filter((val)=> {
//     return val > 90;
// })
// console.log(stuMarks);

let userNum = prompt("enter a number:");
let arr  = [];
for(let i = 1; i <= userNum; i++) {
    arr[i-1] = i;
}
console.log(arr);

let sum = arr.reduce((res, curr)=> {
    return res + curr;
})
console.log("sum =", sum);

let factorial = arr.reduce((res, curr)=> {
    return res * curr;
})

console.log("factorial =", factorial);