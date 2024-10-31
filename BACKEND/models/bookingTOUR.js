const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingTOURSchema = new Schema({
   fName : {
       type : String,
       required: true
   },
   lName : {
    type : String,
    required: true
   },
   country : {
       type : String,
       required: true
   },
   contactNo : {
       type : Number,
       required: true
   },
   email : {
       type : String,
       required: true
   },
   date : {
    type : Date,
    required: true
}
})

const BookingTOUR = mongoose.model("BookingTOUR",bookingTOURSchema);

module.exports = BookingTOUR;