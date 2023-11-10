const http = require('http')
http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end('{}')
  })
  .listen(process.env.OUI_OUI_PORT || 8085)