const mongoose = require("mongoose");
const Employee = require("../models/employeeModel");

exports.create_employee = (req, res) => {
  const temp = new Employee({
    // temp user before storing it
    _id: new mongoose.Types.ObjectId(),
    employeeId: req.body.employeeId,
    name: req.body.name,
    email: req.body.email,
    joinDate: req.body.joinDate,
  });
  temp
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        // 201 IS CREATED
        message: "Employee created",
      });
    })
    .catch((err) => {
      res.status(500).json({
        // 500 INTERAL SERVER ERROR (HTTP codes)
        error: err,
      });
    });
};

//find ALL
exports.employee_get_all = (req, res) => {
  Employee.find()
    .select("employeeId name email joinDate _id")
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        Employee: docs.map((doc) => {
          return {
            _id: doc.id,
            employeeId: doc.employeeId,
            name: doc.name,
            email: doc.email,
            joinDate: doc.joinDate,
            
          };
        }),
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.employee_delete = (req, res) => {
  const id = req.body.employeeId;
      Employee.deleteOne({employeeId: id})
        .exec()
        .then(() => {
          res.status(200).json({ message: "Employee deleted!" });
        }) // end of then
        .catch((err) => {
          console.log(err);
          res.status(500).json({ error: err });
        });
};

exports.update_employee_details = (req, res) => {
  const id = req.body.employeeId;
      Employee.updateOne(
        { employeeId: id },
        {
          $set: {
            name:req.body.name,
            email: req.body.email,
            joinDate: req.body.joinDate,
          },
        }
      )
        .exec()
        .then((result) => {
          console.log(result);
          if(result){
                res.status(200).json({
            message: "Employee updated",
          });
          }
          else {
            res.status(404).json({ message: "No valid entry found!" });
          }
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            error: err,
          });
        });
};
