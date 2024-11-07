const express = require("express");
const path = require("path");
const router = express.Router();
const firestore = require("firebase/firestore");
const db = firestore.getFirestore();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "form.html"));
});

router.get("/submit", (req, res) => {
  const { title, postText, author } = req.query;

  if (!title || !postText || !author)
    response.send({ error: "invalid form submisson" });
  const idFromTitle = title.replace(/\s+/g, "-").toLowerCase();

  const setBlogPost = firestore.setDoc(
    firestore.doc(db, "posts", idFromTitle),
    {
      title,
      text: postText,
      author,
    }
  );

  setBlogPost
    .then((_) =>
      res.sendFile(path.join(__dirname, "../public", "success.html"))
    )
    .catch((error) => res.send("error"));
});
module.exports = router;
