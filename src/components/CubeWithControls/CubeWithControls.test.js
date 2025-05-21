import React from 'react';
import { render, screen } from '@testing-library/react';
import CubeWithControls from './index'; // Assuming the component is exported from index.js

// Mock child components that are not relevant to this test or might cause issues during rendering.
jest.mock('../../components/common/Cube', () => () => <div data-testid="mock-cube" />);
jest.mock('../../components/common/ThreeCanvas', () => (props) => (
  <div data-testid="mock-three-canvas" data-orbitcontrol={props.orbitControl}>
    {props.component}
  </div>
));
jest.mock('../common/DirectionControl', () => () => <div data-testid="mock-direction-control" />);
jest.mock('../common/ZoomControl', () => () => <div data-testid="mock-zoom-control" />);
// Icon3d is the component we are testing the state of, so we don't mock it.
// jest.mock('../common/Icon3d', () => ({ onClickEvent, stateValue, title, disableTitle, placement }) => (
//   <div title={stateValue ? disableTitle : title} data-testid="mock-icon3d" />
// ));
jest.mock('../common/Icon360', () => ({ onClickEvent, stateValue, title, disableTitle, placement }) => (
    <div title={stateValue ? disableTitle : title} data-testid="mock-icon360" />
));
jest.mock('../common/MultiDirectionalArrow', () => ({ onClickEvent, stateValue, title, disableTitle, placement }) => (
    <div title={stateValue ? disableTitle : title} data-testid="mock-multidirectional-arrow" />
));


describe('CubeWithControls', () => {
  test('should have 3D orbit controls enabled by default', () => {
    render(<CubeWithControls dimensions={{ width: 1, height: 1, length: 1 }} />);
    // The Icon3d component uses a Tooltip whose title changes based on the orbitControlToggle state.
    // When true (enabled), the title is "Disable 3D control".
    // We need to wait for the tooltip to appear if it's async.
    // However, Material UI Tooltips are often rendered immediately with their title.
    // The Icon3d (ThreeDRotationIcon) has the title as an aria-label on the SVG itself.
    const icon3dElement = screen.getByLabelText(/disable 3d control/i);
    expect(icon3dElement).toBeInTheDocument();
  });
});
