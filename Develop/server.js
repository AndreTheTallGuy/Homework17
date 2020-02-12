const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
// app.use(require("./public/api.js"));
const htmlroutes = require("./routes/htmlrouts")(app);
const apiroutes = require("./routes/apiroutes")(app);

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT} !`);
});
