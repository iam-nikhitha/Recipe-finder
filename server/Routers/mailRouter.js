const express = require("express");
const router = express.Router();
const Email = require("../email");
const sendMail = require("../sendEmail")

router.post("/mail",Email);
router.post("/send-email",sendMail)



module.exports = router;