import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Background from '../components/Background/Background'
import Specialities from '../components/Specialities/Specialities'
import DoctorCards from '../components/DoctorCards/DoctorCards'
import Map from '../components/Map/Map'
import Footer from '../components/Footer/Footer'
import { useEffect , useState } from 'react'
import axios from "axios"
export default function Home() {

  const [data , setData] = useState([])
 
  const getdata = ()=>{
    axios.get("http://localhost:3001/get-Doctor")
    .then((res)=>{
           setData(res.data)
    })
  }
  useEffect(()=>{
getdata()
  },[])
  return (
    <div>
      <div> <Navbar /> </div>
      <div> <Background /> </div>
      <div> <Specialities /> </div>
      <div> <DoctorCards  data={data}/> </div>
      <div> <Map /> </div>
      <div> <Footer /> </div>
      
    </div>
  )
}
