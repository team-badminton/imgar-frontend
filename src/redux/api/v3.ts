import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostInfo } from '../storeTypes';
import { Post } from './types/fetchData';
import { GalleryQuery, GallerySearchQuery } from './types/queries';
import { postDataNormalizer } from './utils';

export const imgurV3Api = createApi({
  reducerPath: 'imgurApi3',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.imgur.com/3/',
    prepareHeaders: headers => {
      headers.set('Authorization', `Client-ID ${process.env.CLIENT_ID}`);
      return headers;
    },
  }),
  endpoints: builder => ({
    gallery: builder.query<PostInfo[], GalleryQuery>({
      query: ({
        albumPreviews = true,
        showMature = false,
        page = 1,
        section = 'hot',
        showViral = true,
        sort = 'rising',
        window = 'all',
      }) =>
        `gallery/${section}/${sort}/${window}/${page}?showViral=${showViral}&mature=${showMature}&album_previews=${albumPreviews}`,
      transformResponse: (res: { data: Post[] }) => {
        const { data } = res;
        return postDataNormalizer(data);
      },
    }),
    search: builder.query<PostInfo[], GallerySearchQuery>({
      query: ({ sort = 'time', window = 'all', page = 1, keyword }) =>
        `https://api.imgur.com/3/gallery/search/${sort}/${window}/${page}?q=${keyword}`,
      transformResponse: (res: { data: Post[] }) => {
        const { data } = res;
        return postDataNormalizer(data);
      },
    }),
  }),
});

export const { useGalleryQuery, useSearchQuery } = imgurV3Api;
