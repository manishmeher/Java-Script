// console.log("one");
// console.log("two");
// console.log("three");

// function hello() {
//     console.log("hello");
// }
   
// setTimeout(hello, 4000);//timeout ; 2s = 2000ms 
// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello");
// }, 4000);//timeout

// console.log("three");
// console.log("four");

// function sum(a, b) {
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }

// calculator (1, 2, sum);

// const hello = (() => {
//     console.log("hello");
// })

// setTimeout(hello, 3000);

//nesting

// let age = 19;
// if (age >= 18) {
//     if(age >= 60) {
//         console.log("senior");
//     } else {
//         console.log("middle");
//     } 
// } else {
//     console.log("child");
// }


// promises
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("success");
//     reject("some error occurred");
// });



// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//       console.log("I am a promise");
//        resolve("sucess");
//     // reject("network error");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//     console.log("rejected", err);
// });



// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     });
// }


// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     });
// }

// console.log("fetching data1 ....");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     // console.log(res);
//     console.log("fetching data2 ....");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         // console.log(res);
//     });
// })



// async function hello() {
//     console.log("hello");
// }

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200 /*200 represent a sucessfull call*/);
//         }, 2000);
//     });
// }

// async function getWeatherData() {
//     await api(); //1st
//     await api(); //2nd
// }



function getData(dataId, /*getNextData*/) {
    return new Promise((resolve, reject) => {
            //2s
      setTimeout(() => {
        console.log("data", dataId);
        resolve("sucess");
       /* if(gaetNextDat) {
            getNextData();
        }*/
      }, 2000);
    });
    
}

//Async-await

async function getAllData() {
    console.log("getting data1.... ");
    await getData(1);
    console.log("getting data2.... ");
    await getData(2);
    console.log("getting data3.... ");
    await getData(3);
}

(async function () {
    console.log("getting data1.... ");
    await getData(1);
    console.log("getting data2.... ");
    await getData(2);
    console.log("getting data3.... ");
    await getData(3);
}) ();



//Promise chain

// console.log("getting data1 ....");
// getData(1)
// .then((res) => {
//     console.log("getting data2 ....");
//     return getData(2);
// })
// .then((res) => {
//     console.log("getting data3 ....");
//     return getData(3);
// })
// .then((res) => {
//     console.log(res);
// })



// Callback hell
// getData(1, () => {
//     console.log("getting data2 ....");
//     getData(2, () => {
//         console.log("getting data3 ....");
//         getData(3, () => {
//             console.log("getting data4 ....");
//             getData(4);
//         })
//     })
// });
