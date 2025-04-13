import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'

interface IInitialState {
	searchValue?: string
}
const initialState: IInitialState = {}

const searchValue = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchValue: (state, { payload }: PayloadAction<string>) => {
			state.searchValue = payload
		},
	},
})

const searchValueSelector = (state: RootState) => state.search.searchValue

export { searchValueSelector }
export const { setSearchValue } = searchValue.actions
export default searchValue.reducer
