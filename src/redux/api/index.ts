import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FolderInfo, PostCommentInfo, PostInfo, PostV1Info, SuggestInfo, UserInfo } from '../storeTypes';
import {
  userDataNormalizer,
  commentNormalizer,
  folderNormalizer,
  postDataNormalizer,
  suggestDataNormalizer,
  postV1DataNormalizer,
  postV3ToV1DataNormalizer,
} from './normalizers';
import { Folder, Post, PostComment, PostV1, Suggest, User } from './types/fetchData';
import {
  AccountCommentQuery,
  accountFavoriteFolderQuery,
  AccountPostQuery,
  GalleryQuery,
  GallerySearchQuery,
  PostCommentQuery,
} from './types/queries';

export const imgurApi = createApi({
  reducerPath: 'imgurApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.imgur.com/',
    prepareHeaders: headers => {
      headers.set('Authorization', `Client-ID ${process.env.CLIENT_ID}`);
      return headers;
    },
  }),
  endpoints: builder => ({
    gallery: builder.query<PostV1Info[], GalleryQuery>({
      query: ({ page = 1, section = 'mostViral', sort = 'newest', window = 'all' }) => {
        if (sort === 'random') {
          return `post/v1/posts?filter[section]=eq:random&include=adtiles,adconfig,cover&page=${page}&sort=random`;
        }
        if (section === 'mostViral' && sort === 'newest') {
          return `post/v1/posts?filter[section]=eq:hot&filter_topic=imgur topic politics&include=adtiles,adconfig,cover,viral&location=desktophome&page=${page}&sort=-time`;
        }
        if (section === 'mostViral') {
          return `post/v1/posts?filter[section]=eq:hot&include=adtiles,adconfig,cover,viral&location=desktophome&page=${page}&sort=${
            sort === 'popular' ? '-viral' : 'top'
          }`;
        }
        if (section === 'userSubmitted') {
          return `post/v1/posts?filter[section]=eq:new&include=adtiles,adconfig,cover&location=desktophome&page=${page}&sort=${
            sort === 'newest' ? '-time' : sort === 'popular' ? '-viral' : sort === 'rising' ? '-rising' : ''
          }`;
        }
        if (section === 'highestScoring') {
          return `post/v1/posts?filter[section]=eq:top&filter[window]=${window}&include=adtiles,adconfig,cover&page=${page}&sort=viral`;
        }
      },
      transformResponse: (data: PostV1[]) => {
        return postV1DataNormalizer(data);
      },
    }),
    search: builder.query<PostInfo[], GallerySearchQuery>({
      query: ({ sort = 'time', window = 'all', page = 1, keyword }) =>
        `3/gallery/search/${sort}/${window}/${page}?q=${keyword}`,
      transformResponse: (res: { data: Post[] }) => {
        const { data } = res;
        return postDataNormalizer(data);
      },
    }),
    suggest: builder.query<SuggestInfo, string>({
      query: keyword => `3/suggest?inflate=tags&q=${keyword}&types=users,tags,posts`,
      transformResponse: (res: { data: Suggest }) => {
        const { data } = res;
        return suggestDataNormalizer(data);
      },
      keepUnusedDataFor: 20,
    }),
    account: builder.query<UserInfo, string>({
      query: username => `account/v1/accounts/${username}?include=trophies,medallions`,
      transformResponse: (data: User) => {
        return userDataNormalizer(data);
      },
    }),
    accountComments: builder.query<PostCommentInfo[], AccountCommentQuery>({
      query: ({ page = 0, sort = 'newest', username }) => `3/account/${username}/comments/${sort}/${page}`,
      transformResponse: (res: { data: PostComment[] }) => {
        const { data } = res;
        return commentNormalizer(data);
      },
    }),
    accountPosts: builder.query<PostInfo[], AccountPostQuery>({
      query: ({ username, page = 0 }) => `3/account/${username}/submissions/${page}`,
      transformResponse: (res: { data: Post[] }) => {
        const { data } = res;
        return postDataNormalizer(data);
      },
    }),
    accountFolders: builder.query<FolderInfo[], string>({
      query: username => `3/account/${username}/folders?order=asc&per_page=150&sort=name`,
      transformResponse: (res: { data: Folder[] }) => {
        const { data } = res;
        return folderNormalizer(data);
      },
    }),
    accountFolderPosts: builder.query<PostV1Info[], accountFavoriteFolderQuery>({
      query: ({ username, folderId, sort = 'newest', page = 0 }) => {
        if (folderId) {
          return `3/account/${username}/folders/${folderId}/favorites?page=${page}&sort=${sort}`;
        } else {
          return `3/account/${username}/gallery_favorites/${page}/${sort}`;
        }
      },
      transformResponse: (res: { data: Post[] }) => {
        const { data } = res;
        return postV3ToV1DataNormalizer(data);
      },
    }),

    postComments: builder.query<PostCommentInfo[], PostCommentQuery>({
      query: ({ postId, sort = 'best' }) => `3/gallery/${postId}/comments/${sort}`,
      transformResponse: (res: { data: PostComment[] }) => {
        const { data } = res;
        return commentNormalizer(data);
      },
    }),
  }),
});

export const {
  useGalleryQuery,
  useSearchQuery,
  useAccountQuery,
  useAccountCommentsQuery,
  useAccountFolderPostsQuery,
  useAccountFoldersQuery,
  useAccountPostsQuery,
  useSuggestQuery,
  useLazySuggestQuery,
  usePostCommentsQuery,
} = imgurApi;

export default imgurApi;
