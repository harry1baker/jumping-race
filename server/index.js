const { createServer } = require("https");
const { readFileSync } = require("fs");
const express  = require("express");
const { Server } = require("socket.io");

const PORT = process.argv.PORT || 4000;
const HOST = process.argv.HOST || "127.0.0.1";

const app = express();
const server = createServer({
	key: readFileSync("cert/key.pem"),
	cert: readFileSync("cert/cert.pem")
},app);
const io = new Server(server);

app.get("/", (req, res) => {
	console.log("get request");
	res.send("<h1>hello world</h1>");
});

io.on("connection", socket => {
	console.log("connection");
});

server.listen(PORT, HOST, () => {
	console.log(`jumping-race server listrning on ${HOST}:${PORT}.`);
});
