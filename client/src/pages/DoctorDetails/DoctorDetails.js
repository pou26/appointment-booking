import React from 'react'
import {  useLocation, useNavigate } from 'react-router-dom'
import "./DoctorDetails.css"

export default function DoctorDetails() {
    const redirect = useNavigate()
    const {state} = useLocation()
    console.log(state);
    return (
        <div className="html">
        <div className="wrap-doc">

            <section className="home">
                <div className="image">
                    <img src={state.link} alt="" className="image-doctor" />
                </div>
                <div className="content">
                    <h1 className="headings">{state.name}</h1>
                    <h3 className="description">{state.desc}</h3>
                </div>
                <div className="list-1">
                    <ul type="rounded">
                        <li>Education : MBBS, MD – OBG, DGO, FCPS –General Surgery</li>
                        <li>Specialization : Chief Gynaec Laparoscopic Surgeon, Infertility, IVF Specialist, Urogynaecologist</li>
                        <li>Experience : 25+ Years Of Experience</li>
                        <li>Location : HBR Layout</li>
                        <li><span className="details">Registration :</span> (KMC No)28563</li>
                    </ul>
                </div>
                <div className="container-about">
                    <button className="btn-1" onClick={()=>{redirect("/login",{state:{name:state.name}})}}>Book Appointment</button>
                    <div className="about-wrap">
                    <h3 className="about">About Doctor</h3>
                    <p className="desc">
                        Dr. B. Ramesh is one amongst the leading Gynaec. Laparoscopic surgeons in India with significant presence in clinical and academic circles all over India and being regularly invited as chairperson, speaker and faculty for major conferences relating to Gynaecological Laparoscopy and Infertility.

                        Dr. Ramesh also conducts live surgical workshops in these forums. These presentations are frequent, occurring 2-3 times per month across major academic centres all over India. Currently, he is the Director and Chief Endoscopic surgeon for Altius Hospital, a referral center dealing with complicated laparoscopic and hysteroscopic procedures.

                        Dr. B. Ramesh has performed over 100000 major Gynaec Laparoscopic Surgeries, a major feat in India and more than 9000 Laparoscopic Hysterectomies. Dr. B. Ramesh is the first gynaecologist to perform 3D laparoscopic surgeries in India. He is specialized in various laparoscopic sling procedures for nulliparous prolapse, Hysteroscopic surgeries for uterine septum, Tubal Cannulations, Adhesiolysis and all methods of endometrial ablation including TCRE and LASER ablation, as an alternative to hysterectomy.

                        Dr. Ramesh also deals with cases of urinary stress incontinence and laparoscopic pelvic floor repair referred by Gynaecologists and other colleagues. His special interest in Infertility treatment and IVF and has been successfully running two IVF centres in India.

                    </p>
                    </div>
                </div>
            </section>
        </div>
        </div>
    )
}
