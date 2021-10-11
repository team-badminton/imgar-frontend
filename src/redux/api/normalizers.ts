import {
  FolderInfo,
  ImageInfo,
  PostCommentInfo,
  PostInfo,
  PostV1Info,
  SuggestInfo,
  TagInfo,
  UserInfo,
} from '../storeTypes';
import { AccountComment, Folder, Image, Post, PostComment, PostV1, Suggest, Tag, User } from './types/fetchData';

export function imageDataNormalizer(image: Image): ImageInfo;
export function imageDataNormalizer(image: Image[]): ImageInfo[];
export function imageDataNormalizer(image: Image | Image[]): ImageInfo | ImageInfo[] {
  if (!Array.isArray(image)) {
    return {
      id: image.id,
      description: image.description,
      type: image.type,
      hasSound: image.has_sound,
      imageWidth: image.width,
      imageHeight: image.height,
      bandWidth: image.bandwidth,
    } as ImageInfo;
  } else {
    const images = image;
    return images.map(image => ({
      id: image.id,
      description: image.description,
      type: image.type,
      hasSound: image.has_sound,
      imageWidth: image.width,
      imageHeight: image.height,
      bandWidth: image.bandwidth,
    })) as ImageInfo[];
  }
}

export function tagDataNormalizer(tag: Tag): TagInfo;
export function tagDataNormalizer(tag: Tag[]): TagInfo[];
export function tagDataNormalizer(tag: Tag | Tag[]): TagInfo | TagInfo[] {
  if (!Array.isArray(tag)) {
    return {
      name: tag.name,
      displayName: tag.display_name,
      postCount: tag.total_items,
      backgroundImageId: tag.background_hash,
      description: tag.description,
    };
  } else {
    const tags = tag;
    return tags.map(tag => ({
      name: tag.name,
      displayName: tag.display_name,
      postCount: tag.total_items,
      backgroundImageId: tag.background_hash,
      description: tag.description,
    }));
  }
}

export function postDataNormalizer(post: Post): PostInfo;
export function postDataNormalizer(post: Post[]): PostInfo[];
export function postDataNormalizer(post: Post[] | Post): PostInfo | PostInfo[] {
  if (!Array.isArray(post)) {
    return {
      id: post.id,
      title: post.title,
      dateTime: post.datetime,
      thumbnailImageId: post.cover,
      thumbnailWidth: post.cover_width,
      thumbnailHeight: post.cover_height,
      accountName: post.account_url,
      accountId: post.account_id,
      views: post.views,
      upCount: post.ups,
      downCount: post.downs,
      points: post.points,
      commentCount: post.comment_count,
      favoriteCount: post.favorite_count,
      images: imageDataNormalizer(post.images) as ImageInfo[],
      tags: tagDataNormalizer(post.tags) as TagInfo[],
    };
  } else {
    const posts = post;
    return posts
      .map(post => {
        if (!post.images) {
          return null;
        }
        return {
          id: post.id,
          title: post.title,
          dateTime: post.datetime,
          thumbnailImageId: post.cover,
          thumbnailWidth: post.cover_width,
          thumbnailHeight: post.cover_height,
          accountName: post.account_url,
          accountId: post.account_id,
          views: post.views,
          upCount: post.ups,
          downCount: post.downs,
          points: post.points,
          commentCount: post.comment_count,
          favoriteCount: post.favorite_count,
          images: imageDataNormalizer(post.images) as ImageInfo[],
          tags: tagDataNormalizer(post.tags) as TagInfo[],
        };
      })
      .filter(Boolean);
  }
}

export function postV1DataNormalizer(post: PostV1): PostV1Info;
export function postV1DataNormalizer(post: PostV1[]): PostV1Info[];
export function postV1DataNormalizer(post: PostV1[] | PostV1): PostV1Info | PostV1Info[] {
  if (!Array.isArray(post)) {
    return {
      id: post.id,
      title: post.title,
      dateTime: new Date(post.created_at).getTime(),
      thumbnailImageId: post.cover.id,
      thumbnailWidth: post.cover.width,
      thumbnailHeight: post.cover.height,
      accountId: post.account_id,
      views: post.view_count,
      upCount: post.upvote_count,
      downCount: post.downvote_count,
      points: post.point_count,
      commentCount: post.comment_count,
      favoriteCount: post.favorite_count,
      imageCount: post.image_count,
      type: post.cover.mime_type as PostV1Info['type'],
      hasSound: post.cover.metadata.has_sound,
      isAlbum: post.is_album,
    };
  } else {
    const posts = post;
    return posts.map(post => {
      return {
        id: post.id,
        title: post.title,
        dateTime: new Date(post.created_at).getTime(),
        thumbnailImageId: post.cover.id,
        thumbnailWidth: post.cover.width,
        thumbnailHeight: post.cover.height,
        accountId: post.account_id,
        views: post.view_count,
        upCount: post.upvote_count,
        downCount: post.downvote_count,
        points: post.point_count,
        commentCount: post.comment_count,
        favoriteCount: post.favorite_count,
        imageCount: post.image_count,
        type: post.cover.mime_type as PostV1Info['type'],
        hasSound: post.cover.metadata.has_sound,
        isAlbum: post.is_album,
      };
    });
  }
}

export function postV3ToV1DataNormalizer(post: Post): PostV1Info;
export function postV3ToV1DataNormalizer(post: Post[]): PostV1Info[];
export function postV3ToV1DataNormalizer(post: Post[] | Post): PostV1Info | PostV1Info[] {
  if (!Array.isArray(post)) {
    return {
      id: post.id,
      title: post.title,
      dateTime: post.datetime,
      thumbnailImageId: post?.cover ?? post.id,
      thumbnailWidth: post?.cover_width ?? post.width,
      thumbnailHeight: post?.cover_height ?? post.height,
      accountId: post.account_id,
      views: post.views,
      upCount: post.ups,
      downCount: post.downs,
      points: post.points,
      commentCount: post.comment_count,
      favoriteCount: post.favorite_count,
      imageCount: post.images_count,
      type: post?.images[0]?.type ?? (post.type as PostV1Info['type']),
      hasSound: post?.images[0]?.has_sound ?? post.has_sound,
      isAlbum: post.is_album,
    };
  } else {
    const posts = post;
    return posts.map(post => {
      return {
        id: post.id,
        title: post.title,
        dateTime: post.datetime,
        thumbnailImageId: post?.cover ?? post.id,
        thumbnailWidth: post?.cover_width ?? post.width,
        thumbnailHeight: post?.cover_height ?? post.height,
        accountId: post.account_id,
        views: post.views,
        upCount: post.ups,
        downCount: post.downs,
        points: post.points,
        commentCount: post.comment_count,
        favoriteCount: post.favorite_count,
        imageCount: post.images_count,
        type: post?.images?.[0]?.type ?? (post.type as PostV1Info['type']),
        hasSound: post?.images?.[0]?.has_sound ?? post.has_sound,
        isAlbum: post.is_album,
      };
    });
  }
}

export function suggestDataNormalizer(suggest: Suggest): SuggestInfo {
  return {
    users: suggest.users?.map(user => ({
      name: user.text,
      id: user.id,
    })),
    tags: suggest.tags?.map(tag => ({
      name: tag.name,
      displayName: tag.display_name,
      backgroundImageId: tag.background_hash,
    })),
    posts: suggest.posts?.map(post => ({
      id: post.hash,
      title: post.title,
    })),
  };
}

export function commentNormalizer(comment: PostComment): PostCommentInfo;
export function commentNormalizer(comment: PostComment[]): PostCommentInfo[];
export function commentNormalizer(comment: PostComment | PostComment[]): PostCommentInfo | PostCommentInfo[] {
  if (!Array.isArray(comment)) {
    return {
      author: comment.account.username,
      comment: comment.comment,
      dateTime: +new Date(comment.create_at) / 1000,
      downCount: comment.downvote_count,
      upCount: comment.upvote_count,
      id: comment.id.toString(),
      parentCommentId: comment.parent_id.toString(),
      postId: comment.post_id,
      cover: null,
      childrenComments: comment.comments ? commentNormalizer(comment.comments) : null,
    };
  } else {
    const comments = comment;
    return comments.map(comment => ({
      author: comment.account.username,
      comment: comment.comment,
      dateTime: +new Date(comment.create_at) / 1000,
      downCount: comment.downvote_count,
      upCount: comment.upvote_count,
      id: comment.id.toString(),
      parentCommentId: comment.parent_id.toString(),
      postId: comment.post_id,
      cover: null,
      childrenComments: comment.comments ? commentNormalizer(comment.comments) : null,
    }));
  }
}

export function accountCommentNormalizer(comment: AccountComment): PostCommentInfo;
export function accountCommentNormalizer(comment: AccountComment[]): PostCommentInfo[];
export function accountCommentNormalizer(
  comment: AccountComment | AccountComment[],
): PostCommentInfo | PostCommentInfo[] {
  if (!Array.isArray(comment)) {
    return {
      cover: comment.album_cover ?? comment.image_id,
      author: comment.author,
      comment: comment.comment,
      dateTime: comment.datetime,
      downCount: comment.downs,
      upCount: comment.ups,
      id: comment.id.toString(),
      parentCommentId: comment.parent_id.toString(),
      postId: comment.image_id,
      childrenComments: comment.children ? commentNormalizer(comment.children) : null,
    };
  } else {
    const comments = comment;
    return comments.map(comment => ({
      cover: comment.album_cover ?? comment.image_id,
      author: comment.author,
      comment: comment.comment,
      dateTime: comment.datetime,
      downCount: comment.downs,
      upCount: comment.ups,
      id: comment.id.toString(),
      parentCommentId: comment.parent_id.toString(),
      postId: comment.image_id,
      childrenComments: comment.children ? commentNormalizer(comment.children) : null,
    }));
  }
}

export function folderNormalizer(folders: Folder[]): FolderInfo[] {
  return folders.map(folder => ({
    id: folder.id,
    name: folder.name,
  }));
}

export function userDataNormalizer(user: User): UserInfo {
  return {
    id: user.id.toString(),
    name: user.username,
    bio: user.bio,
    avatarUrl: user.avatar_url,
    coverUrl: user.cover_url,
    createdDate: user.created_at,
    notoriety: user.reputation_name,
    points: ~~user.reputation_count,
    trophies: user.trophies?.map(trophy => ({
      id: trophy.id + '',
      name: trophy.name,
      imageUrl: trophy.image_url,
      description: trophy.description,
      awardedAt: trophy.awarded_at,
      link: trophy.data_link?.replace('https://imgur.com', ''),
    })),
    medals: user.medallions?.map(medal => ({
      name: medal.name,
      description: medal.description,
      imageUrl: medal.image_url,
      pointThreshold: medal.point_threshold,
    })),
  };
}
