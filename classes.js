const person = {
    name: "Mosh",
    walk() {
        console.log("Walk");
    }
}

// pascal name convection: CoolPerson
class Person {

    constructor(name) {
       this.name = name 
    }

    walk() {

    }

}

const person_model = new Person("JFK")
console.log(person_model.name);