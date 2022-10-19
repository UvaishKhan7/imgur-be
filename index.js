//import statements
const cors = require("cors");
const express = require("express"); 
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const initRoutes=require("./routes")

//configurations
dotenv.config();
const port = process.env.PORT || 8000;
mongoose
  .connect(process.env.DATABASE_URL, {
    // userNewParser: true,
    // userUnifiedTopology: true,               
    // userFindAndModify: true,
  })
  .then(() => console.log("db connected successfully"))
  .catch((err) => console.log(err));

//app or server initialization 
const app = express();

//app or server middlewares
var corsOptions = { origin: "http://localhost:8081"};
app.use(cors(corsOptions));
app.use(express.urlencoded({extended:true}));

//app or server routes
initRoutes(app);

//app or server starting server listen
app.listen(port, () => console.log(`Server started at port ${port}!`));
