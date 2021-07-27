class Game {
	members = 0;
	positions = {};
	constructor(hostname, hostID){
		this.roomID = hostname;
		this.join(hostID);
	}
	join(id, color){
		this.members++;
		this.positions[id] = {x:70, y:0, color};
	}
	leave(id){
		delete this.position[id];
		this.members--;
	}
	update(id, x, y){
		this.positions[id].x = x;
		this.positions[id].y = y;
	}
}
exports.Game = Game;
