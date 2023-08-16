// var -> function
// let -> scope
// const -> const. it's value dont change

import {Teacher} from "./classes/Teacher";

function sayHello() {

    // let is just available in scope where variable is declared
    for (let index = 0; index < 5; index++) {
        console.log(index);
    }

    console.log(index);
}

sayHello()

// use let when you want to reassing a variable

// import teacher class
let teacher = new Teacher("JFK", "Developer");
teacher.teach()