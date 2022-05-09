import React from 'react';

import styles from './RoundLogo.module.scss';
import { RoundLogoProps } from './RoundLogo.types';

import { publicResource } from '../../utils';

const RoundedLogo: React.FC<RoundLogoProps> = ({source, alt, classname = '', isInlineBlock = false}) => {
	const style = isInlineBlock ? { display: 'inline-block' } : undefined;

	return (
		<div className={`${styles.RoundLogo} ${classname}`} style={style}>
			<img src={publicResource(source)} alt={alt} />
		</div>
	);
};

export default RoundedLogo;