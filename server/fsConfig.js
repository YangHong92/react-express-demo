const s3Client = {
    prod: {
        // key & access for IAM users: nodeapp.fs3.user
        accessKeyId: 'AKIAUXKI2CADDN7PTSOJ',
        secretAccessKey: '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',
        region: 'eu-west-2' // region eu-west-2c not available
    },
    dev: {
       // key & access for IAM users: nodeapp.fs3.user
       accessKeyId: 'AKIAUXKI2CADDN7PTSOJ',
       secretAccessKey: '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',
       region: 'eu-west-2' // region eu-west-2c not available
    }    
}

const bucket = {
    prod: 'nodeapp.fs',
    dev: 'nodeapp.fs'
}

module.exports = {
    s3Client,
    bucket
}