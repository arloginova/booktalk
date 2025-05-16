'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/shared/lib'
import { FastAverageColor } from 'fast-average-color'

const wrapperCls = 'py-3'
const imgCls = 'lg-low:w-[105px] w-[85px] rounded-[6px] object-cover mx-auto'

const GradientImage = ({ src, className, slug, imageClassName }) => {
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
			<Image className={cn(imgCls, imageClassName)} width={105} height={165} alt={slug} src={src} />
		</div>
	)
}

export { GradientImage }