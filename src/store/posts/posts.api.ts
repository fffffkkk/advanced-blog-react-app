import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IPost } from '@/models/IPost';

export const postAPI = createApi({
	reducerPath: 'posts/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3000/',
	}),
	tagTypes: ['Posts'],
	endpoints: (build) => ({
		getAllPosts: build.query<IPost[], void>({
			query: () => ({
				url: `posts`,
				method: 'GET',
			}),
			providesTags: ['Posts'],
		}),
		getPosts: build.query<IPost, string>({
			query: (id: string) => ({
				url: `posts?id=${id}`,
				method: 'GET',
			}),
			providesTags: ['Posts'],
			transformResponse: (response: IPost[]) => response[0],
		}),
		addPost: build.mutation<IPost[], IPost>({
			query: (post: IPost) => ({
				url: 'posts',
				method: 'POST',
				body: post,
			}),
			invalidatesTags: ['Posts'],
		}),
		updatePost: build.mutation<IPost[], IPost>({
			query: (post: IPost) => ({
				url: 'posts',
				method: 'PUT',
				body: post,
			}),
			invalidatesTags: ['Posts'],
		}),
	}),
});

export const { useAddPostMutation, useGetPostsQuery, useUpdatePostMutation, useGetAllPostsQuery } = postAPI;
