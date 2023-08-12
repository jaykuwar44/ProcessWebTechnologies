import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';


function Update() {
      // const [data, setData] = useState([]);
  const { id } = useParams();

  const [values, setValue] = useState({
    name: "",
    phone: "",
    email: "",
    address: ""
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/users" + id)
      .then((res) => setValue(res.data))
      // .then((res) => setValue({...values, name: res.data.name, phone: res.data.phone, email: res.data.email, address: res.data.address}))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/users"+id, values)
      .then((res) => {
        // console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
        <div className="container-fluid updateBox bg-light">
        <div className="col-9 mx-auto shadow bg-white">
          <h1>Update a User</h1>
          <form action="" className="mx-5" onSubmit={handleUpdate}>
            <div className="my-3">
              <label htmlFor="">Username : </label>
              <input
                type="text"
                placeholder="Enter Username"
                value={values.name}
                onChange={(e) => {
                  setValue({ ...values, name: e.target.value });
                }}
              />
            </div>
            <div className="my-3">
              <label htmlFor="">mobileNo : </label>
              <input
                type="number"
                placeholder="Enter Mobile Number"
                value={values.phone}
                onChange={(e) => setValue({ ...values, phone: e.target.value })}
              />
            </div>
            <div className="my-3">
              <label htmlFor="">Email : </label>
              <input
                type="email"
                placeholder="Enter Email"
                value={values.email}
                onChange={(e) => setValue({ ...values, email: e.target.value })}
              />
            </div>
            
            <div className="my-3">
              <label htmlFor="">Address : </label>
              <input
                type="text"
                placeholder="Enter Address"
                value={values.address}
                onChange={(e) => {
                  setValue({ ...values, address: e.target.value });
                }}
              />
            </div>
            <div className="py-3">
              <button className="btn btn-success">Update</button>
              <Link to="/" className="btn btn-dark text-light mx-3">
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Update