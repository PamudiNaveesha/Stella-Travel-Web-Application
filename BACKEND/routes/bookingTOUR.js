const router = require("express").Router();
let BookingTOUR = require("../models/bookingTOUR");

router.route("/bookTOUR").post((req,res)=>{

    const fName = req.body.fName;
    const lName = req.body.lName;
    const country = req.body.country;
    const contactNo = Number(req.body.contactNo);
    const email = req.body.email;
    const date = req.body.date;

    const newBookingTOUR = new BookingTOUR({
      fName,
      lName,
      country,
      contactNo,
      email,
      date  
    })

    newBookingTOUR.save().then(()=>{
        res.json("Booking Added") 
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{
    BookingTOUR.find().then((bookingsTOUR)=>{
        res.json(bookingsTOUR)
    }).catch((err)=>{
        console.log(err)
    })
})
/*router.route("/update/:id").put(async (req,res)=>{
    let userID = req.params.id;
    const {fName,lName,country,contactNo,email,date}= req.body;

    const updateBookingEVENT = {

      fName,
      lName,
      country,
      contactNo,
      email,
      date 
    }
    const update = await BookingEVENT.findByIdAndUpdate(userID, updateBookingEVENT)
    .then(()=>{
        res.status(200).send({status:"booking updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data" , error: err.message});
         
    })
        
})*/

router.route("/delete/:id").delete(async (req, res)=>{
    let userID = req.params.id;

    await BookingTOUR.findByIdAndDelete(userID)
    .then(() => {
        res.status(200).send({status: "booking deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res)=>{
    let userID = req.params.id;

    const user = await BookingTOUR.findById(userID)
    .then((bookingTOUR) => {
        res.status(200).send({status: "Booking fetched",bookingTOUR});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with fetche booking", error: err.message});
    })
})

module.exports = router;
