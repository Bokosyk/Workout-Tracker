const express = require("express");
//Add Mongoose

const PORT = 3002;

//Creating an instance of express
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//Listening to the PORT
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
})