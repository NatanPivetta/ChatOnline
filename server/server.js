const express = require('express')
const app = express()
const port = 3000
const path = require('path')



var sala1 = require("../client/sala1.js")

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/salas/:id', (req, res) => {
    url = path.join(__dirname + '/salas/sala' + req.params.id + '.html');
    res.sendFile(url);
  })

app.post('/post', (req,res)=> {
    res.send("POST method");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})