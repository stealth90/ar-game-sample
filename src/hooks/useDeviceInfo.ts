import { useState, useEffect } from 'react';
import { DeviceType } from '../types';

const useDeviceInfo = () => {
  const [device, setDevice] = useState<DeviceType>('Mobile');

  useEffect(() => {
    const handleDeviceDetection = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
      const isTablet = /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent);

      if (isMobile) {
        setDevice('Mobile');
      } else if (isTablet) {
        setDevice('Tablet');
      } else {
        setDevice('Desktop');
      }
    };

    handleDeviceDetection();
  }, []);
  return device;
};

export default useDeviceInfo;
