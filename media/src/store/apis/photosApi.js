import { faker } from '@faker-js/faker';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const photosApi = createApi({
    reducedrPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints(builder) {
        return {
            fetchPhotos: builder.query({
                query: (album) => {
                    return {
                        url: '/photos',
                        params: {
                            albumId: album.id
                        },
                        method: 'GET',
                    }
                }

            }),
            addPhoto: builder.mutation({
                query: (album) => {
                    return {
                        method: "POST",
                        url: '/photos',
                        body: {
                            albumId: album.id,
                            url: faker.image.abstract(150,150,true)
                        }
                    }
                }
            }),
            removePhoto: builder.mutation({
                query: (photo) => {
                    return {
                        method:'DELETE',
                        url: `/photos/${photo.id}`
                    };
                }
            }),

        };
    },
});


export const {
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation
} = photosApi;
export {photosApi};