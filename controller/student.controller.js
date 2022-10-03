const db = require('../models')
const Student = db.student;

exports.AddS = async (req,res) => {

const StudentData = Student.build({ firstName : "vatsal", lastName :"Patel"});

console.log(StudentData instanceof Student); 
console.log(StudentData.lastName);

await StudentData.save();
console.log('Data was saved to the database!');

console.log(StudentData.toJSON()); 
res.status(200).json(StudentData.toJSON());

}
