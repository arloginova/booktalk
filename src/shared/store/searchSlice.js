import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const searchValue = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchValue: (state, action) => {
			state.searchValue = action.payload
		},
		setIsMobileVisible: (state, action) => {
			state.isMobileVisible = action.payload
		},
		setIsSearching: (state, action) => {
			state.isSearching = action.payload
		},
	},
})

const searchValueSelector = (state) => state.search.searchValue
const isMobileVisibleSelector = (state) => state.search.isMobileVisible
const isSearchingSelector = (state) => state.search.isSearching

export { searchValueSelector, isMobileVisibleSelector, isSearchingSelector }
export const { setSearchValue, setIsMobileVisible, setIsSearching } = searchValue.actions
export default searchValue.reducer