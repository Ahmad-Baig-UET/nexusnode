const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Protected - requires JWT
router.get('/data', auth, (req, res) => {
    // TODO: Query aggregated data from DB
    res.json({ message: 'Marketplace data endpoint' });
});

module.exports = router;
