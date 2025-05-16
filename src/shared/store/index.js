import { configureStore } from '@reduxjs/toolkit';
import testSlice from './testSlice';
import searchSlice from './searchSlice';

const store = configureStore({
	reducer: {
		test: testSlice,
		search: searchSlice,
	},
});

export { store };