const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId;

const userschema = new mongoose.Schema({
   name: {
      type: String
   },
   DrName :{
    type : String,
   },
   email: {
      type: String
   },
   mobile: {
      type: Number
   },
   date: {
      type: Date
   },
   time:{
    type:String
   },

}, { timestamps: true });

module.exports = mongoose.model('User', userschema);