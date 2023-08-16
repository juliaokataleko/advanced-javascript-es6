import Person from "./Person"

// We can export more than one module in a file

// using export default we can only export a single object

export default class Teacher extends Person {

    constructor(name, degree) {
        super(name)
        this.degree = degree
    }

    teach() {

    }
}