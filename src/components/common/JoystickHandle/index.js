import React from "react";

import "./styles.css";

const JoystickHandle = ({ refValue }) => {
	let isDragging = false;
	let startX, startY;

	const handleJoystickMove = (e) => {
		if (isDragging) {
			const deltaX = e.clientX - startX;
			const deltaY = e.clientY - startY;

			// Adjust cube rotation based on joystick movement
			if (refValue.current) {
				refValue.current.rotation.y += deltaX * 0.005;
				refValue.current.rotation.x += deltaY * 0.005;
			}

			// Update starting position for the next movement
			startX = e.clientX;
			startY = e.clientY;
		}
	};

	const startJoystickDrag = (e) => {
		isDragging = true;
		startX = e.clientX;
		startY = e.clientY;
	};

	const stopJoystickDrag = () => {
		isDragging = false;
	};

	return (
		<div
			className='joystick-container'
			// onMouseMove={handleJoystickMove}
			onMouseDown={startJoystickDrag}
			onMouseUp={stopJoystickDrag}
			onMouseLeave={stopJoystickDrag}>
			<div
				className='joystick-handle'
				draggable={true}
				onDrag={handleJoystickMove}
			/>
		</div>
	);
};

export default JoystickHandle;
