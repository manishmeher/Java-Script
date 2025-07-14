let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }

// let div = document.querySelector("div");
// div.onmouseover = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);


// btn1.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
// }

// btn1.addEventListener("click", (e) => {
//     console.log("button1 was clicked");
//     console.log(e);
//     console.log(e.type);
// });

// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler1");
// });

// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler2");
// });

// const handler3 =  () => {
//     console.log("button1 was clicked - handler3");
// }

// btn1.addEventListener("click", handler3);

// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler4");
// });

// btn1.removeEventListener("click", handler3);

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "ligth";

modeBtn.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});