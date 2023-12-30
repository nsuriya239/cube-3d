import React from "react";
import Tooltip from "@mui/material/Tooltip";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";

const ZoomControl = ({ setZoom }) => {
	const ZOOM_FACTOR = 1.2;

	const zoomIn = () => {
		setZoom((prevZoom) => prevZoom * 1.2); // Increase the zoom factor
	};

	const zoomOut = () => {
		setZoom((prevZoom) => Math.max(0.1, prevZoom / 1.2)); // Decrease the zoom factor with a lower limit
	};

	return (
		<div className='zoomControlDiv'>
			<Tooltip
				title='Zoom In'
				placement='left'>
				<ZoomInIcon
					fontSize='large'
					onClick={zoomIn}
				/>
			</Tooltip>
			<Tooltip
				title='Zoom Out'
				placement='top-end'>
				<ZoomOutIcon
					fontSize='large'
					onClick={zoomOut}
				/>
			</Tooltip>
		</div>
	);
};

export default ZoomControl;
