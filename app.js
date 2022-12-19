const express = require('express')
const app = express()
const PORT = 5000
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'ecommerce'
})
app.use(cors())
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
