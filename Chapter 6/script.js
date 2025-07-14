// let button = document.getElementById("myId");
// console.dir(button);

// let headings = document.getElementsByClassName("myClass");
// console.dir(headings);
// console.log(headings);

// let paras = document.getElementsByTagName("p");
// console.dir(paras);

// let firstEl = document.querySelector("#myId");
// console.dir(firstEl);

// let allEl = document.querySelectorAll(".myClass");
// console.dir(allEl);

// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h2");

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " from ApnaCollege student";

// let divs = document.querySelectorAll(".box");
// let idx = 1;
// for(div of divs) {
//    div.innerText = `new unique value ${idx}`
//    idx++;
// }
// console.log(divs);
// divs[0].innerText = "Hi";
// divs[1].innerText = "Hey";
// divs[2].innerText = "Hello";

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newclass"));

// let div = document.querySelector("div");
// div.style.backgroundColor= "green";
// div.style.backgroundColor= "purple";
// div.style.fontSize= "26px";
// div.innerText= "Hello";
// div.style.visibility= "hidden";

// let newBtn = document.createElement("button");
// newBtn.innerText = "Clickme!";
// console.log(newBtn);

// let p = document.querySelector("p");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// p.after(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi, I am new!</i>";

// document.querySelector("body").prepend(newHeading);

// let para = document.querySelector("p");
// para.remove();
// newHeading.remove();

let button = document.createElement("button");
button.innerText = "click me!";

button.style.backgroundColor = "red";
button.style.color = "white";

document.querySelector("body").prepend(button);

//QS 2
let para = document.querySelector("p");


