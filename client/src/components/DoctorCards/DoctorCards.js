// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// export default function Card() {
//   return (
//     <div>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     </div>
//   )
// }
// import React from 'react'
// import Card from 'react-bootstrap/Card';
// import "./DoctorCards.css"

// export default function DoctorCards(props) {
//   return (
//     <div className='card-wrapper'>
//     {/* {console.log(props)} */}
//     {console.log(props.data.Data)}
//     <h2 className="header">Our Top Doctors</h2>
//    <Card className="card-container"style={{ width: '30rem' }}>
//       <img src={props.data.Data.photo} className="doctor-img" alt="..." />
//       <div>
//          <h1 className="card-head">Dr. B Ramesh</h1>
//          <p className="desc">
//             Founder Medical Director
//          </p>
//          <button className="appoinment">Book Appoinment</button>
//        </div>
//      </Card>
//     </div>
//   )
// }

import React from 'react'
import Card from 'react-bootstrap/Card';
import "./DoctorCards.css"
import { useNavigate } from 'react-router-dom';

export default function DoctorCards(props) {
  const redirect = useNavigate()
  return (
    <div>
    <div>
      <h2 className="header">Our Top Doctors</h2>
    </div>
    <div className='card-wrapper'>
      
      <section>
        <Card className="card-container" style={{ width: '30rem' }}>
          <img src="https://altiushospital.com/wp-content/uploads/2022/12/Dr.-Ramesh-photograph.png" className="doctor-img" alt="..." />
          <div>
            <h1 className="card-head">Dr. B Ramesh</h1>
            <p className="desc1">
              Founder Medical Director
            </p>
            <div className="btn-appoinment">
            <button className="appoinment" onClick={()=>{redirect("/doctor" , {state:{name:"Dr. B Ramesh" , desc: " Founder Medical Director", link:"https://altiushospital.com/wp-content/uploads/2022/12/Dr.-Ramesh-photograph.png"}})}}>Book Appoinment</button>
            </div>
          </div>
        </Card>
        <Card className="card-container" style={{ width: '30rem' }}>
          <img src="https://altiushospital.com/wp-content/uploads/2022/09/dr-imran.jpg" className="doctor-img" alt="..." />
          <div>
            <h1 className="card-head">Dr. Syed Imran</h1>
            <p className="desc2">
              Head-Department of Orthopaedics,Bone & joint Surgery
            </p>
            <div className="btn-appoinment2">
            <button className="appoinment" onClick={()=>{redirect("/doctor" , {state:{name:"Dr. Syed Imran" , desc: "Head-Department of Orthopaedics,Bone & joint Surgery", link:"https://altiushospital.com/wp-content/uploads/2022/09/dr-imran.jpg"}})}}>Book Appoinment</button>
            </div>
          </div>
        </Card>
        <Card className="card-container" style={{ width: '30rem' }}>
          <img src="https://altiushospital.com/wp-content/uploads/2023/02/image_2023_02_25T07_35_34_976Z.png" className="doctor-img" alt="..." />
          <div>
            <h1 className="card-head">Dr. Dinesh M G</h1>
            <p className="desc1">
              Surgical Oncologist
            </p>
    
            <div className="btn-appoinment">
            <button className="appoinment" onClick={()=>{redirect("/doctor" , {state:{name:"Dr. Dinesh M G" , desc: "Surgical Oncologist", link:"https://altiushospital.com/wp-content/uploads/2023/02/image_2023_02_25T07_35_34_976Z.png"}})}}>Book Appoinment</button>
            </div>
          </div>
        </Card>
      </section>
    </div>
    </div>
  )
}

