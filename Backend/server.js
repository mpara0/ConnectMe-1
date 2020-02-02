/*const express = require('express');
const mysql = require('mysql');

// Create connection
const con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Education324.',
    database : 'joblist'
});

// Connect
con.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected');
    /*var sql = "INSERT INTO jobs (Skill, Company, Description) VALUES ?";
    var values = [
        ['Java', 'Google STEP Internship', 'https://buildyourfuture.withgoogle.com/programs/step/'],
        ['Java', 'Google Software Engineering','http://bit.ly/2tifBUg'],
        ['Java', 'Amazon Software Development Engineer','http://bit.ly/31ilwoN'],
        ['C++', 'Google STEP','https://buildyourfuture.withgoogle.com/programs/step/'],
        ['C++', 'Google Software Engineering','http://bit.ly/2tifBUg'],
        ['C++', 'Microsoft Software Engineering','http://bit.ly/2vHZnon'],
        ['Python', 'isee. Robotics Intern','http://bit.ly/2UggxDS'],
        ['Python', 'Google STEP','https://buildyourfuture.withgoogle.com/programs/step/'],
        ['Python', 'FormLabs Python Intern','http://bit.ly/36KYLej'],
        ['Python', 'Apple IS/IT','https://www.linkedin.com/jobs/view/1702387947/'],
        ['Full Stack', 'Apple IS/IT','https://www.linkedin.com/jobs/view/1702387947/'],
        ['Full Stack', 'IBM Full Stack Developer','http://bit.ly/38ZuFVY'],
        ['Full Stack', 'BOLA-AI Software Development','http://bit.ly/38ZuFVY'],
        ['Full Stack', 'Overdrive Interactive Web Development','http://bit.ly/36Q1TFM']
    ];
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
    con.query("SELECT * FROM jobs WHERE Skill = 'Java'", function (err, result) {
        if (err) throw err;
        console.log(result[1]);
document.body.innerHTML="<p>result</p>";
    });
});

const app = express();



app.listen('1600', () => {
    console.log('Server started.........');
});*/
