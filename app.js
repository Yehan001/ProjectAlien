const http = require('http'); // Node.js module to create servers
const os = require('os'); // NEW: system info

// Create a server
const server = http.createServer((req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`); // Log request

  // Handle different routes
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World from Node.js!');
    res.write('\nCurrent time: ' + new Date().toLocaleString());
    res.end();
  } 
  else if (req.url === '/json') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    const data = {
      message: "This is JSON response",
      time: new Date(),
      platform: os.platform()
    };
    res.end(JSON.stringify(data));
  } 
  else if (req.url === '/about') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('About Page\n');
    res.write('Simple Node.js Server Example');
    res.end();
  } 
  else {
    // Handle 404
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found');
  }

});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Extra logging
console.log(`Server started at: ${new Date().toLocaleString()}`);
console.log(`System: ${os.type()} ${os.release()}`);

console.log("my name is ranveer ching");