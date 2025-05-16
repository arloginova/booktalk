import React from 'react';

const HeartIcon = ({ className, fill }) => {
	return (
		<svg
			width='18'
			height='16'
			viewBox='0 0 18 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
			color={fill || 'black'}
		>
			<path
				d='M5.625 1.5C3.34688 1.5 1.5 3.3652 1.5 5.66594C1.5 9.83188 6.375 13.6191 9 14.5C11.625 13.6191 16.5 9.83188 16.5 5.66594C16.5 3.3652 14.6531 1.5 12.375 1.5C10.98 1.5 9.74625 2.1995 9 3.27015C8.61956 2.72304 8.11423 2.27653 7.52676 1.96841C6.93929 1.66029 6.28697 1.49962 5.625 1.5Z'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export { HeartIcon };