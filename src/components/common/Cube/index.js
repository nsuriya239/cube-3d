import React from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Cube = ({ width, height, length, color, position, animate, cubeRef, zoom }) => {
	useFrame(() => {
		if (animate) {
			cubeRef.current.rotation.y += 0.01;
		}
		cubeRef.current.scale.set(zoom, zoom, zoom);
	});

	// Only add data-testid in test environment
	const isTest = process.env.NODE_ENV === "test";

	return (
		<mesh
			ref={cubeRef}
			position={position || [0, 0, 0]}
			onPointerOver={() => (document.body.style.cursor = "pointer")}
			onPointerOut={() => (document.body.style.cursor = "auto")}
			{...(isTest ? { "data-testid": "cube-mesh" } : {})}
		>
			<lineSegments>
				<edgesGeometry
					attach='geometry'
					args={[new THREE.BoxGeometry(width, height, length)]}
				/>
				<lineDashedMaterial
					attach='material'
					color={color || "green"}
					dashSize={1}
					gapSize={0.2}
				/>
			</lineSegments>
		</mesh>
	);
};

export default Cube;
