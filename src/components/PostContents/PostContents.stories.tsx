import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PostContents } from '@/components';

export default {
  title: 'Components/PostContents',
  component: PostContents,
  parameters: {
    docs: {
      description: {
        component: `**PostContents** 컴포넌트는 이미지/글/tag를 포함한 POST 내용을 보여줍니다. 글의 경우 URI 형식에 한해 밑줄이 그어지며, hover시 애니메이션이 동작합니다.`,
      },
    },
  },
} as ComponentMeta<typeof PostContents>;

const Template: ComponentStory<typeof PostContents> = args => <PostContents {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: [
    {
      bandWidth: 75155070963,
      description: "I'm on the next level",
      hasSound: false,
      id: 'lqmwC7K',
      imageHeight: 1080,
      imageWidth: 1080,
      type: 'image/png',
    },
    {
      bandWidth: 75155070963,
      description: "I'm on the next level",
      hasSound: false,
      id: 'AD3MbBi',
      imageHeight: 1080,
      imageWidth: 1080,
      type: 'image/png',
    },
  ],
  tags: [
    {
      name: 'kyoshi_warriors',
      displayName: 'kyoshi warriors',
      backgroundImageId: 'oAtvuB2',
    },
    {
      name: 'science_and_tech',
      displayName: 'science and tech',
      backgroundImageId: 'bdRjrrI',
    },
    {
      name: 'photography',
      displayName: 'photography',
      backgroundImageId: 'g37hMZ3',
    },
  ],
};
