import React from "react";

const Button = ({ text, onClickEvent }) => {
	return (
		<div className='buttonDiv'>
			<button onClick={onClickEvent}>{text}</button>
		</div>
	);
};

export default Button;
