

import React from 'react'
import Card from 'react-bootstrap/Card';
import "./DoctorCards.css"
import { useNavigate } from 'react-router-dom';

export default function DoctorCards(props) {
  const redirect = useNavigate()
  return (
    <div className="doctor-card-wrapper">
    <div>
      <h2 className="header">Our Top Doctors</h2>
    </div>
    <div className='card-wrapper'>
      
      <section>
        <Card className="card-container" >
          <img src="https://altiushospital.com/wp-content/uploads/2022/12/Dr.-Ramesh-photograph.png" className="doctor-img" alt="..." />
          <div className="card-content-desc">
            <h1 className="card-head">Dr. B Ramesh</h1>
            <p className="desc1">
              Founder Medical Director
            </p>
            <div className="btn-appoinment">
            <button className="appoinment" onClick={()=>{redirect("/doctor" , {state:{name:"Dr. B Ramesh" , desc: " Founder Medical Director", link:"https://altiushospital.com/wp-content/uploads/2022/12/Dr.-Ramesh-photograph.png"}})}}>Book Appointment</button>
            </div>
          </div>
        </Card>
        <div className="card-gap">
        <Card className="card-container" >
          <img src="https://altiushospital.com/wp-content/uploads/2022/09/dr-imran.jpg" className="doctor-img" alt="..." style={{height:"320px"}}/>
          <div className="card-content-desc">
            <h1 className="card-head">Dr. Syed Imran</h1>
            <p className="desc2">
              Head-Department of Orthopaedics
            </p>
            <div className="btn-appoinment">
            <button className="appoinment" onClick={()=>{redirect("/doctor" , {state:{name:"Dr. Syed Imran" , desc: "Head-Department of Orthopaedics,Bone & joint Surgery", link:"https://altiushospital.com/wp-content/uploads/2022/09/dr-imran.jpg"}})}}>Book Appointment</button>
            </div>
          </div>
        </Card>
        </div>
        <Card className="card-container" >
          <img src="https://altiushospital.com/wp-content/uploads/2023/02/image_2023_02_25T07_35_34_976Z.png" className="doctor-img" alt="..." style={{height:"320px"}} />
          <div className="card-content-desc">
            <h1 className="card-head">Dr. Dinesh M G</h1>
            <p className="desc1">
              Surgical Oncologist
            </p>
    
            <div className="btn-appoinment2">
            <button className="appoinment" onClick={()=>{redirect("/doctor" , {state:{name:"Dr. Dinesh M G" , desc: "Surgical Oncologist", link:"https://altiushospital.com/wp-content/uploads/2023/02/image_2023_02_25T07_35_34_976Z.png"}})}}>Book Appointment</button>
            </div>
          </div>
        </Card>
      </section>
    </div>
    </div>
  )
}

