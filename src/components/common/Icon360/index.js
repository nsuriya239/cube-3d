import React from "react";
import Tooltip from "@mui/material/Tooltip";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";

const Icon360 = ({ title, placement, disableTitle, stateValue, onClickEvent }) => {
	return (
		<Tooltip
			title={!stateValue ? title : disableTitle}
			placement={placement || "bottom"}>
			<ThreeSixtyIcon
				onClick={onClickEvent}
				sx={{ fontSize: 25 }}
			/>
		</Tooltip>
	);
};

export default Icon360;
