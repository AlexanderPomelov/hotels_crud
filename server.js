const http = require('http');

const routeHandler = require('./routes/router');

const server = http.createServer(routeHandler);

const PORT = 8000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});