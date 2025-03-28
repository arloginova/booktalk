'use client'
import { FC, useEffect, useState } from 'react'
import { TClassName } from '@/shared/types'
import Image from 'next/image'
import { cn } from '@/shared/lib'
import { FastAverageColor } from 'fast-average-color'

const wrapperCls = 'rounded-[10px] py-3'
const imgCls =
	'lg-low:w-[105px] w-[85px] lg-low:h-[165px] h-[130px] rounded-[6px] object-cover mx-auto'

interface Props extends TClassName {
	src: string
	slug: string
}

const GradientImage: FC<Props> = ({ src, className, slug }) => {
	const [dominantColor, setDominantColor] = useState('transparent')

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const fac = new FastAverageColor()

			fac
				.getColorAsync(src)
				.then(color => {
					setDominantColor(color.hex)
				})
				.catch(error => {
					console.error('Error getting color:', error)
				})

			return () => fac.destroy()
		}
	}, [src])

	return (
		<div
			className={cn(wrapperCls, className)}
			style={{
				backgroundImage: `linear-gradient(90deg,var(--color-greyBackground),${dominantColor},var(--color-greyBackground)`,
			}}
		>
			<Image className={imgCls} width={105} height={165} alt={slug} src={src} />
		</div>
	)
}

export { GradientImage }
