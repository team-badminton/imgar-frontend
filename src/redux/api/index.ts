import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { transform } from 'lodash';
import {
  FeaturedTagInfo,
  FolderInfo,
  PostCommentInfo,
  PostInfo,
  PostV1Info,
  SuggestInfo,
  TagInfo,
  TagPostInfo,
  UserInfo,
  WelcomMessageInfo,
} from '../storeTypes';
import {
  userDataNormalizer,
  commentNormalizer,
  folderNormalizer,
  postDataNormalizer,
  suggestDataNormalizer,
  postV1DataNormalizer,
  postV3ToV1DataNormalizer,
  accountCommentNormalizer,
  tagDataNormalizer,
  tagPostsDataNormalizer,
  welcommessageNormalizer,
  featuredTagDataNormalizer,
} from './normalizers';
import {
  AccountComment,
  Folder,
  Post,
  PostComment,
  PostV1,
  Suggest,
  User,
  Tag,
  TagPosts,
  WelcomeMessage,
} from './types/fetchData';
import {
  AccountCommentQuery,
  accountFavoriteFolderQuery,
  AccountPostQuery,
  GalleryQuery,
  GallerySearchQuery,
  PostCommentQuery,
  postQeury,
  TagPostsQuery,
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
    search: builder.query<PostV1Info[], GallerySearchQuery>({
      query: ({ sort = 'time', window = 'all', page = 0, query }) => {
        let queryString = `3/gallery/search/${sort}/${window}/${page}?`;
        Object.entries(query).forEach(([key, value]) => {
          queryString += value ? `${key}=${value}&` : '';
        });
        queryString = queryString.replace(/&$/, '');
        return queryString;
      },
      transformResponse: (res: { data: Post[] }) => {
        const { data } = res;
        return postV3ToV1DataNormalizer(data);
      },
    }),
    tag: builder.query<FeaturedTagInfo[], null>({
      query: () => `3/tags`,
      transformResponse: (res: { data: { featured: string; tags: Tag[] } }) => {
        const { data } = res;
        return featuredTagDataNormalizer(data);
      },
    }),
    tagPosts: builder.query<TagPostInfo, TagPostsQuery>({
      query: ({ tagName, page = 1 }) =>
        `post/v1/posts/t/${tagName}?filter[window]=week&include=adtiles,adconfig,cover&page=${page}&sort=-time`,
      transformResponse: (data: TagPosts) => {
        return tagPostsDataNormalizer(data);
      },
    }),
    welcomeMessage: builder.query<WelcomMessageInfo, null>({
      query: () => `homepage/v1/messages/random?filter[type]=welcome`,
      transformResponse: (data: WelcomeMessage) => {
        return welcommessageNormalizer(data);
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
      transformResponse: (res: { data: AccountComment[] }) => {
        const { data } = res;
        return accountCommentNormalizer(data);
      },
    }),
    accountPosts: builder.query<PostV1Info[], AccountPostQuery>({
      query: ({ username, page = 0, sort }) => `3/account/${username}/submissions/${page}/${sort}`,
      transformResponse: (res: { data: Post[] }) => {
        const { data } = res;
        return postV3ToV1DataNormalizer(data);
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
    post: builder.query<PostInfo, postQeury>({
      query: ({ postId, isAlbum }) => `3/gallery/album/${postId}`,
      transformResponse: (res: { data: Post }) => {
        const { data } = res;
        return postDataNormalizer(data);
      },
    }),
    postComments: builder.query<PostCommentInfo[] & { next?: boolean }, PostCommentQuery>({
      query: ({ postId, sort = 'best', page = 1 }) => {
        const next =
          'WyJ7XCJjb21tZW50c1wiOntcImxhc3Rfb2Zmc2V0XCI6MzB9LFwiY3JlYXRlZFwiOlwiMTk3MC0wMS0wMVQwMDowMDowMFpcIn0iLCJlMzBqRHo4OWJ0ZWp0Q2NBUXBkbWRYV0cxSzkxMy8wQlBGc1FGVWJjci9sV0NhOUZJd1Z0OTRCMjNHTFVtREJoY0YySTdmVnhFbVRaTnRnanA3b3Bxa3BFT1JKL3p0V2RGRWFmYy8rbnhYdGgwdDlPNUZCZ2tQNFlINzBMeTlPWW1Bc2x6b2pEbHF0RnRRK2RLeHcyTkFxS05QUWd2dXd2MjdFdTB6ay92UGhsUFlCTFVWcmpBbWNCTWJPeGNGc2pvT1dPTFh3ck8rd3lmc2hSa3JVWFRKQ2tZWlJoZTl0aFlvQTlDMzRzNHJER1ZST0RXRURzd3pOaC9rbEtFTjFuZFJsWUZlbDdJRENiSStZR1kyQmZxamNSRVJkTHAxVW5FYmNrYm5xeWlMa1hKOGJPSVVENDRHdjVlR3FHd2hhY3Ira0drZnJvQTYyUGswWDdnRmNFZWc9PSJd';
        return `comment/v1/comments?filter[post]=eq:${postId}&include=account,adconfig&per_page=${
          page === 1 ? 31 : 1000
        }&sort=${sort}${page !== 1 ? `&cursor=${next}` : ''}`;
      },
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
  usePostQuery,
  usePostCommentsQuery,
  useTagQuery,
  useTagPostsQuery,
  useWelcomeMessageQuery,
} = imgurApi;

export default imgurApi;
