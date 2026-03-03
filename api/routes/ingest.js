const express = require('express');
const router = express.Router();

// Receives events from Nexus-Agent
router.post('/', (req, res) => {
    const eventData = req.body;
    // TODO: Push to message queue
    console.log('Event received:', eventData);
    res.status(202).json({ status: 'accepted' });
});

module.exports = router;
