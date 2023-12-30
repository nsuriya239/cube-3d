import React from "react";
import Tooltip from "@mui/material/Tooltip";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";

const Icon3d = ({ title, placement, disableTitle, stateValue, onClickEvent }) => {
	return (
		<Tooltip
			title={stateValue ? disableTitle : title}
			placement={placement || "bottom"}>
			<ThreeDRotationIcon
				onClick={onClickEvent}
				sx={{ fontSize: 25 }}
			/>
		</Tooltip>
	);
};

export default Icon3d;
