const express = require("express");
const db = require("../public/javascripts/firesbaseAdmin");

const router = express.Router();

router.get("/characters", async (req, res) => {
  try {
    const pageSize = parseInt(req.query.pageSize) || 10;
    const lastVisible = req.query.lastVisible || null; 

    let query = db.collection("characters").orderBy("id").limit(pageSize);

    if (lastVisible) {
      const lastVisibleDoc = await db
        .collection("characters")
        .doc(lastVisible)
        .get();
      if (lastVisibleDoc.exists) {
        query = query.startAfter(lastVisibleDoc);
      } else {
        return res.status(400).send("Invalid lastVisible ID.");
      }
    }

    const snapshot = await query.get();

    const characters = snapshot.docs.map((doc) => doc.data());
    const newLastVisible = snapshot.docs[snapshot.docs.length - 1]?.id || null;

    res.status(200).json({
      characters,
      lastVisible: newLastVisible, 
    });
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
