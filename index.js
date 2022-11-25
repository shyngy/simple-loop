const http = require('http');

const bigNumber = 600000;

const requestListener = function (req, res) {
  if (req.url === '/basic-loop-endpoint') {
    for (let i = 0; i < bigNumber; i++) {
      console.log(i);
    }
    res.end('end of loop');
  }

  if (req.url === '/timeout-endpoint') {
    let result = 'hi';
    for (let i = 0; i < bigNumber; i++) {
      setTimeout(() => {
        result = i;
      }, 1000);
    }
    res.end(result); // hi
  }
};

const server = http.createServer(requestListener);
server.listen(5555);
