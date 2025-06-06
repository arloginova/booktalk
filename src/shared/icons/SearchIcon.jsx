import React from 'react';

const SearchIcon = ({ className, fill }) => {
	return (
		<svg
			width='22'
			height='22'
			viewBox='0 0 22 22'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			color={fill || 'black'}
			className={className}
		>
			<path
				d='M16.5556 16.5556L21 21M1 9.88889C1 12.2464 1.93651 14.5073 3.6035 16.1743C5.27049 17.8413 7.53141 18.7778 9.88889 18.7778C12.2464 18.7778 14.5073 17.8413 16.1743 16.1743C17.8413 14.5073 18.7778 12.2464 18.7778 9.88889C18.7778 7.53141 17.8413 5.27049 16.1743 3.6035C14.5073 1.93651 12.2464 1 9.88889 1C7.53141 1 5.27049 1.93651 3.6035 3.6035C1.93651 5.27049 1 7.53141 1 9.88889Z'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}

export { SearchIcon };