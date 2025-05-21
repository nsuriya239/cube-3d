import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Cube from './index'; // Assuming the component is exported from index.js
import { useFrame } from '@react-three/fiber';

// Mock useFrame from @react-three/fiber as it's not relevant to this test
// and might cause issues if not handled.
jest.mock('@react-three/fiber', () => ({
  ...jest.requireActual('@react-three/fiber'), // Import and retain default exports
  useFrame: jest.fn(), // Mock useFrame specifically
}));

describe('Cube Component', () => {
  let mockCubeRefObject; // This object will be passed as the ref prop

  beforeEach(() => {
    // Initialize the .current property of the ref object before each test.
    // This represents the Three.js mesh-like object.
    mockCubeRefObject = {
      current: {
        rotation: { y: 0 },
        scale: { set: jest.fn() },
      },
    };
    // Ensure a consistent starting state for cursor
    document.body.style.cursor = 'auto';
    useFrame.mockClear(); // Clear useFrame mock calls from previous tests
  });

  afterEach(() => {
    // Reset cursor after each test to avoid side effects
    document.body.style.cursor = 'auto';
    // Clear mocks on the .current object if it and its methods exist
    if (mockCubeRefObject.current && mockCubeRefObject.current.scale && mockCubeRefObject.current.scale.set) {
        mockCubeRefObject.current.scale.set.mockClear();
    }
    // It's also good practice to reset the .current to a known state if needed,
    // but beforeEach handles re-initialization.
    useFrame.mockClear();
  });

  test('should change cursor to pointer on mouse over and back to auto on mouse out', () => {
    // For this test, the internal state of mockCubeRefObject.current doesn't matter
    // as much as React assigning the DOM element to it, which is fine.
    render(
      <Cube
        width={1}
        height={1}
        length={1}
        cubeRef={mockCubeRefObject}
        animate={false}
        zoom={1}
      />
    );

    const meshElement = screen.getByTestId('cube-mesh');
    // After render, React sets mockCubeRefObject.current to the DOM element.
    // This is fine for this test as we are testing DOM event handlers.

    expect(document.body.style.cursor).toBe('auto'); // Check initial state

    fireEvent.pointerOver(meshElement);
    expect(document.body.style.cursor).toBe('pointer');

    fireEvent.pointerOut(meshElement);
    expect(document.body.style.cursor).toBe('auto');
  });

  test('should call useFrame and update scale', () => {
    const zoomLevel = 2;
    // This render will call useFrame(callback) and set mockCubeRefObject.current = DOM element
    render(
      <Cube
        width={1}
        height={1}
        length={1}
        cubeRef={mockCubeRefObject}
        animate={false}
        zoom={zoomLevel}
      />
    );

    expect(useFrame).toHaveBeenCalled(); // Check if useFrame was called

    // Manually restore mockCubeRefObject.current to the shape expected by the useFrame callback
    // This is because React's <mesh ref={mockCubeRefObject} /> would have set .current to the DOM element.
    const scaleSetMock = jest.fn();
    mockCubeRefObject.current = {
      rotation: { y: 0 }, // Provide a default rotation object
      scale: { set: scaleSetMock },
    };

    if (useFrame.mock.calls.length > 0) {
      const frameCallback = useFrame.mock.calls[useFrame.mock.calls.length - 1][0]; // Get the latest callback
      frameCallback(); // Execute the useFrame callback
    }
    expect(scaleSetMock).toHaveBeenCalledWith(zoomLevel, zoomLevel, zoomLevel);
  });

  test('should update rotation if animate is true', () => {
    const initialRotationY = 0.5; // Arbitrary starting rotation
    // This render will call useFrame(callback) and set mockCubeRefObject.current = DOM element
    render(
      <Cube
        width={1}
        height={1}
        length={1}
        cubeRef={mockCubeRefObject}
        animate={true}
        zoom={1}
      />
    );

    expect(useFrame).toHaveBeenCalled();

    // Manually restore mockCubeRefObject.current for the test
    const scaleSetMock = jest.fn();
    mockCubeRefObject.current = {
      rotation: { y: initialRotationY },
      scale: { set: scaleSetMock },
    };

    if (useFrame.mock.calls.length > 0) {
      const frameCallback = useFrame.mock.calls[useFrame.mock.calls.length - 1][0];
      frameCallback(); // Execute the useFrame callback
    }
    expect(mockCubeRefObject.current.rotation.y).toBeCloseTo(initialRotationY + 0.01);
    expect(scaleSetMock).toHaveBeenCalledWith(1, 1, 1); // Also verify scale update
  });
});
