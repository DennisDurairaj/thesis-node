var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello Digital Ocean!')
});

app.get('/loaderio-5b2dec67e518d3d7d815c0db86b65b60', function (req, res) {
  res.send('loaderio-5b2dec67e518d3d7d815c0db86b65b60')
})

app.listen(3000, function () {
  console.log('Magic is happening on port 3000!')
})
