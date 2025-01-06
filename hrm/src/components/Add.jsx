import React, { useState } from "react"
import axios from "axios";

const AddEmplist =()=>{
const[empid,setEmpid]=useState('')
const[name,setName]=useState('')
const[address,setAddress]=useState('')
const[experience,setExperience]=useState('')
const[position,setPosition]=useState('')
const[phone_no,setPhone_no]=useState('')
const[email,setEmail]=useState('')
const[salary,setSalary]=useState('')

const handleSubmit =(e)=>{
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/emp/',{empid,name,address,experience,salary,phone_no,position,email})
    .then(response=>{
        console.log(response.data);
        setEmpid('');
        setName('');
        setAddress('');
        setExperience('');
        setSalary('');
        setPhone_no('');
        setPosition('');
        setEmail('');
    })
    .catch(error=>console.log(error));
}

return(
    <div className="container conatiner">
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
            <label className="text-dark">Experience</label>
                <input type="text"
                className="form-control"
                value={experience}
                onChange={(e)=>setExperience(e.target.value)}
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
                value={phone_no}
                onChange={(e)=>setPhone_no(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-success mt-3 p-2"> Add employee</button>
        </form>
    </div>
)
}
export default AddEmplist