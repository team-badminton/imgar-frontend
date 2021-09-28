import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ImageCard from './ImageCard';

export default {
  title: 'Components/ImageCard',
  component: ImageCard,
  parameters: {
    docs: {
      description: {
        component: `ImageCard 컴포넌트는 store의 listInfo.autoPlay의 Boolean 값과 안에 들어가는 이미지가 사진인지 동영상인지, 동영상이라면 소리가 있는지 없는지에 따라 다른 레이아웃을 가지는 컴포넌트 입니다.`,
      },
    },
  },
};

const Template: ComponentStory<typeof ImageCard> = args => <ImageCard {...args} />;

export const autoplayTrueAndVideo = Template.bind({});
autoplayTrueAndVideo.args = {
  isAutoPlay: true,
  imageCardWidth: 240,
  postInfo: {
    title: 'The Black Purral',
    thumbnailImageId: 'GGSA0v9',
    views: 2391,
    upCount: 45,
    downCount: 12,
    commentCount: 21,
    images: [
      {
        type: 'video/mp4',
        hasSound: false,
      },
    ],
  },
};

export const autoplayFalseAndVideo = Template.bind({});
autoplayFalseAndVideo.args = { ...autoplayTrueAndVideo.args, isAutoPlay: false };

export const autoplayFalseAndVideoHasSound = Template.bind({});
autoplayFalseAndVideoHasSound.args = {
  ...autoplayFalseAndVideo.args,
  postInfo: {
    ...autoplayFalseAndVideo.args.postInfo,
    images: [
      {
        ...autoplayFalseAndVideo.args.postInfo.images[0],
        hasSound: true,
      },
    ],
  },
};

export const autoplayFalseAndVideoHasNoSound = Template.bind({});
autoplayFalseAndVideoHasNoSound.args = {
  ...autoplayFalseAndVideo.args,
};

export const autoplayTrueAndImage = Template.bind({});
autoplayTrueAndImage.args = {
  ...autoplayTrueAndVideo.args,
  postInfo: {
    ...autoplayTrueAndVideo.args.postInfo,
    title: 'Hey Imgur meet Frankie!',
    thumbnailImageId: 'sgF430s',
    images: [
      {
        ...autoplayTrueAndVideo.args.postInfo.images[0],
        type: 'image/jpeg',
      },
    ],
  },
};

export const autoplayFalseAndImage = Template.bind({});
autoplayFalseAndImage.args = {
  ...autoplayTrueAndVideo.args,
  isAutoPlay: false,
  postInfo: {
    ...autoplayTrueAndVideo.args.postInfo,
    title: 'Hey Imgur meet Frankie!',
    thumbnailImageId: 'sgF430s',
    images: [
      {
        ...autoplayTrueAndVideo.args.postInfo.images[0],
        type: 'image/jpeg',
      },
    ],
  },
};

export const titleIsLong = Template.bind({});
titleIsLong.args = {
  ...autoplayTrueAndVideo.args,
  postInfo: {
    ...autoplayTrueAndVideo.args.postInfo,
    title:
      'The Black Purral The Black Purral The Black Purral The Black Purral The Black Purral The Black Purral The Black Purral',
  },
};

export const titleIsLongWithoutSpace = Template.bind({});
titleIsLongWithoutSpace.args = {
  ...autoplayTrueAndVideo.args,
  postInfo: {
    ...autoplayTrueAndVideo.args.postInfo,
    title: 'TheBlackPurralTheBlackPurralTheBlackPurralTheBlackPurralTheBlackPurralTheBlackPurralTheBlackPurral',
  },
};
