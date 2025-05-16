import { cn } from '@/shared/lib'
import { BookCollections } from '@/widgets/BookCollections'
import { BookInfo } from '@/widgets/BookInfo'

const wrapperCls = 'my-[var(--main-blocks-gap)]'

const BookScreen = ({ className, params }) => {
	return (
		<main className={cn(wrapperCls, className)}>
			<BookInfo params={params} className='mb-[var(--main-blocks-gap)]' />
			<BookCollections />
		</main>
	)
}

export { BookScreen }