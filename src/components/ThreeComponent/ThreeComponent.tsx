import React from 'react';
import { Canvas } from '@react-three/fiber';

import Geometry from '../Geometry';
import './three-component.scss';

const ThreeComponent = () => {
  return (
    <div className="three-component">
      <Canvas>
        <Geometry position={[0, 2, 0]} />
      </Canvas>
    </div>
  );

};

export default React.memo(ThreeComponent);
