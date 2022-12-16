import { stringUpper } from '@/features/Registration/utils/stringUpper';

describe('utils func tests into Registration component', () => {
	test('upper string', () => {
		const result = stringUpper('hello');
		
		expect(result).toBe('HELLO');
	});
	test('upper empty string', () => {
		const result = stringUpper('');
		
		expect(result).toBe('');
	});
});
