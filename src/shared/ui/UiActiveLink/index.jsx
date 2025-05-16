'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { cn } from '@/shared/lib';

const UiActiveLink = ({
						  href,
						  strict,
						  activeClassName,
						  className,
						  children,
						  ...linkProps
					  }) => {
	const path = usePathname();
	const params = useSearchParams();
	const fullPath = `${params}`.length
		? `${path}?${decodeURIComponent(`${params}`)}`.replace('+', ' ')
		: path;

	const checkIsActive = () => {
		return strict ? fullPath === href : path === href;
	};

	return (
		<Link
			href={href}
			{...linkProps}
			className={cn(className, {
				[activeClassName || '']: checkIsActive(),
			})}
		>
			{typeof children === 'function'
				? children({ isActive: checkIsActive() })
				: children}
		</Link>
	);
};

export { UiActiveLink };