import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:3000/',
    mode: 'cors',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'users', 
    }),
    createUser: builder.mutation({
      query: (newUser) => ({
        url: 'auth/signup',
        method: 'POST',
        body: newUser,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useCreateUserMutation } = userApi;
