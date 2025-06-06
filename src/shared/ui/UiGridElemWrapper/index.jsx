import React from 'react';
import { cn } from '@/shared/lib';
import { UiPlaque } from '../UiPlaque';

const wrapperCls =
	'lg-big:rounded-[20px] rounded-2xl lg-big:p-8 xs-big:p-5 p-4 bg-whiteMain';
const plaquesCls = 'flex gap-x-2';

const UiGridElemWrapper = ({
							   className,
							   plaque,
							   plaqueClassName,
							   children,
							   Tag = 'div',
						   }) => {
	return (
		<Tag className={cn(wrapperCls, className)}>
			{plaque ? (
				typeof plaque === 'string' ? (
					<UiPlaque className={plaqueClassName}>{plaque}</UiPlaque>
				) : (
					<div className={plaquesCls}>
						{plaque.map((text, index) => (
							<UiPlaque
								key={text}
								className={plaqueClassName}
								theme={index === plaque.length - 1 ? 'active' : 'inactive'}
							>
								{text}
							</UiPlaque>
						))}
					</div>
				)
			) : null}
			{children}
		</Tag>
	);
};

export { UiGridElemWrapper };