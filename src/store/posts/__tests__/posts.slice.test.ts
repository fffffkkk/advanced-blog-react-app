import { postsReducer, postsAction } from '@/store/posts/posts.slice';

describe('test posts slice', () => {
	test('add or update post', () => {
		expect(
			postsReducer(
				{
					date: '',
					author: { authorImage: '', authorName: '' },
					image: '',
					categories: [''],
					title: '',
					desc: '',
				},
				postsAction.addPosts({
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
			date: '',
			author: { authorImage: '', authorName: '' },
			image: '',
			categories: [''],
			title: '',
			desc: '',
		});
	});
});
