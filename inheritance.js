// pascal name convection: CoolPerson
class Person {

    constructor(name) {
       this.name = name 
    }

    walk() {

    }

}

class Teacher extends Person {

    constructor(name, degree) {
        super(name)
        this.degree = degree
    }

    teach() {

    }
}

const teacher = new Teacher("Julian Kataleko", "Bachelor")
console.log(teacher);

