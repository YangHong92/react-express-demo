const rdsClient = {
    prod: {
        // AWS RDS info
        host: 'nodeappmysql.cz7jwgpwtdgk.eu-west-2.rds.amazonaws.com',
        user: 'admin',
        password: '12345678',
        port: '3306'
    },
    dev: {
        // localhost
        host: 'localhost',
        user: 'root',
        password: '1234567890',
        port: '3306'
    }
}

const database = {
    prod: 'Transactions_Prod',
    dev: 'portal_system'
}

module.exports = {
    rdsClient,
    database
}