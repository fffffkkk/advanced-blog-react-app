import { postsReducer, postsAction } from '@/store/posts/posts.slice';

describe('test posts slice', () => {
	test('add or update post', () => {
		expect(
			postsReducer(
				{
					countWatch: 0,
					id: '',
					date: '',
					author: { authorImage: '', authorName: '' },
					image: '',
					categories: [''],
					title: '',
					desc: '',
				},
				postsAction.addPosts({
					countWatch: 5,
					id: '1',
					date: '15.12.2022',
					author: {
						authorImage: '',
						authorName: 'not a admin',
					},
					image: '',
					categories: ['IT'],
					title: 'TS - best',
					desc: 'because this TS',
				})
			)
		).toEqual({
			countWatch: 5,
			id: '1',
			date: '15.12.2022',
			author: {
				authorImage: '',
				authorName: 'not a admin',
			},
			image: '',
			categories: ['IT'],
			title: 'TS - best',
			desc: 'because this TS',
		});
	});
	test('remove post', () => {
		expect(
			postsReducer(
				{
					countWatch: 0,
					id: '1',
					date: '15.12.2022',
					author: {
						authorImage: '',
						authorName: 'not a admin',
					},
					image: '',
					categories: ['IT'],
					title: 'TS - best',
					desc: 'because this TS',
				},
				postsAction.removePosts()
			)
		).toEqual({
			countWatch: 0,
			id: '',
			date: '',
			author: { authorImage: '', authorName: '' },
			image: '',
			categories: [''],
			title: '',
			desc: '',
		});
	});
});
