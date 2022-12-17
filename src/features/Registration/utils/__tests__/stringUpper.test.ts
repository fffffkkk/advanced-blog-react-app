import { stringUpper } from '@/features/Registration/utils/stringUpper';

describe('utils func tests into Registration component', () => {
	test('if upper string', () => {
		const result = stringUpper('hello');
		
		expect(result).toBe('HELLO');
	});
	test('if upper empty string', () => {
		const result = stringUpper('');
		
		expect(result).toBe('');
	});
});
