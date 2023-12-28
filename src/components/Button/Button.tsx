import React, { DOMAttributes } from 'react';
import { Components } from 'kickstand-ui';
import './button.scss';

interface ButtonProps
  extends Components.KsButton,
    Pick<HTMLButtonElement, 'className'>,
    DOMAttributes<HTMLButtonElement> {}

const Button: React.FC<Partial<ButtonProps>> = ({ className = "", children, onClick, ...props }) => {
  return (
    <ks-button class={`ks-button pointer ${className}`} onClick={onClick} {...props}>
      {children}
    </ks-button>
  );
};

export default Button;
