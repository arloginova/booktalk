import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'

interface TUiSpinnerProps extends TClassName {}

const UiSpinner: FC<TUiSpinnerProps> = ({ className }) => {
	return (
		<span
			className={cn(
				'size-[48px] rounded-full relative animate-rotate before:box-border before:absolute before:inset-0 before:rounded-full before:border-[5px] before:border-solid before:border-orangeMain before:animate-prixClipFix',
				className
			)}
		/>
	)
}

export { UiSpinner, type TUiSpinnerProps }
