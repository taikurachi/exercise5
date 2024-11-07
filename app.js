const express = require("express");
const app = express();
const port = 3000;
const firebase = require("firebase/app");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "exercise5-283ab.firebaseapp.com",
  projectId: "exercise5-283ab",
  storageBucket: "exercise5-283ab.firebasestorage.app",
  messagingSenderId: "426589312232",
  appId: "1:426589312232:web:b1e508451f5a2df6eba55d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

app.use(express.static("public"));

const indexRoute = require("./routes/index.js");
const singlePostRoute = require("./routes/singlePost.js");
const createPostRoute = require("./routes/createPost.js");

app.use("/", indexRoute);
app.use("/create", createPostRoute);
app.use("/post", singlePostRoute);

app.listen(port, () => console.log("exercise app loading", port));
