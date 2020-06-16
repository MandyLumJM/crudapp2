const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema ({ // Schema 
    _id: Schema.Types.ObjectId, // automatically created in mongoDB
    employeeId: {
        type:Number,
        required: true,
    },

    name:{
        type: String,
        required:true,
    },
    
    email: {
        type: String,
        required: true,
    },

    joinDate: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("employeeModel", EmployeeSchema); // creating of user Schema

