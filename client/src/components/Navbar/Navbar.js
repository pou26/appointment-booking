import React from 'react'
import { Link } from 'react-router-dom'

import NavDropdown from 'react-bootstrap/NavDropdown';

import "./Navbar.css"
function Navbar() {
    return (
        <div className='main-box'>
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light"> */}

            <div className='nav-link'>
                <Link className="hospital-logo" aria-current="page" to="/">
                    <img src="https://altiushospital.com/wp-content/uploads/2021/01/cropped-Altius-05-300x190.png" className="hospital-logo" alt="..." />
                </Link>
            </div>
            <div classsName="list-nav">
                <NavDropdown title="About Us" className='drop-1 ' >

                    <NavDropdown.Item href="#action/3.1" className="list-content">
                        <img src="https://altiushospital.com/wp-content/uploads/2023/02/management-1-1.svg" className="list-icon" alt="..." />
                        Management
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" className="list-content">
                        <img src="https://altiushospital.com/wp-content/uploads/2023/02/Frame-68.svg" className="list-icon" alt="..." />
                        Awards
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" className="list-content">
                        <img src="https://altiushospital.com/wp-content/uploads/2023/02/newspaper-folded-1.svg" className="list-icon" alt="..." />

                        Major News
                    </NavDropdown.Item>
                </NavDropdown>
            </div>
            <div classsName="list-nav">
                <NavDropdown title="Specialities" className='drop-1' >

                    <NavDropdown.Item href="#action/3.1" className="list-content">
                        <img src="https://altiushospital.com/wp-content/uploads/2023/02/247.svg" className="list-icon" alt="..." />
                        Cardiology
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" className="list-content">
                        <img src="https://altiushospital.com/wp-content/uploads/2023/02/Neuro-Sciences.svg" className="list-icon" alt="..." />

                        Neuro Sciences
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.3" className="list-content">
                        <img src="https://altiushospital.com/wp-content/uploads/2023/02/Nephrology.svg" className="list-icon" alt="..." />
                        Nephrology
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4" className="list-content">
                        <img src="https://altiushospital.com/wp-content/uploads/2023/02/Endocrinology.svg" className="list-icon" alt="..." />
                        Endocrinology
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5" className="list-content">
                        <img src="https://altiushospital.com/wp-content/uploads/2023/02/Cosmetology-Plastic-Surgery.svg" className="list-icon" alt="..." />
                        Cosmetology & Plastic Surgery
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.6" className="list-content">
                        <img src="https://altiushospital.com/wp-content/uploads/2023/02/stomach-1.svg" className="list-icon" alt="..." />
                        Gastroenterology
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.7" className="list-content">
                        <img src="https://altiushospital.com/wp-content/uploads/2023/02/Rheumatology.svg" className="list-icon" alt="..." />
                        Rheumatology
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.8" className="list-content">
                        <img src="https://altiushospital.com/wp-content/uploads/2023/02/Urology.svg" className="list-icon" alt="..." />
                        Urology
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.9" className="list-content">
                        <img src="https://altiushospital.com/wp-content/uploads/2023/02/ENT.svg" className="list-icon" alt="..." />
                        ENT
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.10" className="list-content">
                        <img src="https://altiushospital.com/wp-content/uploads/2023/02/Oncology.svg" className="list-icon" alt="..." />
                        Oncology
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.10" className="list-content">
                        <img src="https://altiushospital.com/wp-content/uploads/2023/02/Oncology.svg" className="list-icon" alt="..." />
                        Oncology
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.10" className="list-content">
                        <img src="https://altiushospital.com/wp-content/uploads/2023/02/dermatology-1.svg" className="list-icon" alt="..." />
                        Dermatology
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.10" className="list-content">
                        <img src="https://altiushospital.com/wp-content/uploads/2023/02/IVF.svg" className="list-icon" alt="..." />
                        Fertility treatment
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.10" className="list-content">
                        <img src="https://altiushospital.com/wp-content/uploads/2023/02/Internal-Medicine.svg" className="list-icon" alt="..." />
                        Internal Medicine
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.10" className="list-content">
                        <img src="https://altiushospital.com/wp-content/uploads/2023/02/Laparoscopy.svg" className="list-icon" alt="..." />
                        General & 3D Laparoscopic Surgery
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.10" className="list-content">
                        <img src="https://altiushospital.com/wp-content/uploads/2023/02/Orthopaedics.svg" className="list-icon" alt="..." />
                        Orthopaedics
                    </NavDropdown.Item>

                </NavDropdown>
            </div>
            <div classsName="list-nav">
                <NavDropdown title="Treatments & Services" className='drop-1' >

                    <NavDropdown.Item href="#action/3.1" className="list-content">
                    <img src="https://altiushospital.com/wp-content/uploads/2023/02/247.svg" className="list-icon" alt="..." />
                    
                        24-7 Emergency
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" className="list-content">
                    <img src="https://altiushospital.com/wp-content/uploads/2023/02/CT-Scan-X-Ray-1.svg" className="list-icon" alt="..." />
                    CT scan X-ray
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.3" className="list-content">
                    <img src="https://altiushospital.com/wp-content/uploads/2023/02/Dialysis-1.svg" className="list-icon" alt="..." />
                        Dialysis
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4" className="list-content">
                    <img src="https://altiushospital.com/wp-content/uploads/2023/02/ICU-NICU-1.svg" className="list-icon" alt="..." />
                    ICU & NICU
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5" className="list-content">
                    <img src="https://altiushospital.com/wp-content/uploads/2023/02/Interventional-Radiology-1.svg" className="list-icon" alt="..." />
                        Interventional Radiology
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.6" className="list-content">
                    <img src="https://altiushospital.com/wp-content/uploads/2023/02/Laboratory-Medicine-1.svg" className="list-icon" alt="..." />
                    Laboratory Medicine
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.7" className="list-content">
                    <img src="https://altiushospital.com/wp-content/uploads/2023/02/247.svg" className="list-icon" alt="..." />
                        Laboratory Services
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.8" className="list-content">
                    <img src="https://altiushospital.com/wp-content/uploads/2023/02/shopping-cart-2.svg" className="list-icon" alt="..." />
                    Pharmacy
                    </NavDropdown.Item>
                </NavDropdown>
            </div>
            <div classsName="list-nav">
                <NavDropdown title="Value Adds" className='drop-1' >
                    <NavDropdown.Item href="#action/3.1" className="list-content">
                    <img src="https://altiushospital.com/wp-content/uploads/2023/02/ALTIUS-CARES.svg" className="list-icon" alt="..." />
                    Altius Cares
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" className="list-content">
                    <img src="https://altiushospital.com/wp-content/uploads/2023/02/Financing-Options.svg" className="list-icon" alt="..." />
                        Financing Options
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" className="list-content">
                    <img src="https://altiushospital.com/wp-content/uploads/2023/02/Zero-cost-EMI.svg" className="list-icon" alt="..." />
                    Zero cost EMI
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.4" className="list-content">
                    <img src="https://altiushospital.com/wp-content/uploads/2023/02/FUND-RASING.svg" className="list-icon" alt="..." />
                        Fund Raising
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5" className="list-content">
                    <img src="https://altiushospital.com/wp-content/uploads/2023/02/Pain-Clinic.svg" className="list-icon" alt="..." />
                    Pain Clinic
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.6" className="list-content">
                    <img src="https://altiushospital.com/wp-content/uploads/2023/02/Home-Care-Service.svg" className="list-icon" alt="..." />
                        Home Care Services
                    </NavDropdown.Item>

                </NavDropdown>
            </div>
            <div classsName="list-nav">
                <NavDropdown title="Locations" className='drop-1' >
                    <NavDropdown.Item href="#action/3.1" className="list-content">
                    <img src="https://altiushospital.com/wp-content/uploads/2023/02/LOCATIONS.svg" className="list-icon" alt="..." />
                    HBR Layout
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" className="list-content">
                    <img src="https://altiushospital.com/wp-content/uploads/2023/02/LOCATIONS.svg" className="list-icon" alt="..." />
                        Rajajinagar
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" className="list-content">
                    <img src="https://altiushospital.com/wp-content/uploads/2023/02/LOCATIONS.svg" className="list-icon" alt="..." />
                    Rajarajeshwari Nagar
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.4" className="list-content">
                    <img src="https://altiushospital.com/wp-content/uploads/2023/02/LOCATIONS.svg" className="list-icon" alt="..." />
                        Yelahanka
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5" className="list-content">
                    <img src="https://altiushospital.com/wp-content/uploads/2023/02/LOCATIONS.svg" className="list-icon" alt="..." />
                    All Locations
                    </NavDropdown.Item>


                </NavDropdown>
            </div>
            <div className="nav-item active">
                <Link className="nav-link" href="#">Blogs <span className="sr-only"></span></Link>
            </div>
            <button className="nav-button active">
                <Link class="nav-link-button" href="#"> <span className="button-contact">Contact Us</span></Link>
            </button>
            <button className="nav-button2 active">
                <Link className="nav-link-button" href="#"><span class="button-contact">Call 8882799799 </span></Link>
            </button>

        </div>
    )
}

export default Navbar

