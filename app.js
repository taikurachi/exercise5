const express = require("express");
const app = express();
const port = 3000;

const indexRoute = require("./routes/index.js");
const singlePostRoute = require("./routes/singlePost.js");
const createPostRoute = require("./routes/createPost.js");

app.use("/", indexRoute);
app.use("/create", createPostRoute);
app.use("/post", singlePostRoute);

app.listen(port, () => console.log("exercise app loading"));
