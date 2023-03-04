import axios from 'axios';
import React, { useState } from 'react'
import {  useLocation, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import "./Login.css"
import Swal from 'sweetalert2'

export default function Login() {
  const {state} = useLocation()
  console.log(state);
  const [credentials, setcredentials] = useState({name: "",email: "", mobile: "",date:"",time:"",DrName:"" }) //without reloading the element we change the value

  const onfinishHandler=(values)=>{
    console.log(values)
  }
  const redirect = useNavigate()
  const handleSubmit = async (e) => {
    console.log("called");
    e.preventDefault();                //preventdefault is a synthatic event
    const { name,email,mobile,date,time } = credentials
    credentials.DrName = state.name
    if (email === "")
     {Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Email is required!',
    })}
      else if (name === "")
      {Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Name is required!',
      })}
      else if (mobile === "")
      {Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Phone number is required!',
      })}
      else if (date === "")
      {Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Date is required!',
      })}
      else if (time === "")
      {Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Time is required!',
      })}
      
    else {
      axios.post("http://localhost:3001/login", credentials)
        .then((res) => {

          if (res.status === 201) {
            Swal.fire({
              title: 'Appointment Booked Successfully !',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            })

            redirect("/")
          
            
          }
        })
        .catch((err) => {
          console.log(err)
          toast.error(err.response.data.message, {
            position: "top-right"
          });
        })
    }

  }
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <div className="container">
        <form onFinish={onfinishHandler}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" className="form-control" name="name" value={credentials.name} onChange={onChange} />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange} />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Mobile Number</label>
            <input type="text" className="form-control" name="mobile" value={credentials.mobile} onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Date</label>
            <input type="date" className="form-control" name="date" value={credentials.date} onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Time</label>
            <input type="time" className="form-control" name="time" value={credentials.time} onChange={onChange} />
          </div>
          {/* <Link to="/signup" className="textlink text text-danger">New user?Create your account</Link><br /> */}
          <button type="submit" className="m-3 btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  )
}

