import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ImageCard from './ImageCard';
import { IMAGECARD_WIDTH_PX } from './ImageCard.styled';

export default {
  title: 'Components/ImageCard',
  component: ImageCard,
  parameters: {
    docs: {
      description: {
        component: `ImageCard 컴포넌트는 게시글의 썸네일 이미지(사진 혹은 동영상)와 제목, 그리고 추천수,댓글수, 조회수를 보여주는 컴포넌트입니다. \n
- 게시글의 썸네일 이미지는 사진일수도 동영상일 수도 있습니다.
- 게시글의 썸네일 이미지는 images 배열의 첫번째 요소입니다. images[0].type에 따라 사진인지 동영상인지 여부를 판별합니다.
- 리덕스에서 관리하는 listInfo.autoPlay의 Boolean 값에 따라 썸네일 이미지의 자동 재생 여부가 결정됩니다.
  - 썸네일 이미지가 사진인 경우, autoPlay의 Boolean 값에 영향받지 않습니다.
  - 썸네일 이미지가 동영상인 경우, autoPlay가 true면 동영상이 렌더링되고, false면 사진이 렌더링 됩니다.
- autoPlay가 false일 때,  images[0].hasSound에 따라 동영상의 경우 소리가 있는지 없는 지 여부를 판별하여 표시합니다. 
        `,
      },
    },
  },
} as ComponentMeta<typeof ImageCard>;

const Template: ComponentStory<typeof ImageCard> = args => <ImageCard {...args} />;

export const autoplayTrueAndVideo = Template.bind({});
autoplayTrueAndVideo.args = {
  layoutOption: 'waterfall',
  isAutoPlay: true,
  imageCardWidth: IMAGECARD_WIDTH_PX,
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

export const waterfallLayout = Template.bind({});
waterfallLayout.args = {
  ...autoplayTrueAndVideo.args,
  postInfo: {
    ...autoplayTrueAndVideo.args.postInfo,
  },
};

export const uniformLayout = Template.bind({});
uniformLayout.args = {
  ...autoplayTrueAndVideo.args,
  layoutOption: 'uniform',
  postInfo: {
    ...autoplayTrueAndVideo.args.postInfo,
  },
};
