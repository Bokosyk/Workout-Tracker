const router = require("express").Router();
const path = require("path");

// Connects router to exercise.html
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(_dirname, "../public/exercise.html"))
});

// Connects router to exercise.html
router.get('/stats', (req, res) => {
    res.sendFile(path.join(_dirname, "../public/stats.html"))
});

// Makes files globally available
module.exports = router;