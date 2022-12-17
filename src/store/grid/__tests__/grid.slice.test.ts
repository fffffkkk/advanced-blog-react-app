import { gridReducer, gridAction } from '@/store/grid/grid.slice';

describe('test grid slice', () => {
	test('if change grid', () => {
		expect(
			gridReducer({ grid: 'grid' }, gridAction.changeGrid({ grid: 'flex' }))
		).toEqual({ grid: 'flex' });
	});
});
