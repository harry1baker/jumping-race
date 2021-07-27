import { useState } from "react";
import ColorPicker from "./ColorPicker";
type color =  "red" | "green" | "blue" | "purple" | "yellow";
const hostData:{name:string, color:color | null} =  {
	hostname:"",
	color:null
}
function Host ({socketEmit, setMenuState}:{socketEmit: (event: string, data:string) => void, setMenuState:(s:string) => void}){
	const [notReady, setNotReady] = useState<boolean>(true);
	let pickedHostName: string = "";
	let pickedColor: color | null = null;
        function changeNotReady(){
		console.log(pickedHostName, pickedColor);
		if (hostData.name && hostData.color){
			setNotReady(false);
		} else {
			setNotReady(true);
		}
	}
	function readyForGame(){
		//socketEmit("hostReadyForGame", JSON.stringify(hostData));
		setMenuState("hostOnly");
	}
	return (
		<div className="Host">
			<label>
				Hostname:
				<input type="text" onChange={ev => {
					hostData.hostname = ev.target.value
					changeNotReady()
				}}/>
			</label>
			<ColorPicker data={["red", "green", "blue", "purple", "yellow"] as color[]} colorIsPicked={(c:color) => {
					hostData.color=c
					changeNotReady()
				}} />
			<input type="button" value="Host" disabled={notReady} onClick={readyForGame}/>
		</div>
	)
}
export default Host;
