export default {

    database: {
        host: 'localhost',
        user: 'root',
        password: 'abc123**' ,
        database: 'ProjectoTBD'
    },

    databaseSQL: {
        authentication: {
            type: "default",
            options: {
                userName: 'sa',
                password: 'abc123**',
            },
        },
        server: '192.168.1.11',
        options: {
            port: 49175,
            // instanceName:'DESKTOP-TD3NOBK\SQLSERVERPROJTUR',
            database: 'proyectotbd',
            rowCollectionOnRequestCompletion: true

        }

    }
}