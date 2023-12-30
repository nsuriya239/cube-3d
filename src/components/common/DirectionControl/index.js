import React from "react";
import { UpArrow, DownArrow, LeftArrow, RightArrow } from "../DirectionArrow";
import CircleIcon from "@mui/icons-material/Circle";

const DirectionControl = ({ refValue, enabled }) => {
	const ROTATIONSPEED = 0.1;

	const handleUpwardMovement = () => {
		if (enabled) {
			refValue.current.rotation.x -= ROTATIONSPEED;
		}
	};
	const handleDownwardMovement = () => {
		if (enabled) {
			refValue.current.rotation.x += ROTATIONSPEED;
		}
	};
	const handleLeftwardMovement = () => {
		if (enabled) {
			refValue.current.rotation.y -= ROTATIONSPEED;
		}
	};
	const handleRightwardMovement = () => {
		if (enabled) {
			refValue.current.rotation.y += ROTATIONSPEED;
		}
	};

	return (
		<div className='directionControlDiv'>
			<UpArrow
				enabled={enabled}
				onClickEvent={handleUpwardMovement}
			/>
			<div className='directionControlCenterDiv'>
				<LeftArrow
					enabled={enabled}
					onClickEvent={handleLeftwardMovement}
				/>
				<CircleIcon
					fontSize='large'
					sx={enabled ? {} : { color: "#5a5f61" }}
				/>
				<RightArrow
					enabled={enabled}
					onClickEvent={handleRightwardMovement}
				/>
			</div>
			<DownArrow
				enabled={enabled}
				onClickEvent={handleDownwardMovement}
			/>
		</div>
	);
};

export default DirectionControl;
