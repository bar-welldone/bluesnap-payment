var fs = require('fs'),
    https = require('https'),
    express = require('express'),
    path = require('path');

// var privateKey = fs.readFileSync('./key.pem');
// var certificate = fs.readFileSync('./cert.pem');

// console.log(certificate)

const app = express()
const port = 8000

app.listen()

app.use((req, res) => {
  console.log(req)
  res.send('')
})

// https.createServer({
//   cert: certificate,
//   key: privateKey
// }, app).listen(port);