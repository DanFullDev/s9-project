const express = require("express");
const db = require("./public/javascripts/firebaseAdmin.js");

const router = express.Router();

router.get("/characters", async function (req, res, next) {});
router.post("/characters", async function (req, res, next) {});
router.delete("/characters:id", async function (req, res, next) {});
router.post("/characters:id", async function (req, res, next) {});

module.exports = router;
