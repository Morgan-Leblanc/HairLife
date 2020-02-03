
const db_name = 'leciseau'
const mysql = require('mysql')
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME
})

connection.connect((err) => {
    if (!err) {
        console.log(`😎😎 -- MySql is connected on ${db_name}'s database -- 😎😎`);
    } else {
        console.log("-- 👎 👎  -- Error connecting MySql : -- 👎 👎 -- ", err);
    }
});

module.exports = connection