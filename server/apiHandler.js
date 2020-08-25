const express = require('express');
const router = express.Router();

router.get('/api/get', (req, res) => {
    const name = req.query.name;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ get: `Sent via GET: ${name}` }));
});
  
router.post('/api/post', (req, res) => {
    res.send(
    `Sent via POST request: ${req.body.post}`,
    );
});

module.exports = router;