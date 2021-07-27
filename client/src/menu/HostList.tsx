import { useState } from "react";
import HostListElem from "./HostListElem";

type color = "red" | "green" | "blue" | "purple" | "yellow";

function HostList({socketOn, socketEmit}: {socketOn: (event:string, callback: (data:string) => void) => void, socketEmit: (event:string, data:string) => void}){
	const [hosts, setHosts] = useState(new Array<[string, number, color[]]>(["adib", 3, ["red", "green"]]));
	socketOn("hostList", (data:string) => {
		setHosts(JSON.parse(data));
	});
	return (
		<div className="HostList">
			{hosts.map((e, i) => {
				return <HostListElem key={i} data={e} socketEmit={socketEmit} />
			})}
		</div>
	)	
}

export default HostList;
