export default {

    database: {
        host: 'localhost',
        user: 'root',
        password: '',
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
        server: '192.168.0.18',
        options: {
            port: 49175,
            // instanceName:'DESKTOP-TD3NOBK\SQLSERVERPROJTUR',
            database: 'proyectotbd',
            rowCollectionOnRequestCompletion: true

        }

    }
}