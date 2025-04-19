import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'

interface IInitialState {
	searchValue?: string
	isMobileVisible?: boolean
}
const initialState: IInitialState = {}

const searchValue = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchValue: (state, { payload }: PayloadAction<string>) => {
			state.searchValue = payload
		},
		setIsMobileVisible: (state, { payload }: PayloadAction<boolean>) => {
			state.isMobileVisible = payload
		},
	},
})

const searchValueSelector = (state: RootState) => state.search.searchValue
const isMobileVisibleSelector = (state: RootState) =>
	state.search.isMobileVisible

export { searchValueSelector, isMobileVisibleSelector }
export const { setSearchValue, setIsMobileVisible } = searchValue.actions
export default searchValue.reducer
