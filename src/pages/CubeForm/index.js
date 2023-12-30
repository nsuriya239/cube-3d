import React, { useState } from "react";
import InputForm from "../../components/common/InputForm";
import CubeWithControls from "../../components/CubeWithControls";

import "./styles.css";

const CubeForm = () => {
	const [formDimensions, setFormDimensions] = useState({ width: 1, height: 1, length: 1 });
	const [cubeDimensions, setCubeDimensions] = useState({ width: 1, height: 1, length: 1 });

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		let cubeNewValue;
		let newValue = parseFloat(value) || 0;

		// Update form dimensions
		setFormDimensions((prevDimensions) => ({ ...prevDimensions, [name]: newValue }));

		// If the input value is greater than or equal to 3, apply modulo 4 for cube dimensions
		cubeNewValue = (newValue % 4) + 1;
		setCubeDimensions((prevDimensions) => ({ ...prevDimensions, [name]: cubeNewValue }));
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
			<CubeWithControls dimensions={cubeDimensions} />
		</div>
	);
};

export default CubeForm;
