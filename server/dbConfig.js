const rdsClient = {
    prod: {
        // AWS RDS info
        host: 'nodeappmysql.cz7jwgpwtdgk.eu-west-2.rds.amazonaws.com',
        user: 'admin',
        password: '12345678',
        port: '3306'
    },
    dev: {
        // AWS RDS info
        host: 'nodeappmysql.cz7jwgpwtdgk.eu-west-2.rds.amazonaws.com',
        user: 'admin',
        password: '12345678',
        port: '3306'
    }
}

const database = {
    prod: 'Transactions_Prod',
    dev: 'Transactions_Prod'
}

module.exports = {
    rdsClient,
    database
}