//Load all required modules 
let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");

//Unable to load the static files 
app.use(express.static(process.cwd()));

//Database URL Details 
let url = "mongodb://localhost:27017/meanstack";

//load the frontend file ie angular program 

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

//middleware enable data from post method.
app.use(bodyParser.urlencoded({ extended: true })); // enable body part data  
app.use(bodyParser.json()); // json data. 
app.use(cors()); // enable cors policy 

//Database connection without warning 
const mongooseDbOption = { // to avoid warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url, mongooseDbOption); //ready to connect 

//Connect the data 
mongoose.connection

var Student = require("./router/college.router.js");
app.use("/college", Student)

// http://localhost:9090/college/storeStudentDetails
// http://localhost:9090/college/getStudentById/1
// http://localhost:9090/college/storeStudentGrade
// http://localhost:9090/college/storeAttendance


app.listen(9090, () => console.log("Server running on port number 9090"));