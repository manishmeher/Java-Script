// console.log("iphone");
// console.log("iphone");
// console.log("iphone");
// console.log("iphone");
// console.log("iphone");

//for loop
// for (let i = 1; i <= 5; i ++) {
//     console.log("i = " , i); //5 execute
// }
// console.log("loop has ended");

// Calculate sum of 1 to 100
// let sum = 0;
// let n = 100;
// for(let i = 1; i <= n; i++) {
//     sum = sum + i; // sum = 15
// }
// console.log("sum = " , sum);
// console.log("loop has ended"); 

//while loop
// let i = 1
//  while (i <= 10) {
//    console.log("true");
//    i++;
//  }

//do-while loop
// let i = 1;
// do {
// console.log("i" , i); 
//     i ++
// } while (i <= 5);

//for-of loop
// let str = "Manish";

// let size = 0
// for (let val of str) {
//     console.log("val =" , val);
//     size++
// }
// console.log("string size =" , size);

//for-in loop
//  let student = {
//     name: "Manish",
//     age: 23,
//     cgpa: 9.1,
//     isPass: "true",
//  };

//  for (let key in student) {
//     console.log("key =" , key , "value =", student[key]);
//  }

// QS 1

// for (let num = 0; num <= 100; num++) {
//     if (num % 2 === 0) {
//         //Even Numbers
//         console.log("num =", num);
//     }
// }

//QS 2
// let gameNum = 25;
// let userNum = prompt("guss a number");

// while (userNum != gameNum) {
//     userNum = prompt("please try again");
// }

// console.log("congratulation you has enter the right number");

//strings
// let str = "Manish";
// let str2 = "Meher"

// console.log(str [4]);

//Template Literals
// let specialString = `This is a template literal ${1+2+3}`;
// console.log(specialString);

// let obj = {
//     item: "pan",
//     price: 10,
// };

// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// console.log("the cost of", obj.item , "is", obj.price , "rupees");

// console.log("Manish\nMeher");

// let str= "Manish\tMeher";//12
// console.log(str.length);

//String Methods 
// let str = "Manish Kumar Meher";
// str = str.toUpperCase();
// console.log(str);

// let str2 = "Manish Kumar Meher";
// str2 = str.toLowerCase();
// console.log(str2);

// let str = "       Manish Kumar Meher    ";
// console.log(str.trim());

// let str = "01234567";
// console.log(str.slice(1,6));

// let str2 = "hello";
// console.log(str2.slice(1));

// let str1 = "Manish";
// let str2 = "Meher";

// let res = str1.concat(str2);
// // let res = "my name is" + str1 + str2;
// console.log(res);

// let str = "hello";
// console.log(str.replace("lo", "p"));

let str = "ILoveJS";
console.log(str.charAt(0));

//QS.1
let input = prompt ("Enter Your Full Name");
username = "@".concat(input) + input.length; 

console.log(username);