'use client';
import { useEffect, useState } from 'react';
import { cn } from '@/shared/lib';
import { UiRadio } from '../UiRadio';

const wrapperCls = 'flex flex-col gap-y-6';

const UiRadioGroup = ({
						  className,
						  Tag = 'div',
						  radios,
						  radioItemClassName,
						  onChange,
					  }) => {
	const [state, setState] = useState(radios[0].value);

	useEffect(() => {
		onChange && onChange(state);
	}, [state]);

	return (
		<Tag className={cn(wrapperCls, className)}>
			{radios.map(data => (
				<UiRadio
					{...data}
					label={data.value}
					key={data.value}
					className={radioItemClassName}
					checked={state === data.value}
					onClick={() => setState(data.value)}
				/>
			))}
		</Tag>
	);
};

export { UiRadioGroup };