import React, {useState} from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

function Create() {
    const [values, setValue] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
      });
    
      const navigate = useNavigate();
    
      const sumbitHandler = (e) => {
        e.preventDefault();
        // Call Api
        axios
          .post("http://localhost:3000/users", values)
          .then((res) => {
            console.log(res);
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      };
  return (
    <>
      <div className="container-fluid bg-light CreateBOX">
        <div className="col-9 mx-auto shadow bg-white rounded">
          <h1>Add a user</h1>
          <form action="" className="mx-5" onSubmit={sumbitHandler}>
            <div className="my-3">
              <label htmlFor="">Username : </label>
              <input
                type="text"
                placeholder="Enter Username"
                onChange={(e) => setValue({ ...values, name: e.target.value })}
              />
            </div>
            <div className="my-3">
              <label htmlFor="">mobileNo : </label>
              <input
                type="number"
                placeholder="Enter Mobile Number"
                onChange={(e) => setValue({ ...values, phone: e.target.value })}
              />
            </div>
            <div className="my-3">
              <label htmlFor="">Email : </label>
              <input
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setValue({ ...values, email: e.target.value })}
              />
            </div>
            <div className="my-3">
              <label htmlFor="">Address : </label>
              <input
                type="text"
                placeholder="Enter Address"
                onChange={(e) => {
                  setValue({ ...values, address: e.target.value });
                }}
              />
            </div>
            <div className="py-3">
              <button className="btn btn-success">Submit</button>
              <Link to="/" className="btn btn-dark text-light mx-3">
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>  
    </>
  )
}

export default Create