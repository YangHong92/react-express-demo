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

router.post('/api/fetchDB', (req, res) => {
    res.app.get('connection').query('SELECT * FROM Transactions', function(err, rows){
        if(err){
            res.status(401).json({
                success: false,
                msg: err.sqlMessage
            })
        } else {
            res.status(200).json({
                success: true,
                data: rows
            })
        }
    })

});

module.exports = router;