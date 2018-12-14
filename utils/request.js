const handleError = (req, res, err) => {
  res.writeHead(400, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    success: false,
    data: {
      err
    }
  }));
}

const handleSuccess = (req, res, data = {}) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    success: true,
    data
  }));
}

const sendFile = (req, res, file) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(file, 'utf-8');
}

module.exports = {
  handleError,
  handleSuccess,
  sendFile
}
