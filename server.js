// Imports
const fs = require('fs')
const MjpegProxy = require('mjpeg-proxy').MjpegProxy
const https = require('https')
const path = require('path')
const express = require('express')
const app = express()
app.use(express.static(path.join(__dirname, 'dist')))

// Config
const STREAMURL = 'http://192.168.68.111/mjpg/1/video.mjpg'
const CERTPATH = '/etc/letsencrypt/live/kitese.duckdns.org/'
const PORT = 8080;

// Routes
app.get('/stream', new MjpegProxy(STREAMURL).proxyRequest);
app.get('/', (req, res) => {
  res.sendFile(__dirname, '/dist/index.html');
});

// Setup
try {
  https.createServer({
    key: fs.readFileSync(CERTPATH + 'privkey.pem'),
    cert: fs.readFileSync(CERTPATH + 'cert.pem'),
    ca: fs.readFileSync(CERTPATH + 'fullchain.pem')
  }, app).listen(PORT, () => {
    console.log('Listening...')
  })
} catch (e) {
  console.log(e);
}
