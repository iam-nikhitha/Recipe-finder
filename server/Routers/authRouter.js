const express = require('express');
const router = express.Router();
const { registerModule, loginModule } = require('../Controllers/authController');

router.post('/register',registerModule);
router.post('/login',loginModule);

module.exports = router;