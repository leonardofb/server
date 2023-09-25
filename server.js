const http = require("http");

const host = 'localhost';
const port = 8080;

const server = http.createServer(function (req, res) {});
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
    
});