import React, { useEffect, useState } from "react";
import InputForm from "../common/InputForm";
import Cube from "../common/Cube";
import ThreeCanvas from "../common/ThreeCanvas";
import Button from "../common/Button";
import CheckBox from "../common/CheckBox";
import "./styles.css";

const CubeForm = () => {
	const [formDimensions, setFormDimensions] = useState({ width: 1, height: 1, length: 1 });
	const [cubeDimensions, setCubeDimensions] = useState({ width: 1, height: 1, length: 1 });
	const [animateToggle, setAnimateToggle] = useState(false);
	const [orbitControlToggle, setOrbitControlToggle] = useState(false);

	useEffect(() => {}, [animateToggle, orbitControlToggle]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		let cubeNewValue;
		let newValue = parseFloat(value) || 0;

		// Update form dimensions
		setFormDimensions((prevDimensions) => ({ ...prevDimensions, [name]: newValue }));

		// If the input value is greater than or equal to 3, apply modulo 4 for cube dimensions
		// if (newValue >= 3) {
		cubeNewValue = (newValue % 4) + 1;
		setCubeDimensions((prevDimensions) => ({ ...prevDimensions, [name]: cubeNewValue }));
		// } else {
		// 	// If the input value is less than 3, update cube dimensions without modulo
		// 	setCubeDimensions((prevDimensions) => ({ ...prevDimensions, [name]: newValue }));
		// }
	};

	const handleAnimationToggle = (e) => {
		setAnimateToggle(!animateToggle);
	};

	const handleOrbitControlToggle = (e) => {
		setOrbitControlToggle(!orbitControlToggle);
	};

	const inputFields = {
		Height: {
			type: "number",
			name: "height",
			state: formDimensions.height,
		},
		Width: {
			type: "number",
			name: "width",
			state: formDimensions.width,
		},
		Length: {
			type: "number",
			name: "length",
			state: formDimensions.length,
		},
	};

	return (
		<div className='cubeFormDiv'>
			<InputForm
				inputFields={inputFields}
				onInputChangeEvent={handleInputChange}
			/>
			<CheckBox
				label={"Animate"}
				value={animateToggle}
				onChangeEvent={handleAnimationToggle}
			/>
			<CheckBox
				label={"Need Orbit Control"}
				value={orbitControlToggle}
				onChangeEvent={handleOrbitControlToggle}
			/>
			<ThreeCanvas
				component={
					<Cube
						{...cubeDimensions}
						animate={animateToggle}
					/>
				}
				needOrbitControls={orbitControlToggle}
			/>
		</div>
	);
};

export default CubeForm;
