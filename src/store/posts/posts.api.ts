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
		addPost: build.mutation<null, IPost>({
			query: (post: IPost) => ({
				url: 'posts',
				method: 'POST',
				body: post,
			}),
			invalidatesTags: ['Posts'],
		}),
		updatePost: build.mutation<null, IPost>({
			query: (post: IPost) => ({
				url: `posts/${post.id}`,
				method: 'PATCH',
				body: post,
			}),
			invalidatesTags: ['Posts'],
		}),
		deletePost: build.mutation<null, string>({
			query: (id: string) => ({
				url: `/posts/${id}`,
				method: 'DELETE',
				credentials: 'include',
			}),
			invalidatesTags: ['Posts'],
		}),
	}),
});

export const { useAddPostMutation, useGetPostsQuery, useUpdatePostMutation, useGetAllPostsQuery, useDeletePostMutation } = postAPI;
