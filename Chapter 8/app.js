//Prototypes in JS
const student =  {
    fullName: "Manish Kumar Meher",
    marks: 91.2,
    printMarks: function () {
        console.log("marks = ", this.marks); //student.marks
    },
};

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};

const karanArjun = {
    salary: 50000,
    calcTax() {
        console.log("tax rate is 20%");
    }
};

karanArjun.__proto__ = employee;

//Classes in JS
class TATACar {
    constructor(brand, milage) {
        // console.log("creating new object");
        this.brand = brand;
        this.milage = milage;
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    // setBrand(brand) {
    //     this.brand = brand;
    // }
}

let curvv = new TATACar("curve", 10);
console.log(curvv);
// curvv.setBrand("curve");
//new is the keyword which create obj through class
let nexon = new TATACar("nexon", 12);
console.log(nexon);
// nexon.setBrand("nexon");

//Inheritance in JS
// class Parent {
//     hello () {
//         console.log("hello");
//     }
// }

// class child extends Parent {}

// let obj = new child();

class Person {
    constructor(name) {
      this.species = "homo sapiens";
      this.name = name;
    }

    eat() {
        console.log("eat");
    }

    // sleep() {
    //     console.log("sleep");
    // }

    // work() {
    //     console.log("do nothing");
    // }
}

class Engineer extends Person {
    constructor(name) {
        super(name); //to invoke parent class constructor
        // this.branch = branch;
    }

    work() {
        super.eat();
        console.log("solve problems, build something");
    }
}

// class Doctor extends Person {
//     work() {
//         console.log("treat patients");
//     }
// }

let engObj = new Engineer("manish");

//Let's Practice
//QS.1
let DATA = "secret Information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data = ", DATA);
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        DATA = "some new value";
    }
}

let student1 = new User("manish", "manish@gmail.com");
let student2 = new User("prince", "prince@gmail.com");

let admin1 = new Admin("admin", "admin@college.com");

let a = 5;
let b = 10;
console.log("a =", a);
console.log("b =", b);
console.log("a + b =", a + b);
console.log("a + b =", a + b);
try {
    console.log("a + b =", a + c); //error
} catch (err) { //err is error object
    console.log(err); //handling error
}
console.log("a + b =", a + b);
console.log("a + b =", a + b);
console.log("a + b =", a + b);
