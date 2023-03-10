
import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom'
import "./Footer.css"

export default function Footer() {
  const redirect = useNavigate()
  return (
    <div className='footer'>

      <div className="footer-content text-center text-lg-start text-muted">

        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>



          <div>
            <Link to ="https://www.facebook.com/altiushospitals/"><button className='logo-social' style={{ backgroundColor: '#0082ca' }}><FacebookOutlinedIcon /></button></Link>      <Link to ="https://www.instagram.com/altiushospitals/"><button className='logo-social' style={{ backgroundColor: '#ac2bac' }}><InstagramIcon /></button></Link>                  <Link to ="https://www.youtube.com/@altiushospitals"><button className='logo-social'  style={{ backgroundColor: '#dd4b39' }}><YouTubeIcon /></button></Link>               <Link to ="https://www.linkedin.com/company/altius-hospitals/"><button className='logo-social' style={{ backgroundColor: '#55acee' }}><LinkedInIcon /></button></Link>           <Link to ="https://twitter.com/altiushospitals"><button className='logo-social' style={{ backgroundColor: '#333333' }}><TwitterIcon /></button></Link>
          </div>

        </section>

        <section className="">
          <div className="container-1 text-center text-md-start mt-5">

            <div className="row mt-3">

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <div>
                    <img src="https://altiushospital.com/wp-content/uploads/2021/01/cropped-Altius-05-300x190.png" className="hospital-logo" alt="..." />
                </div>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className='footer-header text-uppercase fw-bold mb-4'>Head Office</h6>
                <p>
                  # 6/63, 59th Cross, 4th Block, Rajajinagar Entrance, Opp. MEI Polytechnic, Near Ram Mandir, Bengaluru - 560 010

                </p>
                <p>
                  +91-8882799799
                </p>
                <p>
                  COVID - 19 FREE
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                   <h6 className='footer-header text-uppercase fw-bold mb-4'>Useful links</h6>
                 <p>
                   <Link href='#!' className='text-reset'>
                     Emergency
                   </Link>
                 </p>
                 <p>
                   <Link href='#!' className='text-reset'>
                     Ambulance
                   </Link>
                 </p>
                 <p>
                   <Link href='#!' className='text-reset'>
                     Appoinments
                   </Link>
                 </p>
                 <p>
                   <Link href='#!' className='text-reset'>
                     Help
                   </Link>
                 </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="footer-header text-uppercase fw-bold mb-4">Recent Blog</h6>
                <p>
                  <img src="https://altiushospital.com/wp-content/uploads/2023/03/Treating-Diabetes-%E2%80%93-Learn-How-To-Prevent-And-Control-Diabetes.png" className="footer-logo" alt="..." /><br/>
                  <Link className="blog-text">
                    Treating Diabetes ??? Learn How To Prevent And Control Diabetes
                    01 Mar 2023
                  </Link>
                </p>
                <p>
                  <img src="https://altiushospital.com/wp-content/uploads/2023/02/Early-Signs-Of-Arthritis.png" className="footer-logo" alt="..." /><br/>
                  <Link className="blog-text">
                    Early Signs Of Arthritis
                    27 Feb 2023
                  </Link>
                </p>
              </div>

            </div>

          </div>
        </section>

        <div className="text-center p-4">
         Copyright 2022 ?? 
          <Link className="text-reset fw-bold" href="">Altius Sripada Hospitals LLP</Link>
        </div>

      </div>

    </div>
  )
}
