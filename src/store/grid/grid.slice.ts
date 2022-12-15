import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IGrid {
	grid: 'flex' | 'grid'
}

const initialState: IGrid = {
	grid: 'grid',
};

export const gridSlice = createSlice({
	name: 'grid',
	initialState,
	reducers: {
		changeGrid(state, action: PayloadAction<IGrid>) {
			state.grid = action.payload.grid;
		},
	},
});

export const gridReducer = gridSlice.reducer;
export const gridAction = gridSlice.actions;
