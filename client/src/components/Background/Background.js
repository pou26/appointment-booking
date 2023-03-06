import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

import "./Background.css"

export default function Background() {
    return (
        <div className="card-wrap-background">
       
        <div className="card">
        <div className="form-search" style={{width:"10px"}}>
            <form className="form-srch ">
                <input className="form-control-b" type="search" placeholder="Search" aria-label="Search"  />
                <button className="btn-search1" type="submit"><SearchIcon classsName="icon-search" /></button>
            </form>
            </div>

        
                
                <img src="https://altiushospital.com/wp-content/uploads/2022/12/HBR-5.png" className="hospital-img" alt="..." />

                <div className="back-wrapper">
                    <h1>HBR Layout- Bangalore</h1>
                    <p className="background-text">
                        Altius Hospitals is a world-class chain of multi-specialty hospitals operating across Bangalore that aims to treat people, not diseases.  Altius Hospital at HBR layout combines the best medical professionals along with cutting-edge technology in providing the best medical care. Over the last 18+ years, it has evolved as a leader in the healthcare system because of its integrated model that combines all services under one roof. From Cardiology to 24/7 emergency care, dialysis treatment, and outpatient treatments, we offer all.  Altius Hospitals has a network of highly skilled and experienced medical professionals in Bangalore who provide compassionate care while demonstrating exceptional knowledge.  The hospitals are well equipped with the latest diagnostic labs, facilities, and modern technologies to provide the best medical services.


                    </p>
                </div>

        </div>
        </div>
    )
}
