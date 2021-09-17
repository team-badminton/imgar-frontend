import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostInfo, SuggestInfo, UserInfo } from '../storeTypes';
import { Post, Suggest, User } from './types/fetchData';
import { GalleryQuery, GallerySearchQuery, SuggestQuery } from './types/queries';
import { postDataNormalizer, suggestDataNormalizer, userDataNormalizer } from './normalizers';

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
    suggest: builder.query<SuggestInfo, string>({
      query: keyword => `https://api.imgur.com/3/suggest?inflate=users,tags&q=${keyword}&types=users,tags,posts`,
      transformResponse: (res: { data: Suggest }) => {
        const { data } = res;
        return suggestDataNormalizer(data);
      },
    }),
    account: builder.query<UserInfo, string>({
      query: username => `https://api.imgur.com/3/account/${username}`,
      transformResponse: (res: { data: User }) => {
        const { data } = res;
        return userDataNormalizer(data);
      },
    }),
  }),
});

export const { useGalleryQuery, useSearchQuery } = imgurV3Api;
