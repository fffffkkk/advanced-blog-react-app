import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IUser } from '@/models/IUser';

export const usersAPI = createApi({
	reducerPath: 'user/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3000/',
	}),
	tagTypes: ['Users'],
	endpoints: (build) => ({
		getUser: build.query<IUser, string>({
			query: (id: string) => ({
				url: `users?id=${id}`,
				method: 'GET',
			}),
			providesTags: ['Users'],
		}),
		addUser: build.mutation<IUser[], IUser>({
			query: (user: IUser) => ({
				url: 'users',
				method: 'POST',
				body: user,
			}),
			invalidatesTags: ['Users'],
		}),
	}),
});

export const { useAddUserMutation, useGetUserQuery } = usersAPI;
