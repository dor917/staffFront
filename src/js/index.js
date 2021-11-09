const express = require('express');
const issue = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const PORT = process.env.port || 8000;

const db = mysql.createPool({
    host: "localhost",
    user: "test@naver.com",
    password: "test123",
    database: "simpleboard"
});

issue.use(cors());
issue.use(express.json());
issue.use(bodyParser.urlencoded({ extended: true }));

issue.get("/api/get", (req, res)=>{
    const sqlQuery = "SELECT * FROM simpleboard;";
    db.query(sqlQuery, (err, result)=>{
        res.send(result);
    })
})

issue.post("/api/insert", (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const sqlQuery = "INSERT INTO simpleboard (title, content) VALUES (?,?)";
    db.query(sqlQuery, [title, content], (err, result) => {
        res.send('success!');
    });
});

issue.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});