const userModel = require("../models/userfeedback")
module.exports ={
     createfeedbackUser : async (req, res) =>{
    try {
        console.log(req.body);
      const created = await userModel.create(req.body)
      return res.status(201).send({ Data: created });
    } catch (error) {
      console.log(error)
      return res.status(500).send({ message: error.message })
    }
  }
}
