import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Cube = ({ width, height, length, color, position, animate, cubeRef, zoom }) => {
	// const cubeRef = useRef();
	useFrame(() => {
		if (animate) {
			cubeRef.current.rotation.y += 0.01;
		}
		cubeRef.current.scale.set(zoom, zoom, zoom);
	});

	return (
		<mesh
			ref={cubeRef}
			position={position || [0, 0, 0]}>
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
