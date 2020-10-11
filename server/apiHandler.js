const express = require('express');
const router = express.Router();
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const path = require('path');
const jwtUtil = require('./jwtUtil');
const fsConfig = require('./fsConfig');
const __env__ = process.env.NODE_ENV;

/**
const s3Client = new AWS.S3(fsConfig.s3Client[__env__]);
const bucket = fsConfig.bucket[__env__];

// multipart/form-data , which is primarily used for uploading files
const upload = multer({ dest: './uploads/' })
const singleUpload = multer({
    // storage: multer.memoryStorage(),
    storage: multerS3({
        s3: s3Client,
        bucket: bucket,
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + path.extname(file.originalname))
        }
    }),
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single("file");
*/

function checkFileType(file, cb) {
    const filetypes = /doc|docx|pdf|jpeg|jpg|png/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error('File type not allowed!'), false);
    }
}

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

router.post('/api/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    req.session.token = jwtUtil.generateTokenByRole('admin');
    res.status(200).json({
        success: true,
        data: {
            email,
            password,
            token: req.session.token
        }
    });

    /**
    const sql = `SELECT * FROM users WHERE account_name=? AND account_password=?`;
    res.app.get('connection').query(sql, [email, password], function (err, rows) {
        if (err) {
            res.status(400).json({
                success: false,
                msg: err.sqlMessage
            });
        } else {
            if (rows[0]) {}
            else {
                res.status(400).json({
                    success: false,
                    msg: 'failed authorization'
                });
            }      
        }
    });
    */
});

router.get('/api/verifytoken', (req, res) => {
    const token = req.session.token

    jwtUtil.verifyRoleFromToken(token)
        .then((role) => {
            if (role === 'admin') {
                res.send(
                    `token verified: ${role}`,
                );
            } else {
                res.send(
                    `role permission denied`,
                );
            }
        }).catch(err => {
            res.send(
                `err: ${err}`,
            );
        })
});

router.post('/api/logout', (req, res) => {
    req.session.destroy(function (err) {
        if (err) {
            res.status(400).json({
                success: false,
                msg: 'failed clear session'
            });
        } else {
            res.status(200).json({
                success: true,
                data: {
                    session: 'session destroyed'
                }
            });
        }
    });
});

router.post('/api/fetchDB', (req, res) => {
    const token = req.session.token;

    jwtUtil.verifyRoleFromToken(token)
        .then((role) => {
            if(role){
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

/**
 For purpurse of avoiding cost and security warning, not allow database and S3 connection 
* 
router.post('/api/file/upload', (req, res) => {
    singleUpload(req, res, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                msg: err
            });
        } else {
            if (req.file === undefined) {
                res.status(500).json({
                    success: false,
                    msg: 'No File Selected'
                });
            }
            res.status(200).json({
                success: true,
                data: {
                    fileName: req.file.key
                }
            });
        }
    })
})

router.get('/api/file/:filename', (req, res) => {
    const params = {
        Bucket: bucket,
        Key: req.params.filename
    }

    res.setHeader('Content-Disposition', 'attachment');

    s3Client.getObject(params)
        .createReadStream()
        .on('error', function (err) {
            res.status(500).json({
                success: false,
                msg: err.message
            });
        }).pipe(res);
})
*/
module.exports = router;