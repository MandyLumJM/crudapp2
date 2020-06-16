const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerSchema = new Schema ({ // Schema 
    _id: Schema.Types.ObjectId, // automatically created in mongoDB
    balance:{
        type: Number,
        default: 0.0,
    },
    creditcard_status:{
        type: String,
        enum: ["pending", "Active", "Inactive", "None"],
        default: "None",
    },
    creditcard_limit: {
        type: Number,
        default:0.0,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref:"User", //reference of the User schema 
        required: true,
    }
});

module.exports = mongoose.model("Customer", CustomerSchema); // creating of user Schema
