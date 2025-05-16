import { cn } from '@/shared/lib'
import Image from 'next/image'

const wrapperCls = 'bg-whiteMain h-[105px] grow rounded-[16px] overflow-hidden'
const imgCls = 'h-full w-full object-cover scale-[2]'

const UiTestDecorImage = ({ className, Tag = 'div' }) => {
	return (
		<Tag className={cn(wrapperCls, className)}>
			<Image
				src='/images/Test/backgrounds/main-background.webp'
				alt='фон'
				width={1405}
				height={715}
				className={imgCls}
			/>
		</Tag>
	)
}

export { UiTestDecorImage }