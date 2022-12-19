const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 5000
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'study'
})

app.use(cors())
app.get('/', (req, res) => {

    connection.connect((err) => {
        if(err) console.log(err); 
        else console.log('MySQL Database has connected successfully');
    })
    res.status(200).send("Connected to study database!");
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
