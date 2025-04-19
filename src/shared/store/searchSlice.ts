import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'

interface IInitialState {
	searchValue?: string
	isMobileVisible?: boolean
	isSearching?: boolean
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
		setIsSearching: (state, { payload }: PayloadAction<boolean>) => {
			state.isSearching = payload
		},
	},
})

const searchValueSelector = (state: RootState) => state.search.searchValue
const isMobileVisibleSelector = (state: RootState) =>
	state.search.isMobileVisible
const isSearchingSelector = (state: RootState) => state.search.isSearching

export { searchValueSelector, isMobileVisibleSelector, isSearchingSelector }
export const { setSearchValue, setIsMobileVisible, setIsSearching } =
	searchValue.actions
export default searchValue.reducer
