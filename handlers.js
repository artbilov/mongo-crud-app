module.exports = { handleApi, handleFile }

function handleApi(req, res) {
  
}

function handleFile(req, res) {
  if (req.url === '/') {
    res.end('Hello World!')
  }
}

const net = require('./net.js')