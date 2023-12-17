module.exports = { makeServer }

const {createServer} = require("http")
const port = 1234


function makeServer() {
  const server = createServer()
  return new Promise(resolve => {
    server.listen(port, () => {
      console.log('Server started at http://localhost:' + port)
      resolve(server)
    })
  })
}