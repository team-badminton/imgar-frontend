import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FolderInfo, PostCommentInfo, PostInfo, SuggestInfo, UserInfo } from '../storeTypes';
import {
  commentNormalizer,
  folderNormalizer,
  postDataNormalizer,
  suggestDataNormalizer,
  userDataNormalizer,
} from './normalizers';
import { Folder, Post, PostComment, Suggest, User } from './types/fetchData';
import {
  AccountCommentQuery,
  accountFavoriteFolderQuery,
  AccountPostQuery,
  GalleryQuery,
  GallerySearchQuery,
  PostCommentQuery,
} from './types/queries';

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
        `gallery/search/${sort}/${window}/${page}?q=${keyword}`,
      transformResponse: (res: { data: Post[] }) => {
        const { data } = res;
        return postDataNormalizer(data);
      },
    }),
    suggest: builder.query<SuggestInfo, string>({
      query: keyword => `suggest?inflate=tags&q=${keyword}&types=users,tags,posts`,
      transformResponse: (res: { data: Suggest }) => {
        const { data } = res;
        return suggestDataNormalizer(data);
      },
    }),
    account: builder.query<UserInfo, string>({
      query: username => `account/${username}`,
      transformResponse: (res: { data: User }) => {
        const { data } = res;
        return userDataNormalizer(data);
      },
    }),
    accountComments: builder.query<PostCommentInfo[], AccountCommentQuery>({
      query: ({ page = 0, sort = 'newest', username }) => `account/${username}/comments/${sort}/${page}`,
      transformResponse: (res: { data: PostComment[] }) => {
        const { data } = res;
        return commentNormalizer(data);
      },
    }),
    accountPosts: builder.query<PostInfo[], AccountPostQuery>({
      query: ({ username, page = 0 }) => `account/${username}/submissions/${page}`,
      transformResponse: (res: { data: Post[] }) => {
        const { data } = res;
        return postDataNormalizer(data);
      },
    }),
    accountFolders: builder.query<FolderInfo[], string>({
      query: username => `account/${username}/folders?order=asc&per_page=150&sort=name`,
      transformResponse: (res: { data: Folder[] }) => {
        const { data } = res;
        return folderNormalizer(data);
      },
    }),
    accountFolderPosts: builder.query<PostInfo[], accountFavoriteFolderQuery>({
      query: ({ username, folderId, sort = 'newest', page = 0 }) => {
        if (folderId) {
          return `account/${username}/folders/${folderId}/favorites?page=${page}&sort=${sort}`;
        } else {
          return `account/${username}/gallery_favorites/${page}/${sort}`;
        }
      },
      transformResponse: (res: { data: Post[] }) => {
        const { data } = res;
        return postDataNormalizer(data);
      },
    }),

    postComments: builder.query<PostCommentInfo[], PostCommentQuery>({
      query: ({ postId, sort = 'best' }) => `gallery/${postId}/comments/${sort}`,
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
  useAccountCommentsQuery,
  useAccountFolderPostsQuery,
  useAccountFoldersQuery,
  useAccountPostsQuery,
  useAccountQuery,
  useSuggestQuery,
  usePostCommentsQuery,
} = imgurV3Api;
