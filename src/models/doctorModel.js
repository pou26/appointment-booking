const mongoose = require('mongoose');

const Doctorschema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   speciality: {
      type: String,
      required: true
   },
   photo: {
      type: String
   }
}, { timestamps: true });

module.exports = mongoose.model('Doctor', Doctorschema);