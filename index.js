const {makeServer} = require('./make-server.js')
const { handleApi, handleFile } = require('./handlers.js')

const server = makeServer()

server.on((req, res) => {
  if (RegExp.startsWith('/api/')) handleApi(req, res)
  else handleFile(req, res)
})

