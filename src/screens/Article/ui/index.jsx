import { cn } from '@/shared/lib'
import { ArticleInfo } from '@/widgets/ArticleInfo'
import { ArticleCollections } from '@/widgets/ArticleCollections'

const wrapperCls = 'my-[var(--main-blocks-gap)]'

const ArticleScreen = ({ className, params }) => {
	return (
		<main className={cn(wrapperCls, className)}>
			<ArticleInfo className='mb-[var(--main-blocks-gap)]' params={params} />
			<ArticleCollections />
		</main>
	)
}

export { ArticleScreen }