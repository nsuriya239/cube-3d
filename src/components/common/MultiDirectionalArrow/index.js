import React from "react";
import Tooltip from "@mui/material/Tooltip";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";

const MultiDirectionalArrow = ({ title, placement, disableTitle, stateValue, onClickEvent }) => {
	return (
		<Tooltip
			title={!stateValue ? title : disableTitle}
			placement={placement || "bottom"}>
			<ControlCameraIcon
				onClick={onClickEvent}
				sx={{ fontSize: 25 }}
			/>
		</Tooltip>
	);
};

export default MultiDirectionalArrow;
