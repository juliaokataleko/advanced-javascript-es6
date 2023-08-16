// in js. functions are objects

const person = {
    name: "Mosh",
    walk: function() {},
    talk() {
        console.log(this);
    }
}

person.talk()

const talk = person.talk.bind(person)
talk()
