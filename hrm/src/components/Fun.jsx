import React, { useState, useEffect } from "react";
import axios from "axios";

const Emplist = () => {
  const [Emps, setEmps] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentEmp, setcurrentEmp] = useState({ id: null, empid : null ,name:'', position:'', salary:null });

  useEffect(() => {
    axios.get('https://aiswarya2325.pythonanywhere.com/employemanagement/employees/')
      .then((response) => setEmps(response.data))
      .catch((error) => console.log(error));
  }, []);

  const editEmp = (Emp) => {
    setEditing(true);
    setcurrentEmp(Emp);
  };

  const updateEmp = (id, updatedEmp) => {
    setEditing(false);    
    axios.put(`https://aiswarya2325.pythonanywhere.com/employemanagement/employees/${id}/`, updatedEmp)
      .then((response) => {
        setEmps(Emps.map(Emp => (Emp.id === id ? response.data : Emp)));
      })
      .catch((error) => console.log(error));
  };
  const deleteEmp = (id) => {
    setEditing(false);    
    axios.delete(`https://aiswarya2325.pythonanywhere.com/employemanagement/employees/${id}/`)
      .then(() => {
        setEmps(Emps.filter(Emp => Emp.id !== id));
      })
      .catch((error) => console.log(error));
  };
  

  return (
    <div className="container mt-5">
      <h2>Employee List</h2>
      <table className="table table-bordered table-hover">
          <thead>
            <tr>
            <td>ID</td>
            <td>EMP_ID</td>
            <td>NAME</td>
            <td>POSITION</td>
            <td>SALARY</td>
            <td>EDIT</td>
            <td>DELETE</td>
            </tr>
          </thead>
        <tbody>
          {Emps.map((Emp) => (
            <tr key={Emp.id}>
              <td>{Emp.id}</td>
              <td>{Emp.empid}</td>
              <td>{Emp.name}</td>
              <td>{Emp.position}</td>
              <td>{Emp.salary}</td>
              <td>
                <button className="btn btn-warning text-light px-3" onClick={() => editEmp(Emp)}>
                  Edit
                </button>
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteEmp(Emp.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editing ? (
        <EditEmpForm currentEmp={currentEmp} updateEmp={updateEmp} />
      ) :null}
    </div>
  );
};

const EditEmpForm = ({ currentEmp, updateEmp}) => {
    const [Emp, setEmp] = useState(currentEmp);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEmp({ ...Emp, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      updateEmp(Emp.id, Emp);
    };
  
    return (
      <form className="f" onSubmit={handleSubmit}>
      <h2>Edit Employee</h2>
  {/* <div className="form-header">
    <button type="button" className="close-btn" onClick={handleClose}>
      &times;
    </button>
  </div> */}
  <div>
    <label>Employee ID</label>
    <input
      type="text"
      name="empid"
      value={Emp.empid}
      onChange={handleInputChange}
    />
  </div>
  <div>
    <label>Name</label>
    <input
      type="text"
      name="name"
      value={Emp.name}
      onChange={handleInputChange}
    />
  </div>
  <div>
    <label>Position</label>
    <input
      type="text"
      name="position"
      value={Emp.position}
      onChange={handleInputChange}
    />
  </div>
  <div>
    <label>Salary</label>
    <input
      type="number"
      name="salary"
      value={Emp.salary}
      onChange={handleInputChange}
    />
  </div>
  <button type="submit">Update Employee</button>
</form>

    );
  };  

export default Emplist;
