# MJPG Image Host
A small client and server solution to host a network MJPG stream over HTTPS, using Vue.js, Node/Express and a Let's Encrypt SSL certificate.
## Install
Clone with Git and run:

    npm install
## Config
 - Change the mjpg stream url in the `server.js` file to match your local network setup.
 - Change the key/cert/ca URL's in the `server.js` file to point to your Let's Encrypt cert files on the server.
## Server
    npm run start
Runs the server, which will serve both the static Vue files from the Dist folder and the local mjpg stream over HTTPS (port 443). The client files are served to `/` and the mjpg stream to `/stream`.
## Client - Dev
    npm run serve
Dev server with hot reloading (port 8080)
## Client - Prod
    npm run build
Builds and packages the client-side files for prod (to the Dist folder), which in turn is served by the server.
## SSL
The SSL certificate itself is out of scope for this project, but can be generated from Let's Encrypt using Certbot, more info at [the official Certbot documentation](https://certbot.eff.org/).
## Built using
 - Node
 - Express
 - Vue.js
 - [MJPEG Proxy](https://github.com/legege/node-mjpeg-proxy)
 - ESLint
 - Node Sass
 - Sass Loader