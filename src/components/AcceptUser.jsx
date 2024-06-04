import axios from "axios";
import React, { useEffect, useState } from "react";
import Navi from "./Navi";

const AcceptUser = () => {
  const [data, setData] = new useState([]);
  const getData = () => {
    axios.get("http://localhost:3001/admin/viewallreq").then((response) => {
      setData(response.data.userData);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const rejectUser = (id) => {
    axios.put(`http://localhost:3001/admin/reject/${id}`).then((response) => {
      alert(response.data.status);
      getData();
    });
  };
  const acceptUser = (id) => {
    axios.put(`http://localhost:3001/admin/accept/${id}`).then((response) => {
      alert(response.data.status);
      getData();
    });
  };
  return (
    <div>
      <Navi />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table className="table">
              <thead>
                <tr>
                  <th>username</th>
                  <th>user email</th>
                  <th>status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((value, index) => {
                  return (
                    <tr key={value._id}>
                      <td>{value.logname}</td>
                      <td>{value.logemail}</td>
                      <td>{value.status ? "Accepted" : "Pending"}</td>
                      <button
                        className="btn btn-success"
                        onClick={() => {
                          acceptUser(value._id);
                        }}
                      >
                        accept
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          rejectUser(value._id);
                        }}
                      >
                        delete
                      </button>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptUser;
