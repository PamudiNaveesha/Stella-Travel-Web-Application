const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
});

const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("Mongodb Connection Success!");
})

const tourRouter = require("./routes/tour.js");
const bookingTOURRouter = require("./routes/bookingTOUR.js");

app.use("/Tour",tourRouter);
app.use("/BookingTOUR",bookingTOURRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on port number:${PORT}`)
    
})