// CRUD operations
let student = {
    fname:"Syed Ibrahim Ali",
    standard:"undergraduation",
    backlogs:2
}
// access key value
console.log(student.fname)

// add key value
student.rollNo = "22571A0531"
console.log(student)

// update key value
student.standard = "Graduated"
console.log(student)

// delete key value
delete student.backlogs
console.log(student);