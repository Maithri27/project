let express = require("express");
let router = express.Router();
let StudentController = require("../controller/college.controller.js");

router.post("/storeStudentDetails", StudentController.storeStudentDetails);
router.get("/getStudentById/:sid", StudentController.getStudentById);
router.post("/storeStudentGrade", StudentController.storeStudentGrade);
router.post("/storeAttendance", StudentController.storeAttendance);
module.exports = router;