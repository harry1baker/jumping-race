import { useState } from "react";
import { io } from "socket.io-client";
import Host from "./Host";
import HostList from "./HostList";

function Menu({changeLoc}:{changeLoc:() => void}){
	const [menuState, setMenuState] = useState("all");
	const socket = io("/");
	return (
		<div className="Menu">
			<Host socketEmit={socket.emit}/>
			<HostList socketOn={socket.on} socketEmit={socket.emit} setMenuState={setMenuState} />
		</div>
	)
}
export default Menu;
