//Collection of items
// let marks = [86, 76, 54, 98, 44, 69,];
// console.log(marks);
// console.log(marks.length);

// let heroes = ["ironman", "thor", "batman", "antman", "spiderman"];
// console.log(heroes);

//Array Indices
// let marks = [97, 84, 77, 65, 57,];

//Looping over an array
// let heroes = ["ironman", "thor", "batman", "antman", "spiderman"];

// for (let i = 0; i<heroes.length; i++) {
//     console.log(heroes[i]);
// }

// for (let hero of heroes) {
//     console.log(hero.toUpperCase());
// }

//QS.1
// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0

// for (let val of marks) {
//     sum += val; 
// }

// let avg = sum / marks.length
// console.log(`avg marks of the class = ${avg}`);

//QS.2 
// let items = [250, 645, 300, 900, 50];

// let i = 0;
// for (let val of items) {
// console.log(`value at index ${i} = ${val}`);
// let offer = val / 10;
// items [i] = items [i] - offer;
// console.log(`value after offer = ${items [i]}`);
// i++;
// }

// for (let i = 0; i < items.length; i++) {
//     let offer = items[i] / 10
//     items[i] -= offer;
// }
// console.log(items);

// let heroes = ["ironman", "hulk", "batman", "superman", "antman", ];

// for (let i = 0;  i < heroes.length; i++) {
//     console.log(heroes[i]);
// }

// for (let hero of heroes) {
//     console.log(hero);
// }

// let foodItems = ["potato", "apple", "litchi", "tamato"];
// console.log(foodItems);
// let deletedItems = foodItems.pop(); 
// console.log(foodItems);
// console.log("deleted", deletedItems);

// let marks = [97, 86, 54, 36];
// console.log(marks.toString());
// console.log(marks);

// let marvelHeroes = ["Thor", "spiderMan", "ironman", "antman", "Dr.strange"];
// let dcHeroes = ["superman", "batman"];
// let indianHeroes= ["saktiman", "krrish" ];
// let heroes = marvelHeroes.concat(dcHeroes, indianHeroes);
// console.log(marvelHeroes);

// // marvelHeroes.unshift("antman");

// let val = marvelHeroes.shift();
// console.log("deleted", val);
// console.log(marvelHeroes.slice());

let arr = [1, 2, 3, 4, 5, 6, 7];

// arr.splice(2, 2, 101, 102,);

//Add Element

// arr.splice(2, 0, 101);

//Delete Element
// arr.splice(3, 1);

// Replace Element
arr.splice(3, 1, 101);

//QS.3
let companies = ["Bloomber", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// console.log(companies);
// companies.shift();
// console.log(companies);
companies.splice(2, 1, "ola");
// console.log(companies);
companies.push("Amazon");
console.log(companies);





