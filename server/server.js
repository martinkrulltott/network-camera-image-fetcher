const fs = require('fs')
const MjpegProxy = require('mjpeg-proxy').MjpegProxy;
const https = require('https')
const express = require('express')
const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello HTTPS!')
// })

app.get('/', new MjpegProxy('http://192.168.1.70:9080/mjpg/1/video.mjpg').proxyRequest);

try {
  https.createServer({
    key: fs.readFileSync('/etc/letsencrypt/live/kitese.duckdns.org/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/kitese.duckdns.org/cert.pem'),
    ca: fs.readFileSync('/etc/letsencrypt/live/kitese.duckdns.org/fullchain.pem')
  }, app).listen(8080, () => {
    console.log('Listening...')
  })
} catch (e) {
  console.log(e);
}