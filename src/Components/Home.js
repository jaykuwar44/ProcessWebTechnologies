import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

function Home() {
    const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(data);

  // const navigate = useNavigate();

  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to delete");
    if (confirm) {
      axios
        .delete("http://localhost:3000/users/" + id)
        .then((res) => {
          // navigate('/');
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
        <div className="container-fluid bg-light">
        <div className="">
          <h1 className="">List of Users</h1>
        </div>
        <div className="AddBtn d-flex justify-content-end">
          <Link to="/create" className="btn btn-success flex-end">
            Add +
          </Link>
        </div>

        <div className="col-sm-9 mx-auto shadow bg-white">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Username</th>
                <th>mobileNo</th>
                <th>Email</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, index) => (
                <tr key={index}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.phone}</td>
                  <td>{d.email}</td>
                  <td>{d.address}</td>
                  <td className="d-flex buttons">
                    <Link to={`/read/${d.id}`} className="btn btn-primary">
                      Read
                    </Link>
                    <Link
                      to={`/update/${d.id}`}
                      className="btn btn-warning mx-2"
                    >
                      Edit
                    </Link>
                    <Link
                      onClick={(e) => handleDelete(d.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home