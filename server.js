const express = require("express");
const logger = require("morgan");
const Mongoose = require("mongoose");

//Creating an instance of express
const app = express();
const PORT = 3002;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//Require htmlRoutes and use.
app.use(require("./routes/htmlRoutes"));

//Listening to the PORT
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
})

Mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});