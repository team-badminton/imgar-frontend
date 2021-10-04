import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PostFigure } from '@/components';

export default {
  title: 'Components/PostFigure',
  component: PostFigure,
  parameters: {
    docs: {
      description: {
        component: `**PostFigure** 컴포넌트는 사용자가 업로드한 이미지와 이미지를 설명하는 글을 보여주는 컴포넌트입니다. 컴포넌트의 크기가 이미지 원본의 크기보다 작으면 줌 기능이 활성화 됩니다. hashTag(#) 혹은 protocol(http, https) 를 포함한 text는 underline 디자인이 적용됩니다.`,
      },
    },
  },
  args: {
    type: 'image/jpeg',
  },
} as ComponentMeta<typeof PostFigure>;

const Template: ComponentStory<typeof PostFigure> = args => <PostFigure {...args} />;

export const IncludeUriText = Template.bind({});
IncludeUriText.args = {
  imageId: 'AD3MbBi',
  orgImageWidth: 1,
  orgImageHeight: 1,
  description: 'TEXT\n\nhttps://www.instagram.com/p/CBTjzNApIb6/?igshid=7cvtuawzabvw',
};

export const IncludeHashTagText = Template.bind({});
IncludeHashTagText.args = {
  imageId: 'AD3MbBi',
  orgImageWidth: 1,
  orgImageHeight: 1,
  description: 'TEXT\n\n#cat',
};

export const ZoomablePhoto = Template.bind({});
ZoomablePhoto.args = {
  imageId: 'AD3MbBi',
  orgImageWidth: 10000,
  orgImageHeight: 10000,
  description: 'Non URI TEXT',
};

export const UnZoomablePhoto = Template.bind({});
UnZoomablePhoto.args = {
  imageId: 'AD3MbBi',
  orgImageWidth: 1,
  orgImageHeight: 1,
  description: 'Non URI TEXT',
};

export const TextBreakLine = Template.bind({});
TextBreakLine.args = {
  imageId: 'AD3MbBi',
  orgImageWidth: 1,
  orgImageHeight: 1,
  description: `The technique consists in taking several videos with my iNova PLB Cx camera mounted on a Maksutov 150/1800mm telescope. Due to the small sensor of the camera, I only see a little part of the Moon, that's why I take several videos to cover the whole Moon. I have then extracted snapshots from the videos, aligned/stacked the 5% best quality frames, and have finally merged all the images to made this picture of the Moon.\n\n\n\n\n\nAll my work is on my Instagram : https://www.instagram.com/astronophilos Every following means a lot, thank you :)\n\nPS: Stars have been observed on another part of the sky and added in processing.`,
};

export const VideoType = Template.bind({});
VideoType.args = {
  type: 'video/mp4',
  imageId: '1V43Io3',
  orgImageWidth: 300,
  orgImageHeight: 400,
  description: `Video type`,
};
