const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tourSchema = new Schema({
    tourName : {
       type : String,
       required: true
   },
   tourType : {
    type : String,
    required: true
   },
   location : {
       type : String,
       required: true
   },
   amount : {
       type : Number,
       required: true
   },
   noOfPeople : {
    type : Number,
    required: true
   },
   description : {
       type : String,
       required: true
   },
   image : {
    type : String,
    required: true
}
})

const Tour = mongoose.model("Tour",tourSchema);

module.exports = Tour;