const http = require('http');
const fs = require('fs');
const requestUtil = require('./utils/request');

const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  const filePath = '.' + req.url;

  if (filePath == './') {
    return requestUtil.handleSuccess(req, res);
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      return requestUtil.handleError(req, res, err);
    }

    return requestUtil.sendFile(req, res, content);
  })
}).listen(port);

console.log('server running on', port);
