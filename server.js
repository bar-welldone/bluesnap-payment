const express = require('express')
const fetch = require('node-fetch')
    

const getToken = async() => {
  const a = await fetch('https://sandbox.bluesnap.com/services/2/payment-fields-tokens', {method: 'POST'})
  console.log(a.headers)
}

getToken()


// var privateKey = fs.readFileSync('./key.pem');
// var certificate = fs.readFileSync('./cert.pem');

// console.log(certificate)

const app = express()
const port = 8000

app.listen(port, () => {
  console.log(`listening at: ${port}...`)
})

app.use('/', (req, res) => {
  console.log(req)
})

// https.createServer({
//   cert: certificate,
//   key: privateKey
// }, app).listen(port);