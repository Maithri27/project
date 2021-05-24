let StudentModel = require("../model/college.model.js");


let storeStudentDetails = (req, res) => {

    let student = new StudentModel({
        _id: req.body.sid,
        sname: req.body.sname,
        email: req.body.email,
        contact: req.body.contact
    });

    student.save((err, result) => {
        if (!err) {
            res.send("Student Record stored successfully ")
        } else {
            res.send("Student Record didn't store " + err);
        }
    })

}

let getStudentById = (req, res) => {

    let sid = req.params.sid; //passing id through path param 
    StudentModel.find({ _id: sid }, (err, data) => {
        if (!err) {
            res.json(data); // return array 
            res.send("fingf")
        }
    })
}

let storeStudentGrade = (req, res) => {
    let _id = req.body.sid;
    let math = req.body.math;
    let english = req.body.english;
    let science = req.body.science;

    StudentModel.findByIdAndUpdate({ _id: _id }, { $set: { math: math, english: english, science: science } }, (err, result) => {
        if (!err) {
            res.send("Student Record stored successfully ")
            console.log(result);
        } else {
            res.send("Student Record didn't store " + err);
        }
    })

}

let storeAttendance = (req, res) => {
    let _id = req.body.sid;
    let attendance = req.body.attendance;

    if (attendance == "present") {
        StudentModel.findByIdAndUpdate({ _id: _id }, { $set: { attendance: attendance } }, (err, result) => {
            if (!err) {
                res.send("Student present ")
                console.log(result);
            } else {
                res.send("P Record didn't store " + err);
            }
        })
    } else if (attendance == "absent") {
        StudentModel.findByIdAndUpdate({ _id: _id }, { $set: { attendance: attendance } }, (err, result) => {
            if (!err) {
                res.send("Student absent ")
                console.log(result);
            } else {
                res.send("A Record didn't store " + err);
            }
        })

    }

}





module.exports = { storeAttendance, storeStudentDetails, getStudentById, storeStudentGrade }