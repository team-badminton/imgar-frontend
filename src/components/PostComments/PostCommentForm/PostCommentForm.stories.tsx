import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PostCommentForm from './PostCommentForm';

export default {
  title: 'Components/PostCommentForm',
  component: PostCommentForm,
  parameters: {
    docs: {
      description: {
        component: `**PostCommentForm** 컴포넌트는 Post의 댓글을 작성할 수 있는 Form 컴포넌트 입니다.`,
      },
    },
  },
} as ComponentMeta<typeof PostCommentForm>;

const Template: ComponentStory<typeof PostCommentForm> = args => <PostCommentForm {...args} />;

export const Default = Template.bind({});
