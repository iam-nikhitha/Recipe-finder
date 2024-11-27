const express = require("express");
const { getAllFeedback, userFeedback } = require("../Controllers/feedbackController");
const router = express.Router();

router.get("/",getAllFeedback);
router.post("/feedback",userFeedback);

module.exports = router;