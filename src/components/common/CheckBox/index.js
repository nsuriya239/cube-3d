import React from "react";

const CheckBox = ({ label, value, onChangeEvent }) => {
	return (
		<div className='inputCheckBoxDiv'>
			<label>{label} </label>
			<input
				type='checkbox'
				checked={value}
				onChange={onChangeEvent}
			/>
		</div>
	);
};

export default CheckBox;
