import { useState } from "react";
import ColorPicker from "./ColorPicker";

type color = "red" | "blue" | "green" | "purple" | "yellow";
type states = "default" | "pickingColor" | "pickedColor" | "waiting";

let chosenColor: color | null = null;

function decider(state: states, colors:color[], colorIsPicked: (c:color| null) => void, setState: (s:states) => void, readyForGame:() => void){
	if (state === "default"){
		return <input className="joinButton" type="button" value="Join" onClick={() => setState("pickingColor")}/>
	} else if (state==="waiting"){
		return <p className="waitingMessage">waiting...</p>
	} else {
		return (<>
				<ColorPicker data={colors} colorIsPicked={colorIsPicked}/>
				<input className="colorChoseButton" disabled={state==="pickingColor"} type="button" value="Chose" onClick={() => readyForGame()}/>
				<input className="colorChoseButtonBack" type="button" value="Back" onClick={() => colorIsPicked(null)}/>
			</>
			)
	}
}

function HostListElem({data, socketEmit, setChosen}: {
data:[string, number, color[]],
 socketEmit?:(event:string, data:string) => void,
 setChosen?:(c:[string, number, color[]]) => void
}){
		const [state, setState] = useState<states>(socketEmit? "default" : "waiting");
		function colorIsPicked(c:color | null){
			chosenColor = c
			if (c === null){
				setState("default")
			} else {
				setState("pickedColor");
			}
		}
		return (
			<div className="HostListElem">
				<p className="Hostname" >Hostname: {data[0]}</p>
				<p className="Members" >Members: {data[1]}/5</p>
				{socketEmit && setChosen? decider(state, data[2], colorIsPicked, setState, () => {
					//socketEmit("readyForGame", chosenColor);
					setState("waiting");
					setChosen(data);
				}): <p className="waitingMessage">waiting...</p>}
			</div>
		)
}

export default HostListElem;
