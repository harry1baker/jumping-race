const { Game } = require("./Game");

const games = [];
const roomIDs = [];
let io = null;

exports.main = pio => {
	io = pio
	update();
}
exports.onConnect = socket => {
	socket.on("wannaBeHost", data => {
		const {hostname, color} = json.parse(data);
		if (roomIDs.includes(hostname)){
			socket.emit("hostInvitation", "Denied");
			return;
		}
		roomIDs.push(hostname);
		games[hostname] = new Game(socket.id, color);
	});
	socket.on("wannaBeMember", data => {
		const {hostname, color} = json.parse(data);
		
	});
}

function update(){
	for (const i in games){
		io.to(i).emit(games[i].positions);
	}
	setInterval(update, 20);
}
