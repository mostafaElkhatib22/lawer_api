const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlrwares= jsonServer.defaults();
const port = process.env.PORT || 3001;
server.use(middlrwares)
server.use(router)
server.listen(port)
