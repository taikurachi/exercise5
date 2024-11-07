const express = require("express");
const router = express.Router();
const firestore = require("firebase/firestore");
const db = firestore.getFirestore();

router.get("/", (request, response) =>
  response.send("Please include a post id")
);

router.get("/:postId", (request, response) => {
  const postId = request.params.postId;
  const postQuery = firestore.getDoc(firestore.doc(db, "posts", postId));

  postQuery
    .then((res) => {
      const post = res.data();
      if (!post) response.send({});
      response.send(post);
    })
    .catch((error) => {
      console.log(error);
      return response.send(error);
    });
});
module.exports = router;
