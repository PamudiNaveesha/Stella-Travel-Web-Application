const router = require("express").Router();
let Tour = require("../models/tour");

router.route("/addTOUR").post((req,res)=>{

    const tourName = req.body.tourName;
    const tourType = req.body.tourType;
    const location = req.body.location;
    const amount = Number(req.body.amount);
    const noOfPeople = Number(req.body.noOfPeople);
    const description = req.body.description;
    const image = req.body.image;

    const newTour = new Tour({
      tourName,
      tourType,
      location,
      amount,
      noOfPeople,
      description,
      image  
    })

    newTour.save().then(()=>{
        res.json("Tour Added") 
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{
    Tour.find().then((tours)=>{
        res.json(tours)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route("/updateTOUR/:id").put(async (req,res)=>{
    let userID = req.params.id;
    const {tourName,tourType,location,amount,noOfPeople,description,image}= req.body;

    const updateTour = {

      tourName,
      tourType,
      location,
      amount,
      noOfPeople,
      description,
      image 
    }
    const update = await Tour.findByIdAndUpdate(userID, updateTour)
    .then(()=>{
        res.status(200).send({status:"tour updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data" , error: err.message});
         
    })
        
})

router.route("/delete/:id").delete(async (req, res)=>{
    let userID = req.params.id;

    await Tour.findByIdAndDelete(userID)
    .then(() => {
        res.status(200).send({status: "tour deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res)=>{
    let userID = req.params.id;

    const user = await Tour.findById(userID)
    .then((tour) => {
        res.status(200).send({status: "Tour fetched",tour});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with fetche tour", error: err.message});
    })
})

module.exports = router;
