const express = require("express");
const logger = require("morgan");
const Mongoose = require("mongoose");
const compression = require('compression')

//Creating an instance of express
const app = express();
const PORT = process.env.PORT || 3002;

app.use(compression())

//Inquire about this section. Something to do with morgan.
app.use(logger("dev"));

//Inquire about this section
app.use(express.urlencoded({ extended: true }));
//Pointing to public directory for static files.
app.use(express.static("public"));

//Require htmlRoutes and use.
app.use(require("./routes/htmlRoutes"));

//Require apiRoutes and use.
app.use(require("./routes/apiRoutes"));

//Listening to the PORT
app.listen(PORT, () => {
    console.log(`==> 🌎 App running on http://localhost:${PORT}`);
})

//Connects to Mongoose
Mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);