const express = require("express");
const db = require("./public/javascripts/firebaseAdmin.js");

const router = express.Router();

router.get("/characters/all", async (req, res) => {
  try {
    const charactersSnapshot = await db.collection("characters").get();
    const characters = charactersSnapshot.docs.map((doc) => doc.data());
    res.status(200).json(characters);
  } catch (error) {
    res.status(500).send("Error fetching characters: " + error.message);
  }
});

router.post("/characters/create", async (req, res) => {
  try {
    const character = req.body;
    await db
      .collection("characters")
      .doc(character.id.toString())
      .set(character);
    res.status(201).send("Character added successfully");
  } catch (error) {
    res.status(500).send("Error adding character: " + error.message);
  }
});

router.delete("/characters/delete/:id", async (req, res) => {
  try {
    const characterId = req.params.id;
    await db.collection("characters").doc(characterId).delete();
    res.status(200).send("Character deleted successfully");
  } catch (error) {
    res.status(500).send("Error deleting character: " + error.message);
  }
});

router.put("/characters/update/:id", async (req, res) => {
  try {
    const characterId = req.params.id;
    const characterUpdates = req.body;
    await db.collection("characters").doc(characterId).update(characterUpdates);
    res.status(200).send("Character updated successfully");
  } catch (error) {
    res.status(500).send("Error updating character: " + error.message);
  }
});

module.exports = router;
