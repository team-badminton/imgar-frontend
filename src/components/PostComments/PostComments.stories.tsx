import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PostComments } from '@/components';

export default {
  title: 'Components/PostComments',
  component: PostComments,
  parameters: {
    docs: {
      description: {
        component: `**PostComments** 컴포넌트는 Post에 달린 댓글을 보여주는 컴포넌트입니다.`,
      },
    },
  },
} as ComponentMeta<typeof PostComments>;

const Template: ComponentStory<typeof PostComments> = args => <PostComments {...args} />;

export const Default = Template.bind({});
Default.args = {
  postId: 'HelNoma',
};
