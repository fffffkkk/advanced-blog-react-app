import { userReducer, userAction } from '@/store/user/user.slice';

describe('test user slice', () => {
	test('add user', () => {
		expect(
			userReducer(
				{ user: { id: 1, name: '', token: '' } },
				userAction.addUser({ id: 1, name: 'name', token: 'token' })
			)
		).toEqual({ user: { id: 1, name: 'name', token: 'token' } });
	});
	test('remove user', () => {
		expect(
			userReducer(
				{ user: { id: 1, name: 'name', token: 'token' } },
				userAction.removeUser()
			)
		).toEqual({ user: { id: 0, name: '', token: '' } });
	});
});
