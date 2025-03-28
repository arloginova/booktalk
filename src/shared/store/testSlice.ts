import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'

enum EnFirstVariants {
	joyful = 'Радостное',
	inspired = 'Вдохновленное',
	sad = 'Грустное',
}
enum EnSecondVariants {
	fantasy = 'Фэнтези',
	romantic = 'Романтика',
	notFition = 'Нон фикшн',
	horrors = 'Ужасы',
	detectives = 'Детективы',
}
enum EnThirdVariants {
	low = 'Меньше 1 часа',
	mid = '1-3 часа',
	more = 'Более 3 часов',
}
enum EnFourthVariants {
	deepPlot = 'Глубокий сюжет',
	brightCharacters = 'Яркие персонажи',
	excitingStyle = 'Увлекательный стиль',
	lifeLessons = 'Уроки жизни',
	cognitive = 'Познавательное',
}

interface IInitialState {
	first?: EnFirstVariants
	second?: EnSecondVariants
	third?: EnThirdVariants
	fourth?: EnFourthVariants
}
const initialState: IInitialState = {}

const testSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		changeFirstValue(state, { payload }: PayloadAction<EnFirstVariants>) {
			state.first = payload
		},
		changeSecondValue(state, { payload }: PayloadAction<EnSecondVariants>) {
			state.second = payload
		},
		changeThirdValue(state, { payload }: PayloadAction<EnThirdVariants>) {
			state.third = payload
		},
		changeFourthValue(state, { payload }: PayloadAction<EnFourthVariants>) {
			state.fourth = payload
		},
		reset(state) {
			state.first = undefined
			state.second = undefined
			state.third = undefined
			state.fourth = undefined
		},
	},
})

const firstSelector = (state: RootState) => state.test.first
const secondSelector = (state: RootState) => state.test.second
const thirdSelector = (state: RootState) => state.test.third
const fourthSelector = (state: RootState) => state.test.fourth

export const {
	changeFirstValue,
	changeFourthValue,
	changeSecondValue,
	changeThirdValue,
	reset,
} = testSlice.actions
export default testSlice.reducer
export {
	EnFirstVariants,
	EnSecondVariants,
	EnThirdVariants,
	EnFourthVariants,
	firstSelector,
	secondSelector,
	thirdSelector,
	fourthSelector,
	type IInitialState as TTestProps,
}
