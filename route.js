const express = require("express")
const router = express.Router()
const {createUser} = require("./src/Controllers/userController")
const {createfeedbackUser} = require("./src/Controllers/userfeedbackController")
const {createDoctor , getDoctor} = require("./src/Controllers/doctorController.js")

router.post("/login" , createUser)
router.post("/feedback" , createfeedbackUser)
router.post("/create-Doctor" , createDoctor)
router.get("/get-Doctor" , getDoctor)
module.exports = router