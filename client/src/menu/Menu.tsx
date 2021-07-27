import { io } from "socket.io-client";
import HostList from "./HostList";

function Menu({changeLoc}:{changeLoc:() => void}){
	const socket = io("/");
	return (
		<div className="Menu">
			<HostList socketOn={socket.on} socketEmit={socket.emit} />
		</div>
	)
}
export default Menu;
