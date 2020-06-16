const mongoose = require("mongoose");
const User = require("../models/user");

exports.user_register = (req, res) => {
    const temp = new User({ // temp user before storing it
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        account_status: req.body.account_status,
        email: req.body.email,
        password: req.body.password,
        is_admin: req.body.is_admin
    })
    temp
        .save()
        .then((result) =>{
            console.log(result);
            res.status(201).json({ // 201 IS CREATED
                message: "User created"
            });
        })
        .catch((err) =>{
            res.status(500).json({ // 500 INTERAL SERVER ERROR (HTTP codes)
                error: err,
                
            });
        });
};

//find ALL
exports.user_get_all = (req, res) => {
    // User.find({is_admin:true})
    User.find()
    .select("name email account_status is_admin _id")
    .exec()
    .then((docs) => {
        const response = {
            count: docs.length,
            Users: docs.map((doc =>{
                return{
                    name: doc.name,
                    email: doc.email,
                    account_status: doc.account_status,
                    is_admin: doc.is_admin,
                    _id: doc.id,
                }
            }))
        }
        res.status(200).json(response);
    })// end of then
    .catch((err) => {
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
};

// find by ID 
exports.user_get_by_id = (req, res) => {
    const id = req.params.userId; // find the id from the link & return the values
    User.findById(id)
      .select("name email account_status is_admin _id")
      .exec()
      .then((doc) => {
        console.log("From db", doc);
        if (doc) {
          res.status(200).json({
            user: doc,
          });
        } else {
          res.status(404).json({ message: "No valid entry found!" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err });
      });
};

exports.user_delete = (req, res) => {
    const id = req.params.userId;
    User.deleteOne({ _id: id })
      .exec()
      .then(() => {
        res.status(200).json({ message: "User deleted!" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err });
      });
};

// find by email
exports.user_get_by_email = (req, res) => {
    const email = req.body.email; 
    User.findOne({email:email})
      .select("name email account_status is_admin _id")
      .exec()
      .then((doc) => {
        console.log("From db", doc);
        if (doc) {
          res.status(200).json({
            user: doc,
          });
        } else {
          res.status(404).json({ message: "No valid entry found!" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err });
      });
};

exports.update_account_status = (req, res) => {
    const id = req.params.userId;
    User.updateOne(
      { _id: id },
      {
        $set: {
          account_status: req.body.account_status,
        },
      }
    )
      .exec()
      .then((result) => {
        console.log(result);
        res.status(200).json(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
};
  