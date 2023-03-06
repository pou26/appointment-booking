const DoctorModel = require("../models/doctorModel")
module.exports ={
     createDoctor : async (req, res) =>{
    try {
      const created = await DoctorModel.create(req.body)
      return res.status(201).send({ Data: created });
    } catch (error) {
      console.log(error)
      return res.status(500).send({ message: error.message })
    }
  },
     getDoctor : async (req, res) =>{
    try {
      const Doctors = await DoctorModel.find()
      return res.status(200).send({ Data: Doctors });
    } catch (error) {
      console.log(error)
      return res.status(500).send({ message: error.message })
    }
  }
}
