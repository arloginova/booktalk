import { booksCollections } from '@/shared/api/booksCollections'
import { fantasyRecommendedBooks } from '@/shared/api/fantasyBooks'
import { horrorsRecommendedBooks } from '@/shared/api/horrorsBooks'
import { notFictionRecommendedBooks } from '@/shared/api/notFictionBooks'
import { romanticRecommendedBooks } from '@/shared/api/romanticBooks'
import {
	EnFirstVariants,
	EnFourthVariants,
	EnSecondVariants,
	EnThirdVariants,
	TTestProps,
} from '@/shared/store/testSlice'

export const returnRecommendedRequest = ({
	first,
	fourth,
	second,
	third,
}: TTestProps) => {
	let result
	if (
		(first === EnFirstVariants.inspired || first === EnFirstVariants.joyful) &&
		second === EnSecondVariants.romantic &&
		(third === EnThirdVariants.mid || third === EnThirdVariants.more) &&
		fourth === EnFourthVariants.lifeLessons
	) {
		result = {
			text: 'Вы ищете что-то лёгкое\nв жанре романтики',
			queryFn: romanticRecommendedBooks,
		}
	} else if (
		first === EnFirstVariants.inspired &&
		second === EnSecondVariants.fantasy &&
		third === EnThirdVariants.more &&
		fourth === EnFourthVariants.brightCharacters
	) {
		result = {
			text: 'Вы ищете что-то вдохновляющее\nв жанре фэнтези',
			queryFn: fantasyRecommendedBooks,
		}
	} else if (
		first === EnFirstVariants.sad &&
		second === EnSecondVariants.romantic &&
		third === EnThirdVariants.mid &&
		fourth === EnFourthVariants.deepPlot
	) {
		result = {
			text: 'Вы ищете что-то меланхоличное\nв жанре романтики',
			queryFn: romanticRecommendedBooks,
		}
	} else if (
		(first === EnFirstVariants.inspired || first === EnFirstVariants.joyful) &&
		second === EnSecondVariants.notFition &&
		(third === EnThirdVariants.low ||
			third === EnThirdVariants.mid ||
			third === EnThirdVariants.more) &&
		fourth === EnFourthVariants.cognitive
	) {
		result = {
			text: 'Вы ищете что-то познавательное\nв жанре нон-фикшн',
			queryFn: notFictionRecommendedBooks,
		}
	} else if (
		(first === EnFirstVariants.sad || first === EnFirstVariants.joyful) &&
		second === EnSecondVariants.horrors &&
		(third === EnThirdVariants.low ||
			third === EnThirdVariants.mid ||
			third === EnThirdVariants.more) &&
		fourth === EnFourthVariants.excitingStyle
	) {
		result = {
			text: 'Вы ищете что-то цепляющее\nв жанре ужасы',
			queryFn: horrorsRecommendedBooks,
		}
	} else {
		result = {
			text: 'Уникальная подборка\nдля уникального человека',
			queryFn: booksCollections,
		}
	}
	return result
}
