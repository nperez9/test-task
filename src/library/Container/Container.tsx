import React from 'react';

import styles from './Container.module.scss';
import { ContainerProps } from './Container.types';

const Container: React.FC<ContainerProps> = ({ children,  classname = ''}) => {
  return <div className={`${styles.container} ${classname}`}> {children} </div>;
};

export default Container;
