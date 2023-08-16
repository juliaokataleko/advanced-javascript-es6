// we use braces when we use named exports.
// import { Teacher } from "./classes/Teacher";

// when there is only single object we dont need
import Teacher from "./classes/Teacher";

// if there is a default object and others we use
// import Default, {...Others } from '.../'

// We can export more than one module in a file

// using export default we can only export a single object

let teacher = new Teacher("Jfk", "Dev")
teacher.teach()