import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PostSideRelativeList from './PostSideRelativeList';

export default {
  title: 'Components/PostSideRelativeList',
  component: PostSideRelativeList,
  parameters: {
    docs: {
      description: {
        component: ` PostSideRelativeList 컴포넌트는 Gallery 페이지 우측에 위치하며, Post와 연관된 Post 목록들을 제공하는 컴포넌트 입니다.\n
        `,
      },
    },
  },
} as ComponentMeta<typeof PostSideRelativeList>;

const Template: ComponentStory<typeof PostSideRelativeList> = args => <PostSideRelativeList {...args} />;

export const Default: ComponentStory<typeof PostSideRelativeList> = Template.bind({});
Default.args = {
  mainPostId: 'DZRDaHc',
};
