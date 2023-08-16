const person = {
    name: "Mosh",
    walk: function() {},
    talk() {}
}

person.talk()
person["name"] = "John"

const targetMember = "name"
person["name"] = targetMember