import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
        <div className="container-fluid readBox bg-light">
        <div className="col-6 mx-auto shadow bg-white rounded px-4 ">
          <h1>Detail of User</h1>
          <div className="my-2">
            <strong>Username: {data.name}</strong>
          </div>
          <div className="my-2">
            <strong>mobileNo: {data.phone}</strong>
          </div>
          <div className="">
            <strong>Email: {data.email}</strong>
          </div>
          <div className="">
            <strong>Address: {data.address}</strong>
          </div>
          <div className="py-3">
            <Link to={`/update/${id}`} className="btn btn-warning">
              Edit
            </Link>
            <Link to="/" className="btn btn-secondary mx-4">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Read