import React from 'react';
import { Components } from 'kickstand-ui';

interface LoaderProps
  extends Partial<Components.KsLoading>,
    Partial<Pick<HTMLButtonElement, 'className'>> {}

const Loader: React.FC<LoaderProps> = ({ icon = 'loading_ring_spinner', className = '' }) => {
  return <ks-loading class={`ks-loading hydrated ${className}`} icon={icon}></ks-loading>;
};

export default Loader;
