import React from 'react';

const ArrowIcon = ({ className, fill }) => {
	return (
		<svg
			width='42'
			height='42'
			viewBox='0 0 42 42'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
			color={fill || '#101828'}
		>
			<path
				d='M21 29L29 21M29 21L21 13M29 21H13M41 21C41 32.0457 32.0457 41 21 41C9.9543 41 1 32.0457 1 21C1 9.9543 9.9543 1 21 1C32.0457 1 41 9.9543 41 21Z'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}

export { ArrowIcon };