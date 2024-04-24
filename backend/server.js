// use Express Mysql Cors Nodemon
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');


// create the server Express
const app = express();
app.use(cors()); 
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "alaa",
    database: "school-management-system" 
});

app.get('/', (req, res) => {
    return res.json("Hello from backend side");
});

app.listen(8001, () => {
    console.log("Server is running");
});
