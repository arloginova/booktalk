import { UiButton } from '@/shared/ui';
import NextImage from 'next/image';
import { cn } from '@/shared/lib';
import Link from 'next/link';

const bookCls = 'lg-low:min-w-[265px] lg-low:w-[265px] min-w-[210px] w-[210px]';
const imageCls = 'w-full lg-low:h-[410px] h-[325px] object-cover rounded-[15px]';
const btnCls = 'w-full mt-5 lg-low:text-base text-xs';
const btnTextCls = 'flex justify-center items-center gap-x-3';

const Image = ({ className, image, slug, litresLink }) => {
	return (
		<div className={cn(bookCls, className)}>
			<NextImage
				src={image}
				alt={slug}
				width={265}
				height={410}
				className={imageCls}
			/>
			<Link href={litresLink} target='_blank'>
				<UiButton className={btnCls} textClassName={btnTextCls}>
					<NextImage
						src='/images/shared/second-logo.svg'
						alt='Booktalk'
						width={20}
						height={20}
						className='-translate-y-0.5'
					/>
					Купить книгу
				</UiButton>
			</Link>
		</div>
	);
};

export { Image };