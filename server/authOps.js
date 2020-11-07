const jwtUtil = require('./jwtUtil');
const nodemailer = require('nodemailer');
const { createTransportConfig, mailSender } = require('./config/mailerConfig');

const transporter = nodemailer.createTransport(createTransportConfig);

function login(req, res) {
    const email = req.body.email.trim().toLowerCase();
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
    const sql = `SELECT * FROM user_credential 
                WHERE account_name=? AND account_password=?`;
    res.app.get('connection').query(sql, [email, password], function (err, rows) {
        if (err) {
            res.status(400).json({
                success: false,
                msg: err.sqlMessage
            });
        } else {
            if (rows[0]) {
                req.session.token = jwtUtil.generateTokenByRole('admin');
                res.status(200).json({
                    success: true,
                    data: {
                        role: '__admin__',
                        user_id: rows[0].foreign_user_id
                    }
                });
            }
            else {
                res.status(400).json({
                    success: false,
                    msg: 'failed authorization'
                });
            }      
        }
    });
    */
}

function logout(req, res) {
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
}

function signup(req, res) {
    const email = req.body.email.trim().toLowerCase();
    const password = req.body.password;
    const role = req.body.role;

    const sql = `SELECT * FROM user_credential 
                WHERE account_name=?`;

    res.app.get('connection').query(sql, [email], function (err, rows) {
        if (err) {
            res.status(400).json({
                success: false,
                msg: 'failed selecting from user_credential'
            });
        } else {
            if (rows.length > 0) {
                res.status(400).json({
                    success: false,
                    msg: 'sorry, this email already exists'
                });
            } else {
                const sql = `INSERT INTO user_credential (account_name, account_password, permission_role) 
                                    VALUES (?, ?, ?)`;
                res.app.get('connection').query(sql, [email, password, role], function (err, rows) {
                    if (err) {
                        res.status(400).json({
                            success: false,
                            msg: 'failed inserting into user_credential'
                        });
                    } else {
                        req.session.token = jwtUtil.generateTokenByRole(role);

                        const mailOptions = {
                            from: `${mailSender}`,
                            to: `${email}`,
                            subject: 'Welcome to HI TALENTS!',
                            html: 'Thank you for registrating with us. <br/>'
                                + `You are now free to explore our website at ${res.app.get('url')}! <br/>`
                        }
                        transporter.sendMail(mailOptions, (err, response) => { });

                        res.status(200).json({
                            success: true,
                            data: {
                                role: role,
                                msg: 'Successfully registered.'
                            }
                        });
                    }
                });
            }
        }
    })
}

module.exports = {
    login,
    logout,
    signup
}