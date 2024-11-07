const express = require("express");
const router = express.Router();
const firestore = require("firebase/firestore");

const db = firestore.getFirestore();

router.get("/", async (request, response) => {
  try {
    const postsQuery = await firestore.getDocs(
      firestore.collection(db, "posts")
    );

    const postsArray = postsQuery.docs.map((post) => ({
      id: post.id,
      ...post.data(),
    }));
    response.send(postsArray);
  } catch (error) {
    console.error(error);
    response.status(500).send("error retrieving posts");
  }
});

module.exports = router;
