const express = require('express');
const { authToken } = require('../middleware/authMiddleware');
const { getUsersForSidebar, getMessages, sendMessage } = require('../controllers/messageControllers');
const router = express.Router();

router.get("/users", getUsersForSidebar);
router.get("/:id", getMessages);

router.post("/send/:id", sendMessage);

module.exports = router;
