const express = require('express');
const router = express.Router();
const jwtUtil = require('./jwtUtil');
const authOps = require('./authOps');

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
    const token = req.session.token;

    jwtUtil.verifyRoleFromToken(token)
        .then((role) => {
            if(role){
                // token verified
                res.status(200).json({
                    success: true,
                    data: [
                        {amount: 123, transaction_id: 1, transaction_type: 'Purchase'},
                        {amount: 456, transaction_id: 2, transaction_type: 'Refund'},
                        {amount: 567, transaction_id: 3, transaction_type: 'Cancel'}
                    ]
                });
            } else {
                res.status(400).json({
                    success: false,
                    msg: 'role permission denied'
                })
            }         
        }).catch(err => {
            res.status(400).json({
                success: false,
                msg: err
            })
        })
});

router.post('/api/login', authOps.login);
router.post('/api/logout', authOps.logout);

module.exports = router;