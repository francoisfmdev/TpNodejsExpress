const express = require('express');
const router = express.Router();

router.get('/test/route1', (req, res, next) => {
	 res.send('test route 1');
});

router.get('/test/route2', (req, res, next) => {
    res.send('test route 2');
});
router.get('/test/route3', (req, res, next) => {
    res.send('test route 3');
});

module.exports = router;