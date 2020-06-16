const express = require("express");
const bodyParser = require("body-parser"); // convert request to something our database can understand
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const customerRoutes = require("./routes/customer");
const employeeRoutes= require("./routes/employeeRoutes");
const cors = require("cors") // allows front end and back end to connect even if it has different ports


const app = express(); //server
const PORT = process.env.PORT || 7001;

// mongo connection
mongoose.Promise = global.Promise; // there will be a success & failure message
mongoose.connect("mongodb://localhost/bankAppPhase2",{
    useNewUrlParser: true,
    useUnifiedTopology: true,

});

app.use(cors());

//body parser setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//routes
app.use("/users", userRoutes);
app.use("/customers", customerRoutes);
app.use("/employee", employeeRoutes)

app.get("/", (req,res) => 
    res.send(`Our application is running ${PORT}`)
)

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));

module.exports = app;
