import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PostFigure } from '@/components';

export default {
  title: 'Components/PostFigure',
  component: PostFigure,
  parameters: {
    docs: {
      description: {
        component: `**PostFigure** 컴포넌트는 사용자가 업로드한 이미지와 이미지를 설명하는 글을 보여주는 컴포넌트입니다.`,
      },
    },
  },
} as ComponentMeta<typeof PostFigure>;

const Template: ComponentStory<typeof PostFigure> = args => <PostFigure {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageId: 'Ys263e0',
  orgImageWidth: 1080,
  orgImageHeight: 1080,
  description: 'Non URI TEXT\n\nhttps://www.instagram.com/p/CBTjzNApIb6/?igshid=7cvtuawzabvw',
};
