import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { ArticleInfo } from '@/widgets/ArticleInfo'
import { TDynamicParams } from '../types/dynamicParams'
import { ArticleCollections } from '@/widgets/ArticleCollections'

const wrapperCls = 'my-[var(--main-blocks-gap)]'

interface Props extends TClassName {
	params: TDynamicParams
}

const ArticleScreen: FC<Props> = ({ className, params }) => {
	return (
		<main className={cn(wrapperCls, className)}>
			<ArticleInfo className='mb-[var(--main-blocks-gap)]' params={params} />
			<ArticleCollections />
		</main>
	)
}

export { ArticleScreen }
