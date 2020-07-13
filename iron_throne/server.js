require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());
require("./routes")(app);

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(res => {
    app.listen(port, () => console.log(`Server running at ${port}`));
    console.log("Database Connected");
  }).catch(err=>{
      console.log("error",err)
  })