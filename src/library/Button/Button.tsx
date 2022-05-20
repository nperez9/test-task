import React from 'react';

import { ButtonProps, ButtonType } from './Button.types';
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({ children, click, type = 'primary', className = '' }) => {
  return (
    <button className={`${styles.Button} ${styles[type]} ${className}`} onClick={() => { click() }}>
      {children}
    </button>
  );
};

export default Button;