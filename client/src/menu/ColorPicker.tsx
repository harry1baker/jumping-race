import React from "react";

type color = "red" | "green" | "blue" | "purple" | "yellow";
function ColorPicker({data, colorIsPicked}: {data:color[] , colorIsPicked: (c:color) => void}){
	return (
		<div className="ColorPicker">
			{ data.map((e, i) => { 
				return (
					<React.Fragment key={i}>
						<input type="radio" name="colorsToPickButtons" value={e} className="ColorPickerButtons" onChange={e => colorIsPicked(e.target.value as color)}/>
						<label htmlFor={e}><span className="ColorPickerColors" style={{backgroundColor:e}}>{e}</span></label>
					</React.Fragment>
				)
			  }) 
			}
		</div>
	)
}

export default ColorPicker;
