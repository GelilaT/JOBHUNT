import { Job } from "@/lib/types/job";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://akil-backend.onrender.com/' }),
    endpoints: (builder) => ({
        getJobs: builder.query<Job, void>({
            query: () => '/opportunities/search'
        }),

        getJobByID: builder.query<Job, void>({
            query: () => '/opportunities/:id'
        })
    })

})

export const {
    useGetJobByIDQuery,
    useGetJobsQuery
} = api