const express = require("express");
const logger = require("morgan");
const Mongoose = require("mongoose");

//Creating an instance of express
const app = express();
const PORT = 3002;

//Inquire about this section. Something to do with morgan.
app.use(logger("dev"));

//Inquire about this section
app.use(express.urlencoded({ extended: true }));
//Pointing to public directory for static files.
app.use(express.static("public"));

//Require htmlRoutes and use.
app.use(require("./routes/htmlRoutes"));

//Listening to the PORT
app.listen(PORT, () => {
    console.log(`==> 🌎 App running on http://localhost:${PORT}`);
})

//Connects to Mongoose
Mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});