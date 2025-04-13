import { configureStore } from '@reduxjs/toolkit'
import testSlice from './testSlice'
import searchSlice from './searchSlice'

const store = configureStore({
	reducer: {
		test: testSlice,
		search: searchSlice,
	},
})

type AppStore = typeof store
type RootState = ReturnType<AppStore['getState']>
type AppDispatch = AppStore['dispatch']

export { store, type AppDispatch, type RootState, type AppStore }
