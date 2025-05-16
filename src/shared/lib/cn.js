import clsx from 'clsx';
import { twMerge } from 'tw-merge';

export const cn = (...inputs) => twMerge(clsx(inputs));