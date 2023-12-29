import React from "react";
import "./styles.css";

const createInputFields = (key, value, onChangeEvent) => {
	return (
		<div
			className='inputFormFieldsDiv'
			key={key}>
			<label>{key} </label>
			<input
				type={value.type}
				name={value.name}
				value={value.state}
				onChange={onChangeEvent}
			/>
		</div>
	);
};

const InputForm = ({ inputFields, onInputChangeEvent }) => {
	const inputFieldElements = Object.entries(inputFields).map(([key, value]) => {
		return createInputFields(key, value, onInputChangeEvent);
	});

	return (
		<div className='inputFormDiv'>
			<form className='inputForm'>{inputFieldElements}</form>
		</div>
	);
};

export default InputForm;
