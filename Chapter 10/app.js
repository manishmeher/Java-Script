const URL ="https://cat-fact.herokuapp.com/facts";
const factpara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

//Async-await
const getFacts = async () => {
    console.log("getting data....");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    factpara.innerText = data[2].text;
}


//Promises chain
// function getFacts() {
//     fetch(URL)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         factpara.innerText = data[2].text;
//     });
// }

btn.addEventListener("click", getFacts);