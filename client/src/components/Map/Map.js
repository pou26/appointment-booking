// import React from "react";
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// export default function Map() {
//     const defaultProps = {
//         center: {
//           lat: 10.99835602,
//           lng: 77.01502627
//         },
//         zoom: 11
//       };
//   return (
//     <div style={{ height: '100vh', width: '100%' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent
//           lat={59.955413}
//           lng={30.337844}
//           text="My Marker"
//         />
//       </GoogleMapReact>
//     </div>
//   )
// }



import React from 'react';
import { useNavigate } from 'react-router-dom'
import "./Map.css"

export default function Map() {
    const redirect = useNavigate()

    return (
        <div>
            <div className='award'>
                <h2 className="award-header">Awards</h2>
            </div>
            <div className="mapwrap">

                {/* <div className="award-logo">
                    <img src="https://altiushospital.com/wp-content/uploads/2021/02/Aryabhata-International-Award.jpg" className="award-logo" alt="..."/>
                    <img src="https://altiushospital.com/wp-content/uploads/2021/02/Rashtriya-Rattan-Award.jpg" className="award-logo" alt="..."/>
                    <img src="https://altiushospital.com/wp-content/uploads/2021/02/Nada-Shilpi-Kempegowda-Award.jpg" className="award-logo" alt="..." />
                    <img src="https://altiushospital.com/wp-content/uploads/2021/02/J-P-Samajarathna-Award.jpg" className="award-logo" alt="..." />
                    <img src="https://altiushospital.com/wp-content/uploads/2021/02/National-Achievement-Award.jpg" className="award-logo" alt="..." />
                    <img src="https://altiushospital.com/wp-content/uploads/2021/02/DSC_0071.jpg" className="award-logo" alt="..." />


                </div> */}
                {/* <div className="row-container"> */}
                <section className="img-wrap">
                    <div className="img col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                            src="https://altiushospital.com/wp-content/uploads/2021/02/Aryabhata-International-Award.jpg"
                            className="img-container w-100 shadow-1-strong rounded mb-4"
                            alt="CT Scan & X-Ray"
                            
                        />


                        <img
                            src="https://altiushospital.com/wp-content/uploads/2021/02/Rashtriya-Rattan-Award.jpg"
                            className="img-container w-100 shadow-1-strong rounded mb-4"
                            alt="Cardiac Sciences"
                            
                        />

                    </div>

                    <div className="img col-lg-4 mb-4 mb-lg-0">
                        <img
                            src="https://altiushospital.com/wp-content/uploads/2021/02/Nada-Shilpi-Kempegowda-Award.jpg"
                            className="img-container w-100 shadow-1-strong rounded mb-4"
                            alt="Neuro Sciences"
                            
                        />


                        <img
                            src="https://altiushospital.com/wp-content/uploads/2021/02/J-P-Samajarathna-Award.jpg"
                            className="img-container w-100 shadow-1-strong rounded mb-4"
                            alt="Oncology"
                            
                        />

                    </div>

                    <div className="img col-lg-4 mb-4 mb-lg-0">
                        <img
                            src="https://altiushospital.com/wp-content/uploads/2021/02/National-Achievement-Award.jpg"
                            className="img-container w-100 shadow-1-strong rounded mb-4"
                            alt="Laparoscopy"
                            
                        />


                        <img
                            src="https://altiushospital.com/wp-content/uploads/2021/02/DSC_0071.jpg"
                            className="img-container w-100 shadow-1-strong rounded mb-4"
                            alt="Orthopaedics"
                            
                        />

                    </div>
                </section>
                {/* </div> */}
                <div className="gmap">
                    <iframe width="600px" height="400px" id="gmap_canvas" src="https://maps.google.com/maps?q=altius hospital bangalore&t=&z=11&ie=UTF8&iwloc=&output=embed" scrolling="yes" ></iframe>
                </div>
            </div>
            <div className="feedback">
                <h1>We'd Love to hear from you</h1>
            </div>
            <div className="feedback-btn">
                <button className="call-btn" onClick={()=>{redirect("/feedback")}}>Get a quick call</button>
            </div>

        </div>
    )
}
