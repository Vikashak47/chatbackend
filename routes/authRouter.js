const express = require('express');
const router = express.Router();

const { Register, Login, Logout, updateProfile, checkAuth } = require('../controllers/authControllers');
const { authToken } = require('../middleware/authMiddleware');

router.post("/register", Register);
router.post("/login", Login);
router.post("/logout", Logout);

router.put("/update-profile", updateProfile);

router.get("/check",  checkAuth);

module.exports = router;
