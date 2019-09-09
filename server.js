// Imports
const fs = require('fs')
const MjpegProxy = require('mjpeg-proxy').MjpegProxy
const https = require('https')
const path = require('path')
const express = require('express')
const app = express()
app.use(express.static(path.join(__dirname, 'dist')))

// Config
const streamUrl = 'http://192.168.1.70:9080/mjpg/1/video.mjpg'
const imageUrl = 'http://192.168.1.70:9080/jpg/1/image.jpg'
const certPath = '/etc/letsencrypt/live/kitese.duckdns.org/'

// Routes
app.get('/stream', new MjpegProxy(streamUrl).proxyRequest);
app.get('/image', (req, res) => {
  res.sendFile(imageUrl);
});
app.get('/', (req, res) => {
  res.sendFile(__dirname, '/dist/index.html');
});

// Setup
try {
  https.createServer({
    key: fs.readFileSync(certPath + 'privkey.pem'),
    cert: fs.readFileSync(certPath + 'cert.pem'),
    ca: fs.readFileSync(certPath + 'fullchain.pem')
  }, app).listen(443, () => {
    console.log('Listening...')
  })
} catch (e) {
  console.log(e);
}