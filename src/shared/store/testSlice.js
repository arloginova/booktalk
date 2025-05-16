import { createSlice } from '@reduxjs/toolkit'

const EnFirstVariants = {
	joyful: 'Радостное',
	inspired: 'Вдохновленное',
	sad: 'Грустное',
}
const EnSecondVariants = {
	fantasy: 'Фэнтези',
	romantic: 'Романтика',
	notFition: 'Нон фикшн',
	horrors: 'Ужасы',
	detectives: 'Детективы',
}
const EnThirdVariants = {
	low: 'Меньше 1 часа',
	mid: '1-3 часа',
	more: 'Более 3 часов',
}
const EnFourthVariants = {
	deepPlot: 'Глубокий сюжет',
	brightCharacters: 'Яркие персонажи',
	excitingStyle: 'Увлекательный стиль',
	lifeLessons: 'Уроки жизни',
	cognitive: 'Познавательное',
}

const initialState = {}

const testSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		changeFirstValue(state, action) {
			state.first = action.payload
		},
		changeSecondValue(state, action) {
			state.second = action.payload
		},
		changeThirdValue(state, action) {
			state.third = action.payload
		},
		changeFourthValue(state, action) {
			state.fourth = action.payload
		},
		reset(state) {
			state.first = undefined
			state.second = undefined
			state.third = undefined
			state.fourth = undefined
		},
	},
})

const firstSelector = (state) => state.test.first
const secondSelector = (state) => state.test.second
const thirdSelector = (state) => state.test.third
const fourthSelector = (state) => state.test.fourth

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
}