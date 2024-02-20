const express = require("express");
const router = express.Router();
const { getuniversities, createUniversity, getUniversity, updateUniversity, deleteUniversity } = require("../controllers/universityController")

router.route("/").get(getuniversities).post(createUniversity);

router.route("/:id").get(getUniversity).put(updateUniversity).delete(deleteUniversity);

module.exports = router;