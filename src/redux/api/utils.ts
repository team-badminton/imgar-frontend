import { ImageInfo, PostInfo, TagInfo } from '../storeTypes';
import { Image, Post, Tag } from './types/fetchData';

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
      postCount: tag.total_items,
      backgroundImageId: tag.background_hash,
      description: tag.description,
    };
  } else {
    const tags = tag;
    return tags.map(tag => ({
      name: tag.name,
      postCount: tag.total_items,
      backgroundImageId: tag.background_hash,
      description: tag.description,
    }));
  }
}

export function postDataNormalizer(tag: Post): PostInfo;
export function postDataNormalizer(tag: Post[]): PostInfo[];
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
