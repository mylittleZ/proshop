import { apiSlice } from './apiSlice';
import { USERS_URL } from '../constants';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // 在 RTK Query 中，"mutation" 通常用于表示执行会修改服务器上数据的操作，如 POST、PUT、PATCH 或 DELETE 请求。
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/login`,
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useLoginMutation } = userApiSlice;