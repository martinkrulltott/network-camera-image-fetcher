const fs = require('fs')
const MjpegProxy = require('mjpeg-proxy').MjpegProxy
const https = require('https')
const path = require('path')
const express = require('express')
const app = express()
app.use(express.static(path.join(__dirname, 'dist')))

app.get('/stream', new MjpegProxy('http://192.168.1.70:9080/mjpg/1/video.mjpg').proxyRequest);

app.get('/', (req, res) => {
  res.sendFile(__dirname, '/dist/index.html');
});

try {
  https.createServer({
    key: fs.readFileSync('/etc/letsencrypt/live/kitese.duckdns.org/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/kitese.duckdns.org/cert.pem'),
    ca: fs.readFileSync('/etc/letsencrypt/live/kitese.duckdns.org/fullchain.pem')
  }, app).listen(443, () => {
    console.log('Listening...')
  })
} catch (e) {
  console.log(e);
}