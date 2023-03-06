const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId;

const userfeedbackschema = new mongoose.Schema({
   name: {
      type: String
   },
   email: {
      type: String
   },
   mobile: {
      type: Number
   },
   message:{
    type:String
   },
}, { timestamps: true });

module.exports = mongoose.model('Userfeedback', userfeedbackschema);