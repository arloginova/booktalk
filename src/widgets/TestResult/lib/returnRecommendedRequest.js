import { booksCollections } from '@/shared/api/booksCollections'
import { detectivesRecommendedBooks } from '@/shared/api/detectivesBooks'
import { fantasyRecommendedBooks } from '@/shared/api/fantasyBooks'
import { horrorsRecommendedBooks } from '@/shared/api/horrorsBooks'
import { notFictionRecommendedBooks } from '@/shared/api/notFictionBooks'
import { romanticRecommendedBooks } from '@/shared/api/romanticBooks'
import {
	EnFirstVariants,
	EnFourthVariants,
	EnSecondVariants,
	EnThirdVariants,
} from '@/shared/store/testSlice'

export const returnRecommendedRequest = ({ first, fourth, second, third }) => {
	let result

	switch (second) {
		case EnSecondVariants.romantic:
			result = {
				text: 'Вы ищете что-то лёгкое\nв жанре романтики',
				queryFn: romanticRecommendedBooks,
			}
			break
		case EnSecondVariants.fantasy:
			result = {
				text: 'Вы ищете что-то вдохновляющее\nв жанре фэнтези',
				queryFn: fantasyRecommendedBooks,
			}
			break
		case EnSecondVariants.notFition:
			result = {
				text: 'Вы ищете что-то познавательное\nв жанре нон-фикшн',
				queryFn: notFictionRecommendedBooks,
			}
			break
		case EnSecondVariants.horrors:
			result = {
				text: 'Вы ищете что-то цепляющее\nв жанре ужасы',
				queryFn: horrorsRecommendedBooks,
			}
			break
		case EnSecondVariants.detectives:
			result = {
				text: 'Вы ищете что-то интригующее\nв жанре детективы',
				queryFn: detectivesRecommendedBooks,
			}
			break
		default:
			result = null
	}

	return result
}