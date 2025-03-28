'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { GridElemInfo } from '@/entities/GridElemInfo'
import Image from 'next/image'
import { GradientBlock } from './GradientBlock'
import { useScreen } from '@/shared/hooks'
import { LG_BIG, MD_MID } from '@/shared/constants'
import { UiGridElemWrapper } from '@/shared/ui'
import { useRouter } from 'next/navigation'

const wrapperCls =
	'grid lg-big:grid-rows-[450px_400px] md-mid:grid-rows-[295px_275px] gap-[var(--main-blocks-gap)] '
const columnCls = 'flex md-mid:flex-row flex-col gap-[inherit]'
const lowItemCls = 'lg-mid:w-138 md-mid:w-88 w-full'
const bigItemCls = 'grow'
const gradientCls =
	'bg-linear-to-t from-whiteMain to-orangeMain md-mid:h-auto h-[295px]'

const testBlockCls = 'md-mid:h-auto h-[295px]'
const aboutPlatformCls = 'md-mid:h-auto h-[295px]'
const aboutPlatformImageCls = 'flex justify-center items-center h-[250px]'
const booksClubs = 'md-mid:h-auto h-[295px]'

interface Props extends TClassName { }

const HomeHero: FC<Props> = ({ className }) => {
	const router = useRouter()
	const { screenWidth } = useScreen()

	return (
		<section className={cn(wrapperCls, className)}>
			<div className={columnCls}>
				<GridElemInfo
					plaque='тест'
					title='тест'
					subtitle={
						screenWidth >= LG_BIG ? (
							<>
								Не хотите тратить время на поиск?
								<br />
								Пройдите быстрый тест и получите
								<br />
								подборку книг на основе ваших
								<br />интересов
							</>
						) : (
							<>
								Пройдите быстрый тест
								<br />и получите подборку книг
								<br />на основе ваших интересов
							</>
						)
					}
					button={{
						text: 'пройти тест', onClick: () => {
							router.push('/test')
						}
					}}
					className={cn(lowItemCls, testBlockCls)}
				>
					<Image
						className='absolute right-0 bottom-0 h-auto lg-big:w-[185px] md-mid:w-[130px] w-[135px]'
						src='/images/Home/backgrounds/test.png'
						alt='Booktalk quiz'
						width={185}
						height={370}
					/>
				</GridElemInfo>
				<GradientBlock className={cn(bigItemCls, gradientCls)}></GradientBlock>
			</div>
			<div className={columnCls}>
				<GridElemInfo
					withParentPaddings
					plaque='о платформе'
					title='кто мы?'
					subtitle={
						screenWidth >= LG_BIG ? (
							<>
								Платформа для поиска новых
								<br />
								книг, знакомства с любителями
								<br />
								литературы и изучения
								<br />
								рецензий
							</>
						) : (
							<>
								Платформа для поиска <br />новых книг, знакомства
								<br />с любителями литературы
								<br />и изучения рецензий
							</>
						)
					}
					className={cn(bigItemCls, aboutPlatformCls)}
				>
					<div className='absolute right-0 bottom-0 pb-[inherit] pr-[inherit] lg-big:w-[430px] w-[220px] h-auto'>
						{screenWidth >= MD_MID ? (
							<Image
								className=''
								src='/images/Home/backgrounds/about-platform.png'
								alt='Booktalk quiz'
								width={430}
								height={295}
							/>
						) : null}
					</div>
				</GridElemInfo>
				{screenWidth < MD_MID ? (
					<UiGridElemWrapper className={aboutPlatformImageCls}>
						<Image
							src='/images/Home/backgrounds/about-platform.png'
							alt='Booktalk quiz'
							width={268}
							height={183}
						/>
					</UiGridElemWrapper>
				) : null}
				<GridElemInfo
					plaque='книжные клубы'
					title='книжный клуб'
					subtitle={
						<>
							Различные клубы для обсуждения в нашем
							<br />
							книжном telegram канале
						</>
					}
					button={{
						text: '@btalkcom',
						onClick: () => { window.location.href = 'https://t.me/btalkcom' }
					}}
					className={cn(lowItemCls, booksClubs)}
				/>
			</div>
		</section>
	)
}

export { HomeHero }
