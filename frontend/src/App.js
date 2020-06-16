import React, { useState } from "react";
import axios from "axios";
// import { Button, Typography, AppBar } from "@material-ui/core/";

function App() {
  const [employeeId, setemployeeId] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [joinDate, setJoinDate] = useState("");

  const handleEmployeeId = (e) => {
    setemployeeId(e.target.value);
  };

  const handleName = (e) => {
    setname(e.target.value);
  };

  const handleEmail = (e) => {
    setemail(e.target.value);
  };

  const handleJoinDate = (e) => {
    setJoinDate(e.target.value);
  };

  const addEmployee = () => {
    axios
      .post("http://localhost:7001/employee/create", {
        employeeId: employeeId,
        name: name,
        email: email,
        joinDate: joinDate,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const getEmployee = () => {
    axios
      .get("http://localhost:7001/employee/display")
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  const updateEmployee = () => {
    axios
      .patch("http://localhost:7001/employee/update",{
        employeeId: employeeId,
        name: name,
        email: email,
        joinDate: joinDate,
      })
     
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  const deleteEmployee = () => {
    axios
      .delete("http://localhost:7001/employee/delete",{
        employeeId: employeeId,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }; //commmmmmeeettt

  return (
          <div>
            <input type="text" placeholder="id" onChange={handleEmployeeId}/>
            <input type="text" placeholder="name" onChange={handleName}/>
            <input type="text" placeholder="email" onChange={handleEmail}/>
            <input type="text" placeholder="Join Date" onChange={handleJoinDate}/>
            <button onClick={addEmployee}>Add</button>
            <p>
            <button onClick={getEmployee}>Retrieve</button>
            </p>

            <p>
            {/* <input type="text" placeholder="id" onChange={handleEmployeeId}/>
            <input type="text" placeholder="name" onChange={handleName}/>
            <input type="text" placeholder="update email" onChange={handleEmail}/> */}
            <button onClick={updateEmployee}>Update</button>
            </p>
          

            <p>
            {/* <input type="text" placeholder="id" onChange={handleEmployeeId}/> */}
            <button onClick={deleteEmployee}>Delete</button>
            </p>
       
          </div>
        )

}
export default App;


// function App(){

//     const [name, setname] = useState('');
//     const [email, setemail] = useState('');
//     const [password, setpassword] = useState('');

//     const handleName = e =>{
//       setname(e.target.value);
//     }

//     const handleEmail = e =>{
//       setemail(e.target.value);
//     }

//     const handlePassword = e =>{
//       setpassword(e.target.value);
//     }

//     const registeruser = () =>{
//       axios.post("http://localhost:7001/users/register",{
//         name: name,
//         email: email,
//         password: password
//       })
//       .then(response => console.log(response))
//       .catch(error => console.log(error))
//     }

//     const getUsers = () => {
//       axios.get("http://localhost:7001/users/displayUser")
//       .then(response => console.log(response.data))
//       .catch(error => console.log(error))

//       // fetch method
//       // var myHeaders = new Headers();
//       // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

//       // var urlencoded = new URLSearchParams();
//       // urlencoded.append("userId", "5edf4b5c57c02310b8c019d6");

//       // var requestOptions = {
//       // method: 'GET',
//       // headers: myHeaders,
//       // redirect: 'follow'
//       // };

//       // fetch("http://localhost:7001/users/displayUser", requestOptions)
//       // .then(response => response.text())
//       // .then(result => console.log(result))
//       // .catch(error => console.log('error', error));
//     };

//     return (
//       <div>
//         <input type="text" placeholder="name" onChange={handleName}/>
//         <input type="text" placeholder="email" onChange={handleEmail}/>
//         <input type="text" placeholder="password" onChange={handlePassword}/>
//         <button onClick={registeruser}>Submit</button>
//         <button onClick={getUsers}>Retrieve</button>
//       </div>
//     )
//   }

