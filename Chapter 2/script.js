//This code print hello world
/*This is a code that prints
hello world on our console window*/
console.log("hello world!");

// Arithmetic Operators
// let a = 5;
// let b = 2;
// console.log("a =", a, "& b =", b);
// console.log(" a + b =", a + b);
// console.log(" a - b =", a - b);
// console.log(" a * b =", a * b);
// console.log(" a / b =", a / b);
// console.log(" a % b =", a % b);
// console.log(" a ** b =", a ** b); //25

// Unary Operators
// let a = 5;
// let b = 2;
// console.log("a =", a, "& b =", b);
// a--;
// console.log(" a =", a); //4


// console.log("a--= ", a--);
// console.log("a = ", a);

// Assignment Operators
// let a = 5;
// let b = 2;

// a **= 4; // a = a ** 4
// console.log("a = " , a); // 625

// Comparison Operators
// let a = 6;
// let b = 5;

// console.log("6 >= 5" , a >= b);

//Logical Operators
// let a = 6;
// let b = 5;

// console.log("! (a === 6) = ", ! (a === 6) );

//Conditional Statements 
 
// let age = 18;

// if (age >= 18) {
//     console.log("you can vote");
// }


// if (age < 18) {
//     console.log("you CANNOT vote");
// }

// let mode = "blue";
// let color;

// if (mode === "dark") {
//     color = "black";
// } else {
//     color = "white";
// }

// if(mode === "dark") {
//    color = "white"
// };

// console.log(color);

// let age = 25;

// if(age >= 18) {
//     console.log("vote");
// } else {
//     console.log("not vote");
// }

//Odd or even
// let num = 20;

// if( num % 2 === 0) {
//     console.log(num, "is even");
// } else {
//     console.log(num, " is odd");
// }

// let mode ="dark";
// let color;

// if(mode === "dark") {
//     color = "black";
// } else if(mode === "blue") {
//     color = "blue";
// } else if(mode === "pink") {
//     color = "pink";
// } else {
//     color = "white";
// }

// console.log(color);

// if (mode === "dark") {
//     console.log(mode);
// }

//Ternary Operators
// let age = 25;

// let result = age > 18 ? "adult" : "not adult"; // simpler, compact if-else
// console.log(result);

// let name = prompt ("hello!");
// console.log(name);

// QS 1
// let num = prompt("enter a number");

// if (num % 5 === 0) {
//     console.log(num , "is a multiple of 5");
// } else {
//     console.log(num , "is NOT multiple of 5");
// }

//QS 2
let score = prompt ("enter your score (0-100)");
let grade;
if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score <= 89) {
    grade = "grade = B";
} else if (score >= 60 && score <= 69) {
    grade = "C";
} else if (score >= 50 && score <= 59) {
    grade = "D"; 
} else {
    grade = "F";
}

console.log(grade);
   