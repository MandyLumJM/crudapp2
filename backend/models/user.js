const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    _id: Schema.Types.ObjectId, // automatically created in mongoDB
    account_status: {
        type: String, // string, number, array
        enum: ["Pending", "Active", "Inactive"], // enum fixed the values 
        default: "Pending", // unless admin active or reject it 
      },
      name: {
        type: String,
        required: true, // if it required , default is not needed
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      is_admin: {
        type: Boolean,
        default: false,
      },
})

module.exports = mongoose.model("User", UserSchema); // creating of user Schema
