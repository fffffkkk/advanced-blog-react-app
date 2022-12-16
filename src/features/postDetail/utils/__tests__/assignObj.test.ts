import { assignObj } from '@/features/postDetail/utils/assignObj';

describe('utils func tests', () => {
	test('assign obj1 and obj2', () => {
		const result = assignObj({ id: 'id' }, { body: 'body' });

		expect(result).toEqual({ id: 'id', body: 'body' });
	});
	test('assign empty obj1 and empty obj2', () => {
		const result = assignObj({}, {});

		expect(result).toEqual({});
	});
	test('assign empty obj1 and obj2', () => {
		const result = assignObj({}, { id: 'id' });

		expect(result).toEqual({ id: 'id' });
	});
});
