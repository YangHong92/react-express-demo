const createTransportConfig = {
    service: 'gmail',
    auth: {
        user: `${process.env.EMAIL_ADDRESS}`,
        pass: `${process.env.EMAIL_PASSWORD}`,
    }
}

const mailingUrl = {
    prod: 'demo.aws.ec2',
    dev: 'http://localhost:3000'
}

const mailSender = `${process.env.EMAIL_ADDRESS}`

module.exports = {
    createTransportConfig,
    mailingUrl,
    mailSender
}