'use client'
import { FC, useEffect, useState } from 'react'
import { TClassName, TTag } from '@/shared/types'
import { cn } from '@/shared/lib'
import { UiRadio, UiRadioProps } from '../UiRadio'

const wrapperCls = 'flex flex-col gap-y-6'

interface TUiRadioGroupProps extends TClassName {
	Tag?: TTag
	radios: (Omit<UiRadioProps, 'value' | 'className' | 'checked' | 'onClick'> & {
		value: string
	})[]
	radioItemClassName?: string
	onChange?: (params: string) => void
}

const UiRadioGroup: FC<TUiRadioGroupProps> = ({
	className,
	Tag = 'div',
	radios,
	radioItemClassName,
	onChange,
}) => {
	const [state, setState] = useState<string>(radios[0].value)

	useEffect(() => {
		onChange && onChange(state)
	}, [state])

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
	)
}

export { UiRadioGroup, type TUiRadioGroupProps }
