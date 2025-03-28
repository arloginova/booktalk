import { configureStore } from '@reduxjs/toolkit'
import testSlice from './testSlice'

const store = configureStore({
	reducer: {
		test: testSlice,
	},
})

type AppStore = typeof store
type RootState = ReturnType<AppStore['getState']>
type AppDispatch = AppStore['dispatch']

export { store, type AppDispatch, type RootState, type AppStore }
