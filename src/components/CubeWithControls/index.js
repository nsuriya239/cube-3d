import React, { useRef, useEffect, useState } from "react";
import Cube from "../../components/common/Cube";
import ThreeCanvas from "../../components/common/ThreeCanvas";
import "./styles.css";
import DirectionControl from "../common/DirectionControl";
import ZoomControl from "../common/ZoomControl";
import Icon3d from "../common/Icon3d";
import Icon360 from "../common/Icon360";

const CubeWithControls = ({ dimensions }) => {
	const cubeRef = useRef();
	const [animateToggle, setAnimateToggle] = useState(false);
	const [orbitControlToggle, setOrbitControlToggle] = useState(false);
	const [zoom, setZoom] = useState(1);

	useEffect(() => {}, [animateToggle, orbitControlToggle]);

	const handleAnimationToggle = (e) => {
		setAnimateToggle(!animateToggle);
	};

	const handleOrbitControlToggle = (e) => {
		setOrbitControlToggle(!orbitControlToggle);
	};

	return (
		<div className='cubeCanvasDiv'>
			<div className='controlDiv'>
				<Icon3d
					title='Enable 3D control'
					disableTitle='Disable 3D control'
					placement='left'
					stateValue={orbitControlToggle}
					onClickEvent={handleOrbitControlToggle}
				/>
				<Icon360
					title='Auto rotate'
					disableTitle='Disable Auto rotate'
					placement='left'
					stateValue={animateToggle}
					onClickEvent={handleAnimationToggle}
				/>
			</div>
			<ThreeCanvas
				component={
					<Cube
						{...dimensions}
						animate={animateToggle}
						cubeRef={cubeRef}
						zoom={zoom}
					/>
				}
				orbitControl={orbitControlToggle}
			/>
			<ZoomControl setZoom={setZoom} />
			<DirectionControl
				refValue={cubeRef}
				enabled={orbitControlToggle}
			/>
		</div>
	);
};

export default CubeWithControls;
