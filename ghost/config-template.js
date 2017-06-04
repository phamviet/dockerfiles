var path = require('path');

module.exports = {
    production: {
        url: process.env.APP_URL,
        forceAdminSSL: true,
        database: {
            client: 'mysql',
            connection: {
                host: process.env.GHOST_DB_HOST,
                user: process.env.GHOST_DB_USER,
                password: process.env.GHOST_DB_PASSWORD,
                database: process.env.GHOST_DB_NAME,
                charset: 'utf8'
            },
            debug: false
        },
        server: {
            host: '0.0.0.0',
            port: '2368'
        },
        mail: {
            transport: 'SMTP',
            options: {
                service: 'Mailgun',
                auth: {
                    user: process.env.SMTP_LOGIN,
                    pass: process.env.SMTP_PASSWORD
                }
            }
        },
        paths: {
            contentPath: path.join(process.env.GHOST_CONTENT, '/')
        }
    },

    development: {
        url: process.env.APP_URL,
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(process.env.GHOST_CONTENT, '/data/ghost.db')
            },
            debug: false
        },
        server: {
            host: '0.0.0.0',
            port: '2368'
        },
        mail: {
            transport: 'SMTP',
            options: {
                service: 'Mailgun',
                auth: {
                    user: process.env.SMTP_LOGIN,
                    pass: process.env.SMTP_PASSWORD
                }
            }
        },
        paths: {
            contentPath: path.join(process.env.GHOST_CONTENT, '/')
        }
    }
}
