// console.log(students);

// // Updated students
// // 1. Add role 'student' property to each object using MAP method
// // 2. Assign to "updatedStudents" variable and log

// const updatedStudents = students.map(function(student) {
//     student.role = 'student'
//     return student
// })

// console.log(updatedStudents)


// // High scores
// // 1. filter array and return only scores >= 80
// // 2. assign to 'highScores' variable and log 

// const highScores = students.filter(function(student) {
    
//     if (student.score >= 90) {
//         return student
//     }
// })

// console.log(highScores)


// specific id
// 1. find specific id in array
// 2. assign to 'specificId' variable and log

const specificId = students.find(function(student) {
    return student.id === 2
})

console.log(specificId)




// average score
// 1. sum up all student.score values with reduce
// 2. divide by the length of the students array
// 3. assign to 'averageScore'