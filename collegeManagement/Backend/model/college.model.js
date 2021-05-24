let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let studentSchema = mongoose.Schema({
    _id: Number,
    sname: String,
    email: String,
    contact: Number,
    math: Number,
    english: Number,
    science: Number,
    attendance: String,
    absent: String,
    present: String
})


let StudentModel = mongoose.model("", studentSchema, "College");

module.exports = StudentModel