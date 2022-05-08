import React from 'react';

import { RoundLogoProps } from './RoundLogo.types';

const RoundedLogo: React.FC<RoundLogoProps> = ({source, alt = '', classname = ''}) => {
	return (
		<div className={`${classname}`}>
			<img src={source} alt={alt} />
		</div>
	);
};

export default RoundedLogo;