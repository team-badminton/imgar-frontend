import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PostComment from './PostComment';

export default {
  title: 'Components/PostComment',
  component: PostComment,
  parameters: {
    docs: {
      description: {
        component: `PostComment 컴포넌트 입니다. 댓글 하나를 렌더링하며, 대댓글이 있는지에 따라 하단 우측에 reply 버튼이 옵션으로 렌더링됩니다.`,
      },
    },
  },
} as ComponentMeta<typeof PostComment>;

const Template: ComponentStory<typeof PostComment> = args => <PostComment {...args} />;

export const parentWithNoChildComments = Template.bind({});
parentWithNoChildComments.args = {
  author: 'Francis31415',
  dateTime: 1100012300,
  comment: 'Test Comment',
  downCount: 100,
  upCount: 1,
  parentCommentId: '0',
  childrenComments: [],
};

export const parentWithChildComments = Template.bind({});
parentWithChildComments.args = {
  id: '2144157441',
  author: 'Francis31415',
  dateTime: 1100012300,
  comment: 'Test Comment',
  downCount: 100,
  upCount: 1,
  parentCommentId: '0',
  childrenComments: [
    {
      id: '2144157442',
      author: 'Francis31415',
      dateTime: 1100012300,
      comment: 'Test Comment',
      downCount: 100,
      upCount: 1,
      parentCommentId: '2144157441',
      childrenComments: [],
    },
    {
      id: '2144157443',
      author: 'Francis31415',
      dateTime: 1100012300,
      comment: 'Test Comment',
      downCount: 100,
      upCount: 1,
      parentCommentId: '2144157441',
      childrenComments: [
        {
          id: '2144157444',
          author: 'Francis31415',
          dateTime: 1100012300,
          comment: 'Test Comment',
          downCount: 100,
          upCount: 1,
          parentCommentId: '2144157443',
          childrenComments: [],
        },
      ],
    },
  ],
};

export const childComment = Template.bind({});
childComment.args = {
  author: 'Francis31415',
  dateTime: 1100012300,
  comment: 'Test Comment',
  downCount: 100,
  upCount: 1,
  parentCommentId: '2144157443',
  childrenComments: [],
};
