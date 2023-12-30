import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Tooltip } from "@mui/material";

export const UpArrow = ({ onClickEvent, enabled }) => {
	return (
		<Tooltip
			title='Up'
			placement='top'>
			<KeyboardArrowUpIcon
				onClick={onClickEvent}
				fontSize='large'
				sx={enabled ? {} : { color: "#5a5f61" }}
			/>
		</Tooltip>
	);
};

export const DownArrow = ({ onClickEvent, enabled }) => {
	return (
		<Tooltip
			title='Down'
			placement='bottom'>
			<KeyboardArrowDownIcon
				onClick={onClickEvent}
				fontSize='large'
				sx={enabled ? {} : { color: "#5a5f61" }}
			/>
		</Tooltip>
	);
};

export const LeftArrow = ({ onClickEvent, enabled }) => {
	return (
		<Tooltip
			title='Left'
			placement='left'>
			<KeyboardArrowLeftIcon
				onClick={onClickEvent}
				fontSize='large'
				sx={enabled ? {} : { color: "#5a5f61" }}
			/>
		</Tooltip>
	);
};

export const RightArrow = ({ onClickEvent, enabled }) => {
	return (
		<Tooltip
			title='Right'
			placement='right'>
			<KeyboardArrowRightIcon
				onClick={onClickEvent}
				fontSize='large'
				sx={enabled ? {} : { color: "#5a5f61" }}
			/>
		</Tooltip>
	);
};
