const square = function (number) {
    return number * number
}

// in arrow function
const squareArrow = number => {
    return number * number
}

// OR
const squareArrow2 = number => number * number

console.log(square(10));
console.log(squareArrow(20));

// example of usage
const jobs = [
    {id:1, isActive: true},
    {id:2, isActive: true},
    {id:3, isActive: false}
]

let activeJobs = jobs.filter(function(job) {
    return job.isActive
})

// using arrow
activeJobs = jobs.filter(job => job.isActive)

console.log(activeJobs);

// this keyword in arrowfunctions
const person = {
    talk() {

        // to have reference to person object in this keyword we can declare out of the function
        // OR Using Arrow Function
        // let self = this
        setTimeout(() => {
            console.log("This ", this);
        }, 1000);        
    }
}

person.talk()