const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')

const connection = mysql.createConnection(config)
const sql = `INSERT INTO people (name) VALUES (CONCAT('Marcelo ', LEFT(MD5(RAND()), 8)));`
connection.query(sql)
connection.end()

const selectSql = 'SELECT name FROM people';

function generateResponseString(results) {
    const names = results.map(result => result.name);
    const responseString = `<h1>Full Cycle Rocks!</h1><p>Names: ${names.join(', ')}</p>`;
    return responseString;
}

app.get('/', (req,res) => {
    let responseString = "";
    const connection = mysql.createConnection(config);
    connection.query(selectSql, (error, results) => {
        if (error) {
            throw error;
        }
        responseString = generateResponseString(results)
        res.send(responseString)
    })
    connection.end()
    
})

app.listen(port, () => {
    console.log('Rodando na Porta ' + port)
})