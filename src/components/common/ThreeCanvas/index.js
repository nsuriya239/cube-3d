import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ThreeCanvas = ({ component, needOrbitControls }) => {
	return (
		<Canvas
			style={{ width: "100%", height: "100vh" }}
			camera={{ position: [0, 0, 5] }}
			onCreated={({ gl }) => {
				gl.setClearColor();
			}}>
			{needOrbitControls ? <OrbitControls /> : null}
			{component}
		</Canvas>
	);
};

export default ThreeCanvas;
