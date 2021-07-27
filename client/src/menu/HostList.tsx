import { useState } from "react";
import HostListElem from "./HostListElem";

type color = "red" | "green" | "blue" | "purple" | "yellow";

function HostList({socketOn, socketEmit, setMenuState}: {socketOn: (event:string, callback: (data:string) => void) => void, socketEmit: (event:string, data:string) => void, setMenuState:(s: string) => void}){
	const [hosts, setHosts] = useState(new Array<[string, number, color[]]>(
 ["adib", 3, ["red", "green"]],
 ["adib2", 2, ["blue", "purple", "yellow"]],
 ["adib3", 1, ["green", "purple", "blue", "red"]]
));

	const [chosen, setChosen] = useState<[string, number, color[]] | null>(null);
	function setHostListOnly(c:[string, number, color[]]){
		setChosen(c);
		setMenuState("hostListOnly");
	}
	socketOn("hostList", (data:string) => {
		setHosts(JSON.parse(data));
	});
	return (
		<div className="HostList">
			{chosen? <HostListElem data={chosen} />: hosts.map((e, i) => {
				return <HostListElem key={i} data={e} socketEmit={socketEmit} setChosen={setHostListOnly} />
			})}
		</div>
	)	
}

export default HostList;
