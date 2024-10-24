import React, { useState } from "react"
import axios from "axios";

const AddEmplist =()=>{
const[empid,setEmpid]=useState('')
const[name,setName]=useState('')
const[address,setAddress]=useState('')
const[experiance,setExperiance]=useState('')
const[position,setPosition]=useState('')
const[phone,setPhone]=useState('')
const[email,setEmail]=useState('')
const[salary,setSalary]=useState('')

const handleSubmit =(e)=>{
    e.preventDefault();
    axios.post('https://aiswarya2325.pythonanywhere.com/employemanagement/employees/',{empid,name,address,experiance,position,phone,email,salary})
    .then(response=>{
        console.log(response.data);
        setEmpid('');
        setName('');
        setAddress('');
        setExperiance('');
        setSalary('');
        setPhone('');
        setPosition('');
        setEmail('');
    })
    .catch(error=>console.log(error));
}

return(
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h2 className="text-info "><u>Add Employee</u></h2>
            <div>
                <label className="text-dark">Emp_id</label>
                <input type="text"
                className="form-control"
                value={empid}
                onChange={(e)=>setEmpid(e.target.value)}
                />
            </div>
            <div className="mt-2">
            <label className="text-dark">Name</label>
                <input type="text"
                className="form-control"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div className="mt-2">
            <label className="text-dark">Position</label>
                <input type="text"
                className="form-control"
                value={position}
                onChange={(e)=>setPosition(e.target.value)}
                />
            </div>
            <div className="mt-2">
            <label className="text-dark">Salary</label>
                <input type="text"
                className="form-control"
                value={salary}
                onChange={(e)=>setSalary(e.target.value)}
                />
            </div>
            <div className="mt-2">
            <label className="text-dark">Address</label>
                <input type="text"
                className="form-control"
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                />
            </div>
            <div className="mt-2">
            <label className="text-dark">Experiance</label>
                <input type="text"
                className="form-control"
                value={experiance}
                onChange={(e)=>setExperiance(e.target.value)}
                />
            </div>
            <div className="mt-2">
            <label className="text-dark">Email</label>
                <input type="text"
                className="form-control"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div className="mt-2">
            <label className="text-dark">Phone</label>
                <input type="text"
                className="form-control"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-success mt-3"> Add</button>
        </form>
    </div>
)
}
export default AddEmplist